"use client";

import { useToast } from "@/shadcn/components/ui/use-toast";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

type MediaUploaderProps = {
  setParentFormData: (formKey: string, url: string) => void;
  setImageUrl?: React.Dispatch<any>;
  imageUrl?: any;
};

const MediaUploader = ({
  setParentFormData,
}: MediaUploaderProps) => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    setParentFormData("image", result?.info?.secure_url);

    toast({
      title: "Image uploaded successfully",

      duration: 5000,
      className: "success-toast",
    });
  };
  const onUploadErrorHandler = () => {
    toast({
      title: "Something went wrong while uploading",
      description: "Please try again",
      duration: 5000,
      className: "error-toast",
    });
  };
  return (
    <CldUploadWidget
      uploadPreset="copilot_xr"
      options={{ sources: ["local", "url", "unsplash"], resourceType: "image" }}
      onUploadAdded={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4" onClick={() => open()}>
          <div className="media-uploader_cta">
            <div className="media-uploader_cta-image">
              <Image
                src="/assets/icons/add.svg"
                alt="Add Image"
                width={24}
                height={24}
              />
            </div>
            <p className="p-14-medium">Click here to upload image</p>
          </div>
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
