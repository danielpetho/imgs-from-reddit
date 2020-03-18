import React from 'react';
import { Link } from 'react-router-dom';

const Photo = (props) => {
    return (
        <div className="photocontainer">
            <Link to="/teszt"><img src={props.src} className="photo" alt="userpapa"></img></Link>
        </div>
    );
};

export default Photo;