import './header.css';
import React, { useState } from 'react';
export function Header(){
    // Toggle Menu
    window.addEventListener('scroll',function(){
        const header=document.querySelector('.header');
        if(this.scrollY>=560) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header');
});
    const [Toggle, showMenu]=useState(false);
    const [activeNav,setActiveNav]=useState('#home');
    return(
        <div>
            <header className="header">
                <nav className="nav container">
                    <a href='index.html' className='nav__logo'>Nikitha</a>
                    <div className={Toggle ? "nav__menu show-menu":"nav__menu"}>
                        <ul className="nav__list grid">
                            <li className="nav__item">
                                <a href="#home" onClick={()=>setActiveNav('#home')}className={activeNav==="#home"?'nav__link active-link':'nav__link'}>
                                    <i className="uil uil-estate nav__icon"></i>Home
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" onClick={()=>setActiveNav('#about')}className={activeNav==="#about"?'nav__link active-link':'nav__link'}>
                                    <i className="uil uil-user nav__icon"></i>About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#skills" onClick={()=>setActiveNav('#skills')}className={activeNav==="#skills"?'nav__link active-link':'nav__link'}>
                                    <i className="uil uil-file-alt nav__icon"></i>Skills
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#internships" onClick={()=>setActiveNav('#internships')}className={activeNav==="#internships"?'nav__link active-link':'nav__link'}>
                                    <i className="uil uil-clipboard nav__icon"></i>Internships
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#projects" onClick={()=>setActiveNav('#projects')}className={activeNav==="#projects"?'nav__link active-link':'nav__link'}>
                                    <i className="uil uil-file-shield-alt nav__icon"></i>Projects
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#education" onClick={()=>setActiveNav('#education')}className={activeNav==="#education"?'nav__link active-link':'nav__link'}>
                                    <i className="uil uil-graduation-cap nav__icon"></i>Education
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" onClick={()=>setActiveNav('#contact')}className={activeNav==="#contact"?'nav__link active-link':'nav__link'}>
                                    <i className="uil uil-message nav__icon"></i>Contact
                                </a>
                            </li>
                        </ul>
                        <i className='uil uil-times nav__close' onClick={()=>showMenu(!Toggle)}></i>
                    </div>
                    <div className='nav_toggle' onClick={()=>showMenu(!Toggle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </nav>
            </header>
        </div>
    )
}