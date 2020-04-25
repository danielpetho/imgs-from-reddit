import React from 'react';

const Subreddit = (props) => {
    const {id, sub, onDelete} = props;
    return (
        <div className="subreddit">
            <span>{sub}</span>
            <span className="subreddit__close" onClick={() => onDelete(id, sub)}><i className="material-icons md-18">close</i></span>
        </div>
    );
};

export default Subreddit;