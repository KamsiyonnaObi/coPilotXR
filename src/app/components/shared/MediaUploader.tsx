"use client";

import { useToast } from "@/shadcn/components/ui/use-toast";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

type MediaUploaderProps = {
  setParentFormData: (formKey: string, url: string) => void;  
  imageUrl: string;
};

const MediaUploader = ({
  setParentFormData,
  imageUrl
}: MediaUploaderProps) => {
  const { toast } = useToast();

  const onUploadSuccessHandler = (result: any) => {
    
    setParentFormData("secureURL", result?.info?.secure_url);


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
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <>
          <div className="flex flex-col gap-4" >
          { imageUrl !== "" ? (
            <div className="cursor-pointer overflow-hidden rounded-[10px]">
              <CldImage 
                width={767}
                height={767}
                src={imageUrl} 
                alt="uploaded image"
                crop="fill" 
                sizes={"(max-width: 767px) 100vw, 50vw"}
                className="media-uploader_cldImage"
              />
            </div>
          ):(
              <div className="media-uploader_cta" onClick={() => open()}>
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
          )}
          </div>
        </>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
