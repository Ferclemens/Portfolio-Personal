import styles from '../header/Header.module.css';
import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.container}>
            <h1 className={styles.tittle}>Clemens O. Fernando - Software Developer</h1>
            <div className={styles.buttonContainer}>
                <button className={styles.button}><Link className={styles.link} to='/Work'>Work</Link></button>
                <button className={styles.button}><Link className={styles.link} to='/Contact'>Contact</Link></button>
                <button className={styles.button}><Link className={styles.link} to='/stats'>Stats</Link></button>
            </div>
        </header>
    )
}
export default Header;