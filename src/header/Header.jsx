import styles from '../header/Header.module.css';
import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.container}>
            <h1 className={styles.tittle}>Clemens Fernando - Software Developer</h1>
            <div className={styles.buttonContainer}>
                <button className={styles.button}><Link to='/About'>About</Link></button>
                <button className={styles.button}><Link to='/Work'>Work</Link></button>
                <button className={styles.button}><Link to='/Contact'>Contact</Link></button>
            </div>
        </header>
    )
}
export default Header;