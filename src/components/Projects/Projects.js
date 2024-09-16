import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Projects.module.scss';
import classNames from 'classnames/bind';
import images from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Nhập các biểu tượng bạn muốn sử dụng

const cx = classNames.bind(styles);

// Dữ liệu mẫu cho 3 dự án
const projectData = [
    {
        id: 1,
        name: 'TRAVEL SERVICE REGISTRATION MOBILE APPLICATION',
        description:
            'App to promote travel services, the system has two types of users: service providers and customers. Providers can create travel services, create schedules and follow their business activities. Customers can search, register, online payment and review services easily.',
        technologies: 'Python (Django, RESTful API), React Native, React Native Paper, Firebase.',
        features:
            'Login, logout, forgot password, OAuth2 Authentication, manage services, manage schedules, book services, online payment (Momo and ZaloPay), review services, messaging, revenue statistics,...',
        images: [
            { title: 'Login', src: images.login_travel },
            { title: 'Resister a customer account', src: images.register_travel },
            { title: 'Home of customer', src: images.services_list },
            { title: 'Service details of customer', src: images.service_details },
            { title: 'Customer contact information', src: images.booking_contact },
            { title: 'Booking information', src: images.booking_info },
            { title: 'Payment', src: images.payment_when_booking },
            { title: 'Message', src: images.chat },
            { title: 'Cart (contains unpaid bookings)', src: images.cart },
            { title: 'Payment in Cart', src: images.payment },
            { title: 'My services (contains paid bookings but not yet reviewed)', src: images.my_services },
            { title: 'Review service', src: images.review_service },
            { title: 'Booking history', src: images.booking_history },
            { title: 'Personal information', src: images.personal_info },
            { title: 'Change password', src: images.change_password },
            { title: 'Home of provider', src: images.service_list_of_provider },
            { title: 'Service details of provider', src: images.service_details_of_provider },
            { title: 'Create service', src: images.create_service },
            { title: 'Update service', src: images.update_service },
            { title: 'Schedule list', src: images.schedule_list },
            { title: 'Create schedule', src: images.create_schedule },
            { title: 'Participant list', src: images.customer_list },
            { title: 'Revenue statistics', src: images.statistics },
        ],
    },
    {
        id: 2,
        name: 'GRADUATION THESIS MANAGEMENT MOBILE APPLICATION',
        description:
            'App to manage university graduation theses, the system has three types of users: administrators, lecturers and students. Administrators can create councils and assign roles to members, create theses and assign instructors, lecturers can grade theses, students can submit report theses and follow scores.',
        technologies: 'Python (Django, RESTful API), React Native, React Native Paper.',
        features:
            'Login, logout, forgot password, OAuth2 Authentication, manage theses, manage councils, submit thesis report, grade these, statistics.',
        images: [
            { title: 'Home', src: images.home_2 },
            { title: 'Login', src: images.login },
            { title: 'Council list', src: images.council_list },
            { title: 'Create council', src: images.create_council },
            { title: 'Thesis list', src: images.thesis_list },
            { title: 'Create thesis', src: images.create_thesis },
            { title: 'Councils that the lecturer participates in', src: images.councils_list_of_lecturer },
            { title: 'Theses of a council', src: images.thesis_list_of_council },
            { title: 'Thesis information', src: images.thesis_info },
            { title: 'Grade thesis', src: images.grade_thesis },
            { title: 'Student thesis information', src: images.thesis_of_student },
            { title: 'Personal information', src: images.personal_info_2 },
        ],
    },
    // {
    //     id: 3,
    //     name: 'PRIVATE CLINIC MANAGEMENT WEBSITE',
    //     description:
    //         'Website to automate medical examination processes and manage data for private clinic, the system has three types of users: patients, doctors and nurses. Patients can register for medical examination schedules, doctors can view medical records, create examination forms and prescribe medication, nurses can create a list of examination schedules and pay bills.',
    //     technologies: 'Python (Flask), Bootstrap.',
    //     features: '',
    //     images: [
    //         { title: 'Hình ảnh 1', src: images.image1 },
    //         { title: 'Hình ảnh 2', src: images.image2 },
    //     ],
    // },
];

function Projects() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0); // Mặc định là dự án đầu tiên
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageActive, setIsImageActive] = useState(false);

    useEffect(() => {
        // Khi ảnh mới được chọn, thêm hiệu ứng bằng cách sử dụng timeout
        setIsImageActive(false); // Ẩn ảnh cũ trước khi chuyển
        const timeout = setTimeout(() => setIsImageActive(true), 500); // Hiển thị ảnh mới với hiệu ứng
        return () => clearTimeout(timeout);
    }, [currentImageIndex]);
    // Hàm xử lý khi nhấn nút tiến hoặc lùi
    const handlePrevious = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projectData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === projectData.length - 1 ? 0 : prevIndex + 1));
    };

    // Hàm xử lý khi nhấn nút tiến hoặc lùi ảnh
    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? projectData[currentProjectIndex].images.length - 1 : prevIndex - 1,
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === projectData[currentProjectIndex].images.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const currentProject = projectData[currentProjectIndex];
    const currentImage = currentProject.images[currentImageIndex];

    return (
        <div id="projects" className={cx('wrapper')} data-aos="fade-in" data-aos-duration="1800">
            <h1>PROJECTS</h1>
            <div className={cx('container', 'd-flex', 'justify-content-center', 'align-items-center')}>
                {/* Hiển thị dự án */}
                <div className={cx('project-item', 'card', 'd-flex', 'flex-row', 'align-items-center', 'p-4')}>
                    {/* Phần bên trái hiển thị thông tin mô tả */}
                    <div className={cx('left')}>
                        <h2 className="project-item__name">{currentProject.name}</h2>
                        <p className="project-item__description">
                            <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>Description:</span>{' '}
                            {currentProject.description}
                        </p>
                        <h3 className={cx('project-item__technologies')}>
                            <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>Technologies:</span>{' '}
                            {currentProject.technologies}
                        </h3>
                        <h3 className={cx('project-item__features')}>
                            <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>Features:</span>{' '}
                            {currentProject.features}
                        </h3>
                    </div>

                    {/* Phần bên phải hiển thị hai ảnh */}
                    <div className={cx('right')}>
                        <button className={cx('btn')} onClick={handlePreviousImage}>
                            <FontAwesomeIcon icon={faChevronLeft} className={cx('icon')} />
                        </button>
                        <div>
                            <img
                                src={currentImage.src}
                                alt="Project_image"
                                className={cx('project-images', { active: isImageActive })}
                            />
                            <h2>{currentImage.title}</h2>
                        </div>
                        <button className={cx('btn')} onClick={handleNextImage}>
                            <FontAwesomeIcon icon={faChevronRight} className={cx('icon')} />
                        </button>
                    </div>
                </div>

                <div className={cx('project-btn')}>
                    {/* Nút lùi */}
                    <button className={cx('btn')} onClick={handlePrevious}>
                        <FontAwesomeIcon icon={faChevronLeft} className={cx('icon')} />
                    </button>

                    {/* Nút tiến */}
                    <button className={cx('btn')} onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} className={cx('icon')} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Projects;
