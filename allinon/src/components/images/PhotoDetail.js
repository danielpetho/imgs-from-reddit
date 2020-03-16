import React from 'react';
import image1 from '../../pic.jpg';

const PhotoDetail = () => {
    return (
        <div className="photoCard">
            <div><img src={image1} className="photo" alt="lacika"></img></div>
            <div className="photoDetails">
                <div className="info-pd">
                    <div className="user-pd">
                        <span><i className="material-icons md-12">account-circle</i></span>
                        <span>u/lacika</span>
                    </div>
                    <div className="links-pd">
                        <span><i className="material-icons md-12">link</i></span>
                    </div>
                </div>
                <div className="tags-pd">
                    <span>#art</span>
                    <span>#travel</span>
                </div>
            </div>
        </div>
    )
};

export default PhotoDetail;

