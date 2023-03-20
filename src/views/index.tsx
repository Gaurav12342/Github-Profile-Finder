import { FC, useEffect } from "react";
import logo from "img/pic.svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { GitbubRepo, Profile, Search } from "components/index";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetail, userDetails } from "store/UserDetail/userDetailSlice";

const Root: FC = () => {
  const dispatch: any = useDispatch();
  const userDetailsData = useSelector(userDetails);

  useEffect(() => {
    dispatch(getUserDetail());
  }, [dispatch]);

  console.log("userDetailsData =>", userDetailsData);

  const { avatar_url, name, bio, company, location, followers, following } =
    userDetailsData;
  return (
    <div>
      <div>
        <img src={logo} className="h-64" alt="logo" />
        <h1 className="text-3xl font-bold text-indigo-400">GitHub Thinker</h1>
      </div>

      <div className="my-5">
        <Search placeholder="Tdsest" />
      </div>

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
            </CardContent>
          </Card>
        </div>

        <div>
          {[1, 2, 3, 4, 5]?.map((data) => {
            return <GitbubRepo title={"Github Finder1"} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Root;
