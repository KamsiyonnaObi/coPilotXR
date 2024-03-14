import React from "react";
import Header from "./Header";
import GalleryCard from "./GalleryCard";
import { IImage } from "@/src/app/lib/database/models/image.model"

const Collection = ({ images }: {images: IImage[]}) => {
  return (
    <>
      <section>
        <Header title="Gallery" />
      </section>
      {images.length > 0 ? (
        <ul className="collection-list">
          {images.map((image) => (
            <GalleryCard 
              key={image._id} 
              title={image.title} 
              author={image.author.username} 
              secureURL={image.secureURL}
            />
          ))}
        </ul>
      ) : (
        <div className="collection-empty">
          <p className="p-20-semibold">Upload the first image! </p>
        </div>
      )}
    </>
  );
};

export default Collection;
