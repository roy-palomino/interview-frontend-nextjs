import { User, Gender } from "../types";
import Image from "next/image";

import { FC, useState, ClassicElement } from "react";
import {
  Male,
  Female,
  Cake,
  Phone,
  Home,
  PhoneIphone,
  Email,
  Public,
} from "@mui/icons-material";

interface Props {
  user: User;
}

function getGender(gender: Gender) {
  if (gender === "male")
    return (
      <div className="!text-blue-400">
        <Male className="!mr-0" /> {gender}
      </div>
    );
  return (
    <div className="!text-pink-500">
      <Female className="!mr-0" /> {gender}
    </div>
  );
}

function getUserAdress(user: User) {
  return `${user.location.street.number} ${user.location.street.name}, ${user.location.state}`;
}

const UserCard: FC<Props> = ({ user }) => {
  const [userInfo, _] = useState<
    Array<{ icon: ClassicElement<any>; value: string }>
  >([
    {
      icon: <Home fontSize="small" />,
      value: getUserAdress(user),
    },
    {
      icon: <Phone fontSize="small" />,
      value: user.phone,
    },
    {
      icon: <PhoneIphone fontSize="small" />,
      value: user.cell,
    },
    {
      icon: <Email fontSize="small" />,
      value: `${user.email}`,
    },
  ]);

  return (
    <li className="col-span-2 md:col-span-1 overflow-x-hidden">
      <div
        className="border mx-auto border-gray-300 rounded-lg max-w-sm mb-6 flex flex-col items-center py-6 px-2 sm:px-4 md:px-6 shadow-lg hover:border-blue-200 hover:shadow-blue-300 transition-shadow hover:shadow-lg font-wix text-gray-500"
        style={{ minHeight: 510 }}
      >
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <Image
              src={user.picture.large}
              height={120}
              width={120}
              alt={`${user.name.first}-${user.name.last}-profile-picture`}
              className="rounded-full mb-3 shadow-blue-300 shadow-md mx-auto hover:shadow-lg hover:shadow-blue-300 duration-300 hover:scale-105 transition-all"
            ></Image>
          </div>
          <h2 className="text-4xl text-center cursor-default font-courgette transition-all duration-200 hover:text-blue-500 hover:scale-105">
            {user.name.first} {user.name.last}
          </h2>
        </div>

        <div className="w-full space-y-6">
          <div className="flex items-center align-middle justify-center">
            <Public className="text-emerald-500" fontSize="small" />{" "}
            {user.location.country}, {user.location.city}
          </div>
          <div className="flex w-full justify-between px-12">
            <div className="flex align-middle capitalize font-semibold text-slate-400">
              {getGender(user.gender)}
            </div>
            <div className="flex align-middle font-semibold">
              <Cake fontSize="small" /> {user.dob.age}
            </div>
          </div>
        </div>

        <hr className="border border-gray-300 w-full my-8"></hr>

        <div className="flex flex-col w-full px-2 md:px-6 space-y-2">
          {userInfo.map((info, index) => (
            <div
              key={index}
              className="flex align-middle cursor-default hover:text-blue-500 hover:underline transition-all"
            >
              {info.icon} {info.value}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default UserCard;
