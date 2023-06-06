import React from 'react';
import './Hero.css'

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
                    <div className='flexColStart hero-dec'>
                        <span>Find a variety of properties that suit you very easily</span>
                        <span>Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className='search-bar'>
                        search-bar
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

