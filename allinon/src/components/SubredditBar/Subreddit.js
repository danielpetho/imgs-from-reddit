import React from 'react';

const Subreddit = (props) => {
    const {id, tag, onDelete} = props;
    return (
        <div className="subreddit">
            <span>{tag}</span>
            <span className="subreddit__close" onClick={() => onDelete(id, tag)}><i className="material-icons md-18">close</i></span>
        </div>
    );
};

export default Subreddit;