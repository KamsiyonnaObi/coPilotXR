"use client";

import React, { useState, useEffect } from "react";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

interface TransformedImageProps {
  hasDownload?: boolean;
  publicId: string;
  type: string;
  setParentFormData: (formKey: string, url: string) => void;
}

const TransormedImage = ({
  publicId,
  type,
  setParentFormData,
  hasDownload = false,
}: TransformedImageProps) => {
  const [isTransforming, setIsTransforming] = useState(false);

  let transformationConfig: Transformations = {};
  if (type === "removeBackground") {
    transformationConfig = { removeBackground: true };
  } else if (type === "fillBackground") {
    transformationConfig = { fillBackground: true };
  }
  useEffect(() => {
    setIsTransforming(true);
    // Calculate transformedURL
    const url = getCldImageUrl({
      src: publicId,
      width: 960,
      height: 600,
      ...transformationConfig,
    });
    // Update transformedURL state
    setParentFormData("transformedURL", url);
    setParentFormData("secureURL", url);
  }, [publicId, type]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-between">
        <h3 className="h3-bold text-dark-700">Transformed</h3>

        {hasDownload && (
          <button className="download-btn">
            <Image
              src="/assets/icons/download.svg"
              alt="Download"
              width={24}
              height={24}
              className="pb-[6px]"
            />
          </button>
        )}
      </div>

      {publicId ? (
        <div className="relative">
          <CldImage
            src={publicId}
            width={767}
            height={767}
            alt="transformed image"
            sizes={"(max-width: 767px) 100vw, 50vw"}
            className="transformed-image"
            onLoad={() => {
              setIsTransforming && setIsTransforming(false);
            }}
            {...transformationConfig}
          />

          {isTransforming && (
            <div className="transforming-loader">
              <Image
                src="/assets/icons/spinner.svg"
                width={50}
                height={50}
                alt="spinner"
              />
              <p className="text-white/80">Please wait...</p>
            </div>
          )}
        </div>
      ) : (
        <div className="transformed-placeholder">Transformed Image</div>
      )}
    </div>
  );
};

export default TransormedImage;
