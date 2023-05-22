import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UserList.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="box">
            <h1 className="box__title">Список пользователей</h1>
            <ul className="box__list box__list--users">
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </ul>
        </div>
    );
};

const UserItem = ({ user }) => {
    return (
        <li className="box__item box__item--users">
            <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
    );
};

export default UserList;