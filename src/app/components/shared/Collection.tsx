import React from "react";
import Header from "./Header";
import GalleryCard from "./GalleryCard";
import { IImage } from "../../lib/database/models/image.model";


const Collection = ({ JSONimages }: {JSONimages: string}) => {
  const images = JSON.parse(JSONimages)

  return (
    <>
      <section>
        <Header title="Gallery" />
      </section>
      {images.length > 0 ? (
        <ul className="collection-list">
          {images.map((image: IImage) => (
            <GalleryCard 
              key={image._id} 
              title={image.title} 
              author={image.author.username} 
              secureURL={image.secureURL}
              publicId={image.publicId}
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
