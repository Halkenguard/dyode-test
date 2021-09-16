import React, { Component } from 'react';
import Slider from 'react-slick';
import product from './images/product.png'
import prev from './images/prev.svg'
import next from './images/next.svg'

//Stlyes
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./productSlider.css";


export default class ProductSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    next() {
        this.slider.slickNext();
    }
    prev() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        };
        return (
            <div className="product-slider-container">
                <div className="product-slider-title">
                    <h1>New Arrivals</h1>
                </div>
                <div className="product-slider-content">
                    <div className="prev-button" onClick={this.prev}>
                        <img src={prev} alt="prev" />
                    </div>
                    <div className="product-slider-slides">
                        <Slider ref={c => this.slider = c} {...settings}>
                            <div className="product-slider-item" key={1}>
                                <img src={product} alt="product" />
                                <div className="product-title">
                                    <h2>Product Title</h2>
                                </div>
                                <div className="product-description">
                                    <p>Women's T Shirt</p>
                                </div>
                                <div className="product-price">
                                    <p>$19.99</p>
                                </div>
                            </div>
                            <div className="product-slider-item" key={2}>
                            <img src={product} alt="product" />
                                <div className="product-title">
                                    <h2>Product Title</h2>
                                </div>
                                <div className="product-description">
                                    <p>Women's T Shirt</p>
                                </div>
                                <div className="product-price">
                                    <p>$19.99</p>
                                </div>
                            </div>
                            <div className="product-slider-item" key={3}>
                                <img src={product} alt="product" />
                                <div className="product-title">
                                    <h2>Product Title</h2>
                                </div>
                                <div className="product-description">
                                    <p>Women's T Shirt</p>
                                </div>
                                <div className="product-price">
                                    <p>$19.99</p>
                                </div>
                            </div>
                            <div className="product-slider-item" key={4}>
                                <img src={product} alt="product" />
                                <div className="product-title">
                                    <h2>Product Title</h2>
                                </div>
                                <div className="product-description">
                                    <p>Women's T Shirt</p>
                                </div>
                                <div className="product-price">
                                    <p>$19.99</p>
                                </div>
                            </div>
                            <div className="product-slider-item" key={5}>
                                <img src={product} alt="product" />
                                <div className="product-title">
                                    <h2>Product Title</h2>
                                </div>
                                <div className="product-description">
                                    <p>Women's T Shirt</p>
                                </div>
                                <div className="product-price">
                                    <p>$19.99</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="next-button" onClick={this.next}>
                        <img src={next} alt="next" />
                    </div>
                </div>
            </div>
        );
    }
}