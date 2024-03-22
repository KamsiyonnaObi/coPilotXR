"use client";

import React from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { CldImage, getCldImageUrl } from "next-cloudinary";

import { addImage } from "../../lib/actions/images.action";
import { useToast } from "@/shadcn/components/ui/use-toast";
import MediaUploader from "./MediaUploader";
import TransormedImage from "./TransormedImage";
import { aspectRatioOptions } from "../../constants";
import { AspectRatioKey } from "../../lib/utils";

export const formSchema = z.object({
  title: z.string().min(3),
  desc: z.string().max(25).optional(),
  secureURL: z.string().url("please upload an image"),
  transformedURL: z.union([z.literal(""), z.string().trim().url()]),
  publicId: z.string(),
  aspectRatio: z.string().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;

const UploadForm = ({
  userId,
  transformationType,
}: {
  userId: string;
  transformationType?: string;
}) => {
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    watch,
    control,
    reset,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      desc: "",
      secureURL: "",
      transformedURL: "",
      publicId: "",
      aspectRatio: "",
    },
    resolver: zodResolver(formSchema),
  });

  const imageUrl = watch("secureURL");
  const publicId = watch("publicId");

  console.log(errors);
  const onSubmit = async (data: {
    title: string;
    desc: string;
    secureURL: string;
    publicId: string;
  }) => {
    const request: AddImageParams = { image: data, userId: userId };
    const response = await addImage(request);

    if (response?.message === "success") {
      toast({
        title: "Image uploaded successfully",
        duration: 5000,
        className: "success-toast",
      });
      alert("Image uploaded successfully");
      router.push("/");
    } else {
      console.log("failed");
    }
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

                {/* Aspect ratio dropdown */}
                {transformationType === "fill" && (
                  <div className="mt-6 sm:max-w-md">
                    <label
                      htmlFor="aspectRatio"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Aspect Ratio
                    </label>
                    <Controller
                      name="aspectRatio"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="input-field"
                          onChange={(e) => field.onChange(e.target.value)}
                        >
                          <option value="">Select Aspect Ratio</option>
                          {Object.keys(aspectRatioOptions).map((key) => (
                            <option key={key} value={key}>
                              {aspectRatioOptions[key as AspectRatioKey].label}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                    <p className="text-main-700">
                      {errors.aspectRatio?.message}
                    </p>
                  </div>
                )}

                <section className="">
                  <p className="text-main-700">{errors.secureURL?.message}</p>
                  <div className="mt-6 sm:max-w-md">
                    <MediaUploader
                      imageUrl={imageUrl}
                      setParentFormData={setValue as any}
                    />
                  </div>
                  {transformationType && (
                    <div className="mt-6 sm:max-w-md">
                      <TransormedImage
                        type={transformationType}
                        publicId={publicId}
                        setParentFormData={setValue as any}
                      />
                    </div>
                  )}
                </section>
                <div className="mt-6 flex items-center gap-x-6">
                  <button
                    onClick={() => reset()}
                    className="rounded-md px-3 py-2 text-sm font-semibold  hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    cancel
                  </button>

                  <button
                    type="submit"
                    onClick={() => onSubmit}
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
