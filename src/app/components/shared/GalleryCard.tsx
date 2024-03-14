"use client"
import { CldImage } from "next-cloudinary";
import Download from "./Download";


interface GalleryCardProps {
    title: string,
    author: string,
    secureURL: string,
    publicId: string
}
const GalleryCard = ({ title, author, secureURL, publicId }: GalleryCardProps) => {
    console.log(publicId)
    return (
      <li>
        <div  className="collection-card">
          <CldImage
            src={secureURL}
            alt={title}
            width={500}
            height={500}
            loading="lazy"
            className="h-52 w-full rounded-[10px] object-cover"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          />
          <div className="flex-between">
            <div>
                <p className="p-16-semibold mr-3 line-clamp-1 text-dark-700">
                {title}
                </p>
                <p className="p-14-semibold mr-3 line-clamp-1 text-dark-700">
                {author}
                </p>
            </div>
            <div className="hover:shadow-lg">
                <Download publicId={publicId}/>
            </div>
          </div>
        </div>
      </li>
    );
  };

  export default GalleryCard