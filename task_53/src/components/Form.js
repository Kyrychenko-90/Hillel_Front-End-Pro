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

    const formArray = [
        { label: "Ім'я:", value: name, error: nameError, onChange: (e) => { setName(e.target.value); handleInputChange(); } },
        { label: "Email:", value: email, error: emailError, onChange: (e) => { setEmail(e.target.value); handleInputChange(); } },
        { label: "Телефон:", value: phone, error: phoneError, onChange: (e) => { setPhone(e.target.value); handleInputChange(); } }
    ];

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
                {formArray.map((form, index) => (
                    <label key={index}>
                        {form.error && <p className="form__error">{form.error}</p>}
                        {form.label}
                        <input type={index === 2 ? "tel" : "text"} value={form.value} onChange={form.onChange} />
                    </label>
                ))}
                <br />
                <button className="form__btm" type="submit">
                    Відправити
                </button>
            </form>
        </div>
    );
};

export default Form;