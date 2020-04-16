import React from 'react';
import { Link } from 'react-router-dom';

const Photo = (props) => {
    const {mediaType, src, alt, gv} = props;
    const gridview_container = gv === "grid" ? "photocontainer-grid" : "photocontainer-big"
    const gridview_photo = gv === "grid" ? "photo-grid" : "photo-big"
    const component = mediaType === "img" ? (
        <div className={gridview_container}>
            <Link to="/teszt"><img src={src} className={gridview_photo} alt={alt}></img></Link>
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