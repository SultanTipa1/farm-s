import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Banner = styled.div`
    height: 50vh;
    background: url(${(props) => props.image}) no-repeat center center/cover;
`;

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const slides = [
        { image: '/path/to/image1.jpg', text: 'Fresh Farm Animals' },
        { image: '/path/to/image2.jpg', text: 'Quality Assured' },
        { image: '/path/to/image3.jpg', text: 'Directly from Farmers' },
    ];

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <Banner key={index} image={slide.image}>
                    <h2>{slide.text}</h2>
                </Banner>
            ))}
        </Slider>
    );
};

export default HeroSlider;