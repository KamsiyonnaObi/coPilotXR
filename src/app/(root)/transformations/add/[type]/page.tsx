import MediaUploader from "@/src/app/components/shared/MediaUploader";
import React from "react";

const AddTransformationTypePage = () => {
  return (
    <div className="media-uploader-field">
      <MediaUploader
        onValueChange={() => {}}
        setImage={() => {}}
        publicId=""
        image=""
        type=""
      />
    </div>
  );
};

export default AddTransformationTypePage;
