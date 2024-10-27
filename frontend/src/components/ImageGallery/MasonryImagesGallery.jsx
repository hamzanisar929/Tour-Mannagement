import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./ImageGallery";

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {galleryImages.map((item, index) => {
          return (
            <img
              className="masonry__img"
              src={item}
              key={index}
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
              alt=""
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImagesGallery;
