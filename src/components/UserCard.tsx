import { User } from "../types";
import { FC } from "react";

interface Props {
  user: User;
}

const UserCard: FC<Props> = ({ user }) => {
  return (
    <li>
      <div className="border mx-auto border-gray-300 rounded-lg max-w-sm mb-6 flex flex-col items-center py-6 transition-shadow hover:shadow-md">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <img
              src={user.picture.medium}
              className="rounded-full mb-3 mx-auto h-28 shadow-blue-300 shadow-md"
            ></img>
          </div>
          <h2 className="text-4xl text-gray-700 cursor-default font-courgette">
            {user.name.first} {user.name.last}
          </h2>
        </div>
        <div className="my-6">
          details here
        </div>
      </div>
    </li>
  );
};

export default UserCard;
