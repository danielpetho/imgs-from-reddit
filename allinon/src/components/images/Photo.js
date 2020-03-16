import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../pic.jpg';
import image2 from '../../laci.jpg';

const Photo = () => {
    return (
        <div className="photoview">
            <div className="photocontainer">
                <Link to="/teszt"><img src={image1} className="photo" alt="userpapa"></img></Link>
            </div>
            <div className="photocontainer">
                <img src={image2} className="photo" alt="lacika"></img>
            </div>
            <div className="photocontainer">
                <img src={image1} className="photo" alt="nana"></img>
            </div>
            <div className="photocontainer">
                <img src={image2} className="photo" alt="ember"></img>
            </div>
        </div>
    );
};

export default Photo;