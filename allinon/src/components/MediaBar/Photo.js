import React from 'react';

const Photo = (props) => {
    const {mediaType, src, alt, gv, link} = props;
    const gridview_container = gv === "grid" ? "image__container_grid" : "image__container_big"
    const gridview_photo = gv === "grid" ? "image_grid" : "image_big"
    const component = mediaType === "img" ? (
        <div className={gridview_container}>
            <a href={link} ><img  src={src} className={gridview_photo} alt={alt}></img>  </a>
            <div className="image_overlay">
                <div className="image_overlay__text">{"r/"+alt}</div>
            </div>
        </div>
        ) : (
            <div className={gridview_container}>
                <video className={gridview_photo} alt="video" autoPlay loop src={src}>
                </video>
        </div>
        );
    
    return component;

    
    
};

export default Photo;