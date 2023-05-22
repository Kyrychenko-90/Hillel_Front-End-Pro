import React, { useState } from "react";
import "./Form.css"

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;

        if (name === "") {
            setNameError("Введіть ім'я");
            isValid = false;
        } else {
            setNameError("");
        }

        if (email === "") {
            setEmailError("Введіть email");
            isValid = false;
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailError("Введіть правильний email");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (phone === "") {
            setPhoneError("Введіть телефон");
            isValid = false;
        } else if (!/^\d{12}$/.test(phone)) {
            setPhoneError("Введіть телефон у форматі з 12 цифр");
            isValid = false;
        } else {
            setPhoneError("");
        }

        if (isValid) {
            setFormSubmitted(true);
            setName("");
            setEmail("");
            setPhone("");
        }
    };

    const handleInputChange = () => {
        setFormSubmitted(false);
    };

    return (
        <div className="form">
            <h1 className="form__title">Forma</h1>
            {formSubmitted && <p className = "form__done">Форма успішно відправлена</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    {nameError && <p className = "form__error">{nameError}</p>}
                    Ім'я:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            handleInputChange();
                        }}
                    />
                </label>
                <br />
                <label>
                    {emailError && <p className = "form__error">{emailError}</p>}
                    Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            handleInputChange();
                        }}
                    />
                </label>
                <br />
                <label>
                    {phoneError && <p className = "form__error">{phoneError}</p>}
                    Телефон:
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                            handleInputChange();
                        }}
                    />
                </label>
                <br />
                <button className="form__btm" type="submit">
                    Відправити
                </button>
            </form>
        </div>
    );
};

export default Form;