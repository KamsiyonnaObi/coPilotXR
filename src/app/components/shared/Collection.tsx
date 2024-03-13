import React from "react";
import Header from "./Header";

interface CollectionProps {
  images: string[]; // TODO change to IImage type
}

const Collection = ({ images }: CollectionProps) => {
  return (
    <>
      <section>
        <Header title="Gallery" />
      </section>
      {images.length > 0 ? (
        <ul className="collection-list">
          {images.map((image) => (
            <div key={image}>{image}</div>
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
