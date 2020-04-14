import React, {useEffect} from 'react';
import Photo from '../images/Photo';

const MediaBar = (props) => {
    const { fetchBy, filteredPosts, isFetching, fetchMore, fetchLogs} = props;

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            console.log("fetching more");
            fetchLogs.forEach(e => {
                fetchMore(e.subreddit, fetchBy, e.after);
            })
          }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [fetchBy, fetchLogs, fetchMore, props, isFetching]);


    let mediaList = []

    if (filteredPosts.length !== 0) {
        
        mediaList = filteredPosts.map((e, index) => {
            return (
               <Photo key={index} id={e.created} src={e.url} mediaType={e.mediaType} alt={e.subreddit}/>
            )
        })
    } else {
    
    }
    

    return (
        <div className="photoview">
            {mediaList}
            {isFetching && <div className="Loading more">Loading...</div>}
        </div>
        
    );
};

export default MediaBar;