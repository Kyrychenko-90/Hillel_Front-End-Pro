import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './AlbumList.css';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(error => console.log(error));
    }, [userId]);

    return (
        <div className="box">
            <h1 className="box__title">Альбомы пользователя</h1>
            <ul className="box__list box__list--albums">
                {albums.map(album => (
                    <AlbumItem key={album.id} album={album} />
                ))}
            </ul>
        </div>
    );
};

const AlbumItem = ({ album }) => {
    return (
        <li className="box__item box__item--albums">
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </li>
    );
};

export default AlbumList;