import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        if (userId) {
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
                .then(response => response.json())
                .then(data => setAlbums(data))
                .catch(error => console.log(error));
        }
    }, [userId]);

    const handleAlbumClick = (userId) => {
        if (albums.length > 0 && albums[0].userId === userId) {
            setAlbums([]);
        } else {
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
                .then(response => response.json())
                .then(data => setAlbums(data))
                .catch(error => console.log(error));
        }
    };

    const handlePhotoClick = (albumId) => {
        if (photos.length > 0 && photos[0].albumId === albumId) {
            setPhotos([]);
        } else {
            fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
                .then(response => response.json())
                .then(data => setPhotos(data))
                .catch(error => console.log(error));
        }
    };

    return (
        <div className = "box">
            <h1 className = "box__title">Список користувачів</h1>
            <ul className = "box__list box__list--users">
                {users.map(user => (
                    <li className = "box__item box__item--users" key={user.id}>
                        {user.name}
                        <button className = "box__btm box__btm--users" onClick={() => handleAlbumClick(user.id)}>Album</button>
                        {albums.length > 0 && albums[0].userId === user.id && (
                            <ul className = "box__list box__list--albums">
                                {albums.map(album => (
                                    <li className = "box__item box__item--albums" key={album.id}>
                                        {album.title}
                                        <button className = "box__btm box__btm--albums" onClick={() => handlePhotoClick(album.id)}>Photos</button>
                                        {photos.length > 0 && photos[0].albumId === album.id && (
                                            <ul className = "box__list box__list--photos">
                                                {photos.map(photo => (
                                                    <li className = "box__item box__item--photos" key={photo.id}>
                                                        <img className = "box__img" src={photo.thumbnailUrl} alt = "img" />
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;