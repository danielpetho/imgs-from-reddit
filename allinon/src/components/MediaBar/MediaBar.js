import React, {useEffect} from 'react';
import Photo from './Photo';

const MediaBar = (props) => {
    const { settings, filteredPosts, isFetching, fetchMore, fetchLogs} = props;
    const fetchBy = settings.fetchBy;
    const gridview = settings.gridview;
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            if (!isFetching) 
                fetchLogs.forEach(e => {
                console.log(e.subreddit);
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
               <Photo key={index} id={e.created} link={e.permalink} src={e.url} mediaType={e.mediaType} alt={e.subreddit} gv={gridview}/>
            )
        })
    } else {
    
    }
    

    return (
        <div>

        <div className="photoview">
            {mediaList}
            
        </div>
        <div>
            {isFetching && <div className="loading"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>}
        </div>
        </div>
        
    );
};

export default MediaBar;