import React from "react";

// Scss
import styles from "./Header.module.scss";

// Data
import {dataMenu} from "./dataMenu";

// Images
import logoImage from "../../assets/images/Header/logo.svg"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img src={logoImage} alt="logo"/>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles['nav-menu']}>
                        {dataMenu.map((item, idx) =>
                            (
                                <li className={styles['nav-menu__item']} key={`key nav menu item ${idx}`}>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            )
                        )}
                    </ul>
                    <div className={styles['nav-buttons']}>
                        <button className={styles['nav-buttons__button-login']}></button>
                        <button className={styles['nav-buttons__button-sign-up']}></button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;