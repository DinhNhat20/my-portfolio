import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Footer({ setActiveNav }) {
    const handleNavClick = (navItem) => {
        setActiveNav(navItem); // Cập nhật trạng thái activeNav
    };

    return (
        <div className={cx('wrapper')}>
            <span className={cx('footer-title')}>
                DO
                <br />
                DINH NHAT
            </span>

            <span className={cx('footer-extra')}>Let's work together</span>

            <div className={cx('footer-nav')}>
                <a href="#home" onClick={() => handleNavClick('home')}>
                    Home
                </a>
                <a href="#about" onClick={() => handleNavClick('about')}>
                    About
                </a>
                <a href="#skills" onClick={() => handleNavClick('skills')}>
                    Skills
                </a>
                <a href="#projects" onClick={() => handleNavClick('projects')}>
                    Projects
                </a>
                <a href="#contact" onClick={() => handleNavClick('contact')}>
                    Contact
                </a>
            </div>

            <div className={cx('footer-nav')}>
                <a href="mailto:dinhnhatpq@gmail.com">Email</a>
                <a
                    href="https://www.facebook.com/profile.php?id=100011681525827"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Facebook
                </a>
                <a href="https://github.com/DinhNhat20" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            </div>
        </div>
    );
}

export default Footer;
