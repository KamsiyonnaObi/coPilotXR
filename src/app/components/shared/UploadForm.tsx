"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import MediaUploader from "./MediaUploader";

export const formSchema = z.object({
  title: z.string().optional(),
  desc: z.string().max(25).optional(),
  image: z.string().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;

const UploadForm = () => {
  
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { title: "", desc: "", image: "" },
    resolver: zodResolver(formSchema),
  });

  const imageUrl = getValues("image")

  const onSubmit = () => {
    
    console.log(getValues("image"))
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
