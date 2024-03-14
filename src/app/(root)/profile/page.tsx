import React from "react";
import Header from "../../components/shared/Header";
import Divider from "../../components/shared/Divider";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "../../lib/actions/user.action";
import Account from "../../components/shared/profile-sections/Account";
import BillingSection from "../../components/shared/profile-sections/Billing";

const ProfilePage = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await getUserById(userId);

  // console.log(user);

  return (
    <>
      <Header title="Your Profile" />
      <Account photo={user.photo} username={user.username} email={user.email} />
      <BillingSection creditBalance={user.creditBalance} planId={user.planId} />
    </>
  );
};

export default ProfilePage;
