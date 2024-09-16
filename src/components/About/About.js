import React from 'react';
import styles from './About.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/images';

const cx = classNames.bind(styles);

function About() {
    return (
        <div id="about" className={cx('wrapper')} data-aos="fade-in" data-aos-duration="1800">
            <div className={cx('about-left')}>
                <img src={images.my_avatar} alt="My Avatar" className={cx('about-avatar')} />
            </div>
            <div className={cx('about-right')}>
                <h1>ABOUT ME</h1>
                <p>
                    Hello! I’m Do Dinh Nhat, a 4th-year student at Ho Chi Minh City Open University, majoring in
                    Information Technology. I am currently seeking an internship opportunity to apply theoretical
                    knowledge to practical situations and develop skills in a professional working environment. With a
                    understanding of the software development process, I have gained experience through various personal
                    and group projects throughout my studies. I am passionate about user interface development and
                    always strive to create high-quality products. I am eager to learn, open to challenges, and believe
                    that an internship will enhance my skills and understanding of the technology industry, while
                    contributing to the success of the team.
                </p>
            </div>
        </div>
    );
}

export default About;
