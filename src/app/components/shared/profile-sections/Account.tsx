import React from "react";
import Image from "next/image";

import Divider from "../Divider";

interface ProfileAccountProps {
  photo: string;
  username: string;
  email: string;
}
const Account = ({ photo, username, email }: ProfileAccountProps) => {
  return (
    <section className="py-4">
      <h3 className="p-18-bold py-2">Your account</h3>
      <section className="flex flex-col gap-4">
        <div className="space-y-2 pt-2">
          <p className="p-14-bold">Profile Photo</p>
          <div className="h-[80px] w-[80px] rounded-full">
            <Image
              className="rounded-full"
              src={photo}
              alt="profile photo"
              width={80}
              height={80}
            />
          </div>
        </div>
        <Divider />
        <div className="space-y-4">
          <p className="p-14-bold">Username</p>
          <p className="p-14-regular">{username}</p>
        </div>
        <Divider />
        <div className="space-y-4">
          <p className="p-14-bold">Email</p>
          <p className="p-14-regular">{email}</p>
        </div>
        <Divider />
      </section>
    </section>
  );
};

export default Account;
