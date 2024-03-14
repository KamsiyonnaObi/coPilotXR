import React from "react";
import Header from "../../components/shared/Header";
import Divider from "../../components/shared/Divider";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "../../lib/actions/user.action";
import Account from "../../components/shared/profile-sections/Account";
import BillingSection from "../../components/shared/profile-sections/Billing";
import Link from "next/link";

const ProfilePage = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await getUserById(userId);

  return (
    <>
      <section className="flex-between">
        <Header title="Your Profile" />
        <Link
          className="bg-main-700 p-14-bold py-3 px-4 rounded-md text-white hover:bg-red-400 focus:ring-2 focus:ring-dark-700"
          href={"/user-profile"}
        >
          {" "}
          Edit Profile{" "}
        </Link>
      </section>
      <Account photo={user.photo} username={user.username} email={user.email} />
      <BillingSection creditBalance={user.creditBalance} planId={user.planId} />
    </>
  );
};

export default ProfilePage;
