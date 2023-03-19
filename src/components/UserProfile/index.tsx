import { FC } from "react";

export interface IProfileProps {
  src: string;
}

const Profile: FC<IProfileProps> = ({ src }) => {
  return (
    <div>
      <img className={"rounded-full w-44"} src={src} />
    </div>
  );
};

export default Profile;
