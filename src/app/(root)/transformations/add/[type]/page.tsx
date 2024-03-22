import React from "react";

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserById } from "@/src/app/lib/actions/user.action";
import UploadForm from "@/src/app/components/shared/UploadForm";

type FormProps = {
  params: { type: string };
};

const AddTransformationTypePage = async ({ params }: FormProps) => {
  const { userId } = auth();
  const { type } = params;

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await getUserById(userId);
  return (
    <section>
      <UploadForm userId={user._id} transformationType={type} />
    </section>
  );
};

export default AddTransformationTypePage;
