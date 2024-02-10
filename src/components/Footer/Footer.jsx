import React, { useState } from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import './Footer.scss'
import TopTitle from '../TopTitle/TopTitle'
import Title from '../Title/Title'

import earth from "../../assets/icons/earth.svg"
import email from "../../assets/icons/email.svg"
import bell from "../../assets/icons/bell.svg"
const Footer = () => {
    const [message, setMessage] = useState({ name: '', email: '', textarea: '' })
    const onChangeHandler = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value })
    }
    return (
        <footer id='footer' className='footer'>
            <div className="container">
                <div className="footer__data">
                    <TopTitle>CONTACT ME</TopTitle>
                    <Title>Lets Discuss Your Project</Title>
                    <ul className="footer__list">
                        <li className='footer__list--item'>
                            <div>
                                <img src={earth} alt="bell" />
                            </div>
                            <div>
                                <p>Phone</p>
                                <h6>+998 93 508 22 61</h6>
                            </div>
                        </li>
                        <li className='footer__list--item'>
                            <div>
                                <img src={email} alt="email" />
                            </div>
                            <div>
                                <p>Email</p>
                                <h6>safarmurodurinov@gmail.com</h6>
                            </div>
                        </li>
                        <li className='footer__list--item'>
                            <div>
                                <img src={bell} alt="bell" />
                            </div>
                            <div>
                                <p>Location</p>
                                <h6>Tashkent city,Uzbekistan</h6>
                            </div>
                        </li>
                    </ul>
                    <ul className="footer__links">
                        <li><a href="https://t.me/UrinovSafarmurod" target='blank'><FaTelegramPlane /></a></li>
                        <li><a href="https://www.facebook.com/safarmurodurinov"><FaFacebookF /></a></li>
                        <li><a href="https://www.github.com/Safarmurod999"><FaGithubAlt /></a></li>
                        <li><a href="https://www.instagram.com/safarmurod0904"><FaInstagram /></a></li>
                        <li><a href="https://www.linkedin.com/in/safarmurod999/"><FaLinkedinIn /></a></li>
                    </ul>
                </div>
                <div className="footer__contact">
                    <form className="footer__form" onSubmit={e => e.preventDefault()}>
                        <div className="footer__form--title">
                            Fill The Form
                        </div>
                        <input type="text" className='footer__form--input' placeholder='Your Full Name' name='name' value={message.name} onChange={(e) => onChangeHandler(e)} />
                        <input type="email" className='footer__form--input' placeholder='Email Address' name='email' value={message.email} onChange={(e) => onChangeHandler(e)} />
                        <textarea name='textarea' value={message.textarea} onChange={(e) => onChangeHandler(e)} ></textarea>
                        <button className='footer__btn' type='submit'>
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
            <div className="footer__bottom">
                <span>&copy;</span> 2024 S.Urinov All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer