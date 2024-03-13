import React from "react";

import UploadForm from "../../components/shared/UploadForm";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "../../lib/actions/user.action";

const ImageUpload = async () => {
  const {userId} = auth()

  if(!userId){redirect("/sign-in")}

  const user = await getUserById(userId)
  return (
    <section>
      <UploadForm userId={user._id}/>
    </section>
  );
};

export default ImageUpload;
