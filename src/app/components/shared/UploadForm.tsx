"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import MediaUploader from "./MediaUploader";
import { addImage } from "../../lib/actions/images.action";
import { useRouter } from "next/navigation";
import { useToast } from "@/shadcn/components/ui/use-toast";

export const formSchema = z.object({
  title: z.string().min(3),
  desc: z.string().max(25).optional(),
  secureURL: z.string().url("please upload an image"),
  publicId: z.string()
});

export type FormSchema = z.infer<typeof formSchema>;

const UploadForm = ({userId}: {userId: string}) => {
  const router = useRouter()
  const {toast } = useToast()
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { title: "", desc: "", secureURL: "", publicId: "" },
    resolver: zodResolver(formSchema),
  });

  const imageUrl = watch("secureURL")

  const onSubmit = async (data: {title: string, desc:string, secureURL:string, publicId:string}) => {
    
    const request: AddImageParams = {image: data, userId: userId}
    const response = await addImage(request)
    if (response?.message === "success"){
      toast({
        title: "Image uploaded successfully",
        duration: 5000,
        className: "success-toast",
      });
      alert("Image uploaded successfully")
      router.push("/")
    }
    console.log("failed")
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="rounded-md  sm:max-w-md">
                  <p className="text-main-700">{errors.title?.message}</p>
                  <input
                    className="input-field"
                    placeholder="title"
                    {...register("title")}
                  />
                </div>
                <label
                  htmlFor="desc"
                  className="block text-sm mt-3 font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="rounded-md  sm:max-w-md">
                  <p className="text-main-700">{errors.desc?.message}</p>
                  <input
                    className="input-field"
                    placeholder="short description"
                    {...register("desc")}
                  />
                </div>
                <p className="text-main-700">{errors.secureURL?.message}</p>
                <div className="mt-6 sm:max-w-md">
                  <MediaUploader
                    imageUrl={imageUrl}
                    setParentFormData={setValue as any}
                  />
                </div>
                <div className="mt-6 flex items-center gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md bg-main-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UploadForm;
