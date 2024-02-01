import React, { useEffect } from 'react'
import { RiDownloadLine } from "react-icons/ri";
import "./Circle.scss"
function Circle({ text, link, id }) {
    useEffect(() => {
        let el = document.getElementById(id);
        let texture = el.querySelector(".circle__inner");
        let deg = 360 / text.length;
        let origin = 0;
        text.split("").forEach((ea) => {
            ea = `<p style='height:${80}px;transform:rotate(${Math.round(origin)}deg);transform-origin:0 100%'>${ea}</p>`;
            texture.innerHTML += ea;
            origin += deg;
        });
    })
    return (
        <a aria-label='download' className='circle' href={link} download="SafarmurodUrinov"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="circle__wrapper">
                <div className="circle__text" id={id}>
                    <div className='circle__inner'></div>
                </div>
            </div>
            <div className="circle__logo">
                <RiDownloadLine />
            </div>
        </a>
    )
}

export default Circle