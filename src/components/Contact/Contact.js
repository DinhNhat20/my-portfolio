import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// Thêm URL và email vào mảng contacts
const contacts = [
    { type: 'email', value: 'dinhnhatpq@gmail.com', link: 'mailto:dinhnhatpq@gmail.com' },
    { type: 'phone', value: '0937787464' },
    { type: 'facebook', value: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100011681525827' },
];

function Contact() {
    return (
        <div id="contact" className={cx('wrapper', 'container')} data-aos="fade-in" data-aos-duration="1800">
            <h2 className={cx('contact-title', 'text-center', 'mb-4')}>CONTACTS</h2>
            <div className="row">
                {contacts.map((contact, index) => (
                    <div key={index} className={cx('contact-container', 'col-md-4', 'mb-4')}>
                        <div
                            className={cx(
                                'contact-card',
                                'p-3',
                                'text-center',
                                'h-100',
                                'd-flex',
                                'align-items-center',
                                'justify-content-center',
                            )}
                        >
                            {contact.link ? (
                                <a
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cx('contact-link')}
                                >
                                    {contact.value}
                                </a>
                            ) : (
                                contact.value
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contact;
