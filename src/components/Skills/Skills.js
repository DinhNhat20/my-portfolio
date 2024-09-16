import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Skills.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const skills = [
    'Python',
    'Django',
    'RESTful API',
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'React Native',
    'MySQL',
    'Git/GitHub',
    'Trello',
    'Microsoft Office',
];

function Skills() {
    return (
        <div id="skills" className={cx('wrapper', 'container')} data-aos="fade-in" data-aos-duration="1800">
            <h2 className={cx('skill-title', 'text-center', 'mb-4')}>MY SKILLS</h2>
            <div className="row">
                {skills.map((skill, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div
                            className={cx(
                                'skill-card',
                                'p-3',
                                'border',
                                'rounded',
                                'text-center',
                                'h-100',
                                'd-flex',
                                'align-items-center',
                                'justify-content-center',
                                'shadow-sm',
                            )}
                        >
                            {skill}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
