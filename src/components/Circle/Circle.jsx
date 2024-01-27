import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { RiDownloadLine } from "react-icons/ri";
import "./Circle.scss"
function Circle({ text, link, id }) {
    useEffect(() => {
        let el = document.getElementById(id);
        let text = el.querySelector("p");
        let deg = 360 / 40;
        let origin =0;
        text.innerHTML = text.innerText
            .split("")
            .map((char, i) => {
                origin +=deg;
                return `<span style="transform:rotate(${origin}deg)">${char}</span>`;
            })
            .join(" ");
    })
    return (
        <a className='circle' href={link} download="SafarmurodUrinov"
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="circle__wrapper">
                <div className="circle__text" id={id}>
                    <p>{text}</p>
                </div>
            </div>
            <div className="circle__logo">
                <RiDownloadLine />
            </div>
        </a>
    )
}

export default Circle