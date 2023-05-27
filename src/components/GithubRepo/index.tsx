import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { link } from "fs";

export interface IGitbubRepoProps {
  title: string;
  repoLink?: string;
}

const GitbubRepo: FC<IGitbubRepoProps> = ({ title, repoLink }) => {
  const navigateUrl = () => {
    window.open(repoLink, "_blank");
  };

  return (
    <div>
      <Card
        sx={{
          width: 345,
          backgroundColor: "#4f5868",
          marginBottom: 2,
        }}
      >
        <CardContent>
          <p onClick={navigateUrl} className="text-indigo-400 cursor-pointer">
            {title}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GitbubRepo;
