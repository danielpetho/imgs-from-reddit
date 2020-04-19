import React from 'react';
import { Link } from 'react-router-dom';

const Photo = (props) => {
    const {mediaType, src, alt, gv, link} = props;
    const gridview_container = gv === "grid" ? "photocontainer-grid" : "photocontainer-big"
    const gridview_photo = gv === "grid" ? "photo-grid" : "photo-big"
    const component = mediaType === "img" ? (
        <div className={gridview_container}>
            <a href={link} ><img  src={src} className={gridview_photo} alt={alt}></img>  </a>
            <div className="overlay">
                <div className="overlay__text">{"r/"+alt}</div>
            </div>
        </div>
        ) : (
            <div className={gridview_container}>
            <Link to="/teszt">
                <video className={gridview_photo} alt="video" autoPlay loop src={src}>
                </video>
            </Link>
        </div>
        );
    
    return component;

    
    
};

export default Photo;