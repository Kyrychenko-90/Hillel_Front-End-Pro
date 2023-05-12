import React, { Component } from 'react';
import './ContactsStyle.css';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            isFormVisible: false,
            name: '',
            surname: '',
            phone: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const updatedData = data.map(user => {
                    const [firstName, lastName] = user.name.split(' ');
                    return { ...user, name: firstName, surname: lastName };
                });
                this.setState({ contacts: updatedData });
            });
    }

    handleDeleteContact(id) {
        const updatedContacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts: updatedContacts });
    }

    handleAddContact() {
        this.setState({ isFormVisible: true });
    }

    handleSaveContact() {
        const [firstName, lastName] = `${this.state.name} ${this.state.surname}`.split(' ');

        const newContact = {
            name: firstName,
            surname: lastName,
            phone: this.state.phone
        };

        const updatedContacts = [...this.state.contacts, newContact];
        this.setState({
            contacts: updatedContacts,
            isFormVisible: false,
            name: '',
            surname: '',
            phone: ''
        });
    }

    handleCancel() {
        this.setState({ isFormVisible: false });
    }

    render() {
        const { contacts, isFormVisible, name, surname, phone } = this.state;

        return (
            <div className = "box">
                <h1 className = "box__title">Список контактів</h1>
                <table className = "table">
                    <thead className = "table__header">
                    <tr className = "table__header-tr">
                        <th className = "table__header-th">Ім'я</th>
                        <th className = "table__header-th">Прізвище</th>
                        <th className = "table__header-th">Телефон</th>
                        <th className = "table__header-th">Видалити</th>
                    </tr>
                    </thead>
                    <tbody className = "table__body">
                    {contacts.map(contact => (
                        <tr className = "table__body-tr" key={contact.id}>
                            <td className="table__body-td">{contact.name}</td>
                            <td className="table__body-td">{contact.surname}</td>
                            <td className = "table__body-td">{contact.phone}</td>
                            <td className = "table__body-td">
                                <button className = "box__btm-delete" onClick={() => this.handleDeleteContact(contact.id)}>Видалити</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </table>

                {!isFormVisible ? (
                    <button className = "box__btm-add" onClick={() => this.handleAddContact()}>Додати контакт</button>
                ) : (
                    <div className = "form">
                        <h2 className = "form__title">Форма контакту</h2>
                        <form>
                            <div className = "form__wrapper">
                                <label className = "form__wrapper-label">
                                    Ім'я:
                                    <input className = "form__wrapper-input" type="text" value={name} onChange={e => this.setState({ name: e.target.value })} />
                                </label>
                                <br />
                                <label className = "form__wrapper-label">
                                    Прізвище:
                                    <input className = "form__wrapper-input" type="text" value={surname} onChange={e => this.setState({ surname: e.target.value })} />
                                </label>
                                <br />
                                <label className = "form__wrapper-label">
                                    Телефон:
                                    <input className = "form__wrapper-input" type="text" value={phone} onChange={e => this.setState({ phone: e.target.value })} />
                                </label>
                                <br />
                            </div>
                            <div>
                                <button className = "box__btm-save" type="button" onClick={() => this.handleSaveContact()}>Зберегти</button>
                                <button className = "box__btm-cancel" type="button" onClick={() => this.handleCancel()}>Скасувати</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

export default Contacts;