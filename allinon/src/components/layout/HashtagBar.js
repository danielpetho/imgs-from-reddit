import React from 'react';
import HashtagContainer from '../../containers/HashtagContainer';
import Hashtag from './Hashtag';

const HashtagBar = (props) => {
    const { search } = props;
    console.log(search);
    let id = 0;
    const hashtagList = search.hashtags.map(e => {
        console.log(e);
        console.log(id);
        return (
            <Hashtag key={id++} tag={e} />
        )
    })

    console.log(hashtagList)
    return (
        <div className="hashtag-bar">
            {hashtagList}
        </div>
    );
};

export default HashtagBar;