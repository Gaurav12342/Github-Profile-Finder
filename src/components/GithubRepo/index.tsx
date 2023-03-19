import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export interface IGitbubRepoProps {
  title: string;
}

const GitbubRepo: FC<IGitbubRepoProps> = ({ title }) => {
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
          <p className="text-indigo-400">{title}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GitbubRepo;
