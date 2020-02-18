import React from 'react';

const Hashtag = (props) => {
    const {id, tag, onDelete} = props;
    return (
        <div className="hashtag">
            <span>{tag}</span>
            <span className="hashtag-x" onClick={() => onDelete(id)}><i className="material-icons md-18">close</i></span>
        </div>
    );
};

export default Hashtag;