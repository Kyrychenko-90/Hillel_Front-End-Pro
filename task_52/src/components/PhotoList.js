import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PhotoList.css';

const PhotoList = () => {
    const [photos, setPhotos] = useState([]);
    const { albumId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(response => response.json())
            .then(data => setPhotos(data))
            .catch(error => console.log(error));
    }, [albumId]);

    return (
        <div className="box">
            <h1 className="box__title">Фотографии альбома</h1>
            <ul className="box__list box__list--photos">
                {photos.map(photo => (
                    <li className="box__item box__item--photos" key={photo.id}>
                        <img className="box__img" src={photo.thumbnailUrl} alt="img" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotoList;