import React from 'react';
import Subreddit from './Subreddit';
import './styles.css';


const SubredditBar = (props) => {
    const { subreddits, onDelete } = props;
    const subredditList = subreddits.map(e => {
        return (
           <Subreddit key={e.id} id={e.id} sub={e.sub} onDelete={onDelete}/>
        )
    })

    return (
        <div className="subreddit__bar">
            {subredditList}
        </div>
    );
};

export default SubredditBar;