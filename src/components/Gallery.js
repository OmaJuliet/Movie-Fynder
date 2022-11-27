import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./gallery.css";
import { Link } from "react-router-dom";



const Gallery = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
                <div className="flex flex-wrap justify-between mb-4 mt-4 lg:mx-20">
                    <p className="lg:mb-0 mb-4 text-orange-500 font-bold text-xl ml-2">Movie Fynder</p>
                    <div>
                        <Link to="/"><button className="lg:mx-4 bg-orange-400 rounded-full focus:border-0 focus:outline-0 text-white text-base px-2 py-1 mx-1">Trending</button></Link>
                        <Link to="/2021"><button className="lg:mx-4 bg-orange-400 rounded-full focus:border-0 focus:outline-0 text-white text-base px-2 py-1 mx-1">Year 2021</button></Link>
                        <Link to="/2022"><button className="lg:mx-4 bg-orange-400 rounded-full focus:border-0 focus:outline-0 text-white text-base px-2 py-1 mx-1">Year 2022</button></Link>
                        <Link to="/gallery"><button className="lg:mx-4 bg-orange-400 rounded-full focus:border-0 focus:outline-0 text-white text-base px-2 py-1 mx-1">Gallery</button></Link>
                    </div>

                </div>
                <section className='slider'>
                    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                    {SliderData.map((slide, index) => {
                        return (
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === current && (
                                    <>
                                      <img src={slide.image} alt='movie' className='image' />
                                      <p>{slide.text}</p>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </section>
        </>
    );
};

export default Gallery;