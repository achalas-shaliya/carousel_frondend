import React, { useState, useEffect } from 'react'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { Constants } from '../Constants';
import { TitleText } from './TitleText';

import '../App.css'

export const Carousel = ({ slides, infinite }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [carouselImages, setCarouselImages] = useState([]);

    useEffect(() => {
        fetchCarouselImages();
    }, [])

    const handleLeftClick = () => {
        setCurrentIndex(infinite ? currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1 : currentIndex === 0 ? 0 : currentIndex - 1);
    }

    const handleRightClick = () => {
        setCurrentIndex(infinite ? currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1 : currentIndex === carouselImages.length - 1 ? carouselImages.length - 1 : currentIndex + 1);
    }

    const fetchCarouselImages = async () => {
        fetch(`${Constants.backendUrl}api/carousel?` + new URLSearchParams({
            slides
        }))
            .then(response => response.json())
            .then(data => setCarouselImages(data.slides));

    }

    return (
        <div className='slider'>
            {carouselImages.length !== 1 && (
                <div className='arrows'>
                    <FaChevronLeft className="left-arrow" onClick={handleLeftClick} />
                    <FaChevronRight className="right-arrow" onClick={handleRightClick} />
                </div>
            )}
            {carouselImages.length > 0 && carouselImages.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === currentIndex && (
                            <>
                                <img className='image' src={Constants.imageUrl.concat(slide.image)} alt="" width={750} height={500} />
                                <TitleText title={slide.title} subTitle={slide.subTitle} />
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    )
}