import React from 'react';
import { Link } from 'react-router-dom';

const Photo = (props) => {
    const {mediaType, src} = props;
    let component = mediaType === "img" ? (
        <div className="photocontainer">
            <Link to="/teszt"><img src={src} className="photo" alt="imaaaa"></img></Link>
        </div>
        ) : (
            <div className="photocontainer">
            <Link to="/teszt">
                <video className="photo" alt="video" autoplay>
                    <source src={src}></source>
                </video>
            </Link>
        </div>
        );
    
    return component;

    
    
};

export default Photo;