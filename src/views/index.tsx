import { FC, useEffect, useState } from "react";
import logo from "img/pic.svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { GitbubRepo, Profile, Search } from "components/index";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserDetail,
  userDetails,
  userDetailStatus,
} from "store/UserDetail/userDetailSlice";
import {
  getUserRepos,
  userRepos,
  userRepostatus,
} from "store/UserRepo/userRepoSlice";
import { useDebounce } from "hooks/useDebounce";
import { Scrollbars } from "react-custom-scrollbars";
import CircularProgress from "@mui/material/CircularProgress";

const Root: FC = () => {
  const dispatch: any = useDispatch();
  const userDetailsData = useSelector(userDetails);
  const detailLoader = useSelector(userDetailStatus);
  const userReposData = useSelector(userRepos);
  const repoLoader = useSelector(userRepostatus);
  const [search, setSearch] = useState("");
  const result = useDebounce(search, 1000);

  useEffect(() => {
    if (result) {
      dispatch(getUserDetail(result));
      dispatch(getUserRepos(result));
    }
  }, [dispatch, result]);

  const { avatar_url, name, bio, company, location, followers, following } =
    userDetailsData;

  return (
    <div>
      <div className="flex flex-col">
        <img src={logo} className="h-64" alt="logo" />
        <h1 className="text-3xl font-bold text-indigo-400">GitHub Thinker</h1>
      </div>

      <div className="my-5">
        <Search
          placeholder="Search user"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {detailLoader && repoLoader ? (
        <>
          <CircularProgress />+
        </>
      ) : (
        <div className="flex space-x-8">
          <div>
            <Card sx={{ width: 345, backgroundColor: "#4f5868" }}>
              <div className="mt-1 flex justify-center">
                <Profile src={avatar_url} />
              </div>
              <CardContent>
                <hr className="border-b-1 border-gray-400" />
                <div className="flex justify-start py-3">
                  <p className="text-white font-bold">Name: {name}</p>
                </div>

                <hr className="border-b-1 border-gray-400" />
                <div className="flex justify-start py-3">
                  <p className="text-white font-bold">Bio: {bio}</p>
                </div>

                <hr className="border-b-1 border-gray-400" />
                <div className="flex justify-start py-3">
                  <p className="text-white font-bold">Company: {company}</p>
                </div>

                <hr className="border-b-1 border-gray-400" />
                <div className="flex justify-start py-3">
                  <p className="text-white font-bold">Location: {location}</p>
                </div>

                <hr className="border-b-1 border-gray-400" />
                <div className="flex justify-start py-3">
                  <p className="text-white font-bold">Followers: {followers}</p>
                </div>

                <hr className="border-b-1 border-gray-400" />
                <div className="flex justify-start py-3">
                  <p className="text-white font-bold">Following: {following}</p>
                </div>

                <hr className="border-b-1 border-gray-400" />
                <div className="flex justify-start py-3">
                  <p className="text-white font-bold">
                    Repository: {userReposData.length ?? 0}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Scrollbars style={{ width: 360, height: 565 }}>
            {userReposData?.map((data: any) => {
              return (
                <div>
                  <GitbubRepo repoLink={data?.svn_url} title={data?.name} />
                </div>
              );
            })}
          </Scrollbars>
        </div>
      )}
    </div>
  );
};

export default Root;
