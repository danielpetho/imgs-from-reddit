import React, {useEffect} from 'react';
import Photo from '../images/Photo';
import image1 from '../../pic.jpg';
import image2 from '../../laci.jpg';

const MediaBar = (props) => {
    const { filteredPosts, isFetching, fetchMore, fetchLogs} = props;

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            console.log("fetching more");
            fetchLogs.forEach(e => {
                fetchMore(e.subreddit, "new", e.after);
            })
          }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [fetchLogs, fetchMore, props, isFetching]);


    let mediaList = []
    console.log("all posts length:")
    console.log(filteredPosts.length)
    if (filteredPosts.length !== 0) {
        
        mediaList = filteredPosts.map((e, index) => {
            return (
               <Photo key={index} id={e.created} src={e.url} mediaType={e.mediaType} alt={e.subreddit}/>
            )
        })
    } else {
        mediaList = [image1, image2].map((e, index) => {
        
            return (
               <Photo src={e} key={index}/>
            )
            })
    }
    

    return (
        <div className="photoview">
            {mediaList}
            {isFetching && <div className="Loading more">Loading...</div>}
        </div>
        
    );
};

export default MediaBar;