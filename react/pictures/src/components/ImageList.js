import React from 'react';
import './ImageList.css';

export default function ImageList(props){
    const images = props.images.map(image =>{
        return <img key={image.id} alt={image.description} src={image.urls.small}/>
    });
    console.log(images);
    return (
        <div className="imageList">
            {images}
        </div>
    )
}
