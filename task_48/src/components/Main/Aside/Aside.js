import './Aside.css';

const Aside = () => {
    return (
        <aside className = "aside">
            <nav className = "nav">
                <ul className = "nav__list">
                    <li className = "nav__list-item">Try React</li>
                    <li className = "nav__list-item">Learn React</li>
                    <li className = "nav__list-item">Staying Informed</li>
                    <li className = "nav__list-item">Versioned Documentation</li>
                    <li className = "nav__list-item">Something Missing?</li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;