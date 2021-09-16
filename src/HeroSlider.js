import React, { Component } from 'react';
import Slider from 'react-slick';

//Stlyes
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HeroSlider.css';

//Images
import slide1 from './images/slide1.png'
import slide2 from './images/slide2.png'
import slide3 from './images/slide3.png'

export default class HeroSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }

    render() {
        const sliderSettings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 10000,
        };
        return (
            <div className="hero-slider">
                <div className="slider-desktop">
                    <Slider {...sliderSettings}>
                        <div className="slide">
                            <div className="hero-content">
                                <h1>Shop New Arrivals</h1>
                                <h3>Our coolest new items are waiting for you!</h3>
                                <button>Shop Now</button>
                            </div>
                            <img className="hero-image" src={slide1} alt="slide1" />
                        </div>
                        <div className="slide">
                            <div className={'hero-content hero-content-light'}>
                                <h1>Our Fave Tees</h1>
                                <h3>Shop all of our favorites.</h3>
                                <button>Shop Now</button>
                            </div>
                            <img className="hero-image" src={slide2} alt="slide2" />
                        </div>
                        <div className="slide">
                            <div className={'hero-content hero-content-light'}>
                                <h1>Men's Tees</h1>
                                <h3>Find the perfect shirt.</h3>
                                <button>Shop Now</button>
                            </div>
                            <img className="hero-image" src={slide3} alt="slide3" />
                        </div>
                    </Slider>
                </div>
                <div className="slider-mobile">
                    <Slider {...sliderSettings}>
                        <div className="mobile-slide">
                            <div className="mobile-image-container">
                                <img className="hero-image-mobile" src={slide1} alt="slide1" />
                            </div>
                            <div className="hero-content-mobile">
                                <h1>Shop New Arrivals</h1>
                                <h3>Our coolest new items are waiting for you!</h3>
                                <button>Shop Now</button>
                            </div>
                        </div>
                        <div className="mobile-slide">
                            <div className="mobile-image-container">
                                <img className="hero-image-mobile" src={slide2} alt="slide2" />
                            </div>
                            <div className="hero-content-mobile">
                                <h1>Our Fave Tees</h1>
                                <h3>Shop all of our favorites.</h3>
                                <button>Shop Now</button>
                            </div>
                        </div>
                        <div className="mobile-slide">
                            <div className="mobile-image-container">
                                <img className="hero-image-mobile" src={slide3} alt="slide3" />
                            </div>
                            <div className="hero-content-mobile">
                                <h1>Men's Tees</h1>
                                <h3>Find the perfect shirt.</h3>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}