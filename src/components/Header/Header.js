import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header({ activeNav, setActiveNav }) {
    const [isHidden, setIsHidden] = useState(false);
    const scrollThreshold = 100; // Khoảng cách cuộn để ẩn Header

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (navItem) => {
        setActiveNav(navItem); // Cập nhật mục đã chọn
    };

    return (
        <header id="home" className={cx('Header', { hidden: isHidden })} data-aos="fade-in" data-aos-duration="1000">
            <div className={cx('header-content')}>
                <div className={cx('header-title')}>
                    <h1>DO DINH NHAT - FULL-STACK INTERN</h1>
                </div>
                <nav className={cx('nav-menu')}>
                    <ul>
                        <li>
                            <a
                                href="#home"
                                onClick={() => handleNavClick('home')}
                                className={activeNav === 'home' ? cx('active') : ''}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={() => handleNavClick('about')}
                                className={activeNav === 'about' ? cx('active') : ''}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                onClick={() => handleNavClick('skills')}
                                className={activeNav === 'skills' ? cx('active') : ''}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                onClick={() => handleNavClick('projects')}
                                className={activeNav === 'projects' ? cx('active') : ''}
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                onClick={() => handleNavClick('contact')}
                                className={activeNav === 'contact' ? cx('active') : ''}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
