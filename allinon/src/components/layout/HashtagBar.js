import React from 'react';
import Hashtag from './Hashtag';

const HashtagBar = (props) => {
    const { searchtags, onDelete } = props;
    const hashtagList = searchtags.hashtags.map(e => {
        return (
           <Hashtag key={e.id} id={e.id} tag={e.tag} onDelete={onDelete}/>
        )
    })

    return (
        <div className="hashtag-bar">
            {hashtagList}
        </div>
    );
};

export default HashtagBar;