import React from 'react';
import './Hero.css'
import {HiLocationMarker} from "react-icons/hi";
import CountUp from "react-countup";

export const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className='paddings innerWidth flexCenter hero-container'>
                <div className='hero-left'>
                    <div className='flexColStart hero-title'>
                        <div className='orange-circle'/>
                        <h1>Discover <br/>
                            Most Suitable <br/>
                            Property
                        </h1>
                    </div>
                    <div className='flexColStart secondaryText hero-dec'>
                        <span>Find a variety of properties that suit you very easily</span>
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className='flexCenter search-bar'>
                        <HiLocationMarker color='var(--blue)' size={25}/>
                        <input type="text"/>
                        <button className='button'>Search</button>
                    </div>
                    <div className='flexCenter stats'>
                        <div className="flexColCenter stat">
                            <span>
                               <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Premium Products
                            </span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                               <CountUp start={1950} end={2023} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                                Happy Customers
                            </span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                               <CountUp end={45}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>
                               Award Winning
                            </span>
                        </div>

                    </div>
                </div>
                <div className='flexCenter hero-right'>
                    <div className='image-container'>
                        <img src="./hero-image.png" alt="hero"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

