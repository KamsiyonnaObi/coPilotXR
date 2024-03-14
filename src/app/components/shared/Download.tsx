import React from 'react'
import Image from "next/image";
import { getCldImageUrl } from 'next-cloudinary';

const Download = ({publicId}: {publicId: string}) => {
    const downloadURL = getCldImageUrl({
        width: 767,
        height: 767,
        src: publicId,
        flags: ['attachment']
      });;

  return (
    <a href={`${downloadURL}`}>
        <Image
            src="/assets/icons/download.svg"
            alt="Add Image"
            width={24}
            height={24}
        />
    </a>
  )
}

export default Download