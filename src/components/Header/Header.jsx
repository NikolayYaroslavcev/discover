import React from 'react';
import './Header.css'

export const Header = () => {
    return (
        <section className='h-wrapper'>
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100}/>

                <nav className="flexCenter h-menu">
                    <li><a href="#">Residencies</a></li>
                    <li><a href="#">Our Value</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Get Started</a></li>
                    <button className='button'><a href="#">Contact</a></button>
                </nav>

            </div>
        </section>
    );
};

