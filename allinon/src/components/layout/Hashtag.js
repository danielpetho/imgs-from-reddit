import React from 'react';

const Hashtag = (props) => {
    return (
        <div className="hashtag">
            <span>{props.tag}</span>
            <span className="hashtag-x"><i className="material-icons md-18">close</i></span>
        </div >
    );
};

export default Hashtag;