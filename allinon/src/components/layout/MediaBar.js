import React from 'react';
import Photo from '../images/Photo';
import image1 from '../../pic.jpg';
import image2 from '../../laci.jpg';

const MediaBar = (props) => {
    const { filteredPosts } = props;
    let image3 = "https://i.redd.it/88nc60brsfn41.jpg"
    let mediaList = []
    if (filteredPosts.length != 0) {
        mediaList = filteredPosts.map(e => {
            return (
               <Photo key={e.url} id={e.created} src={e.url}/>
            )
        })
    } else {
        mediaList = [image1, image2, image3].map(e => {
            return (
               <Photo src={e} key={e}/>
            )
            })
    }
    

    return (
        <div className="photoview">
            {mediaList}
        </div>
    );
};

export default MediaBar;