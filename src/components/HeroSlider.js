//Dependencies
import React from 'react';
import ImageGallery from 'react-image-gallery'

//Styles
import "react-image-gallery/styles/css/image-gallery.css";
import './css/HeroSlider.css'

//Images
import slide1 from './assets/slide1.png'
import slide2 from './assets/slide2.png'
import slide3 from './assets/slide3.png'

export default class HeroSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showIndex: false,
            showBullets: true,
            infinite: true,
            showThumbnails: false,
            showFullscreenButton: false,
            showGalleryFullscreenButton: false,
            showPlayButton: false,
            showGalleryPlayButton: false,
            showNav: false,
            isRTL: false,
            slideDuration: 450,
            slideInterval: 2000,
            slideOnThumbnailOver: false,
            thumbnailPosition: 'bottom',
            useWindowKeyDown: true,
        };

        this.slides = [
            {
                renderItem: this._renderSlide1.bind(this),
            },
            {
                renderItem: this._renderSlide2.bind(this),
            },
            {
                renderItem: this._renderSlide3.bind(this),
            }
        ]
    }

    _renderSlide1(item) {
        return (
            <div className="slide">
                <div className="slide-image">
                    <img src={slide1} alt="slide1" />
                </div>
                <div className="slide-content">
                    <h1>Shop New Arrivals</h1>
                    <p>Our coolest new items are waiting for you!</p>
                    <button>Shop Now</button>
                </div>
            </div>
        );
    }

    _renderSlide2(item) {
        return (
            <div className="slide">
                <div className="slide-image">
                    <img src={slide2} alt="slide2" />
                </div>
                <div className="slide-content slide-content-light">
                    <h1>Our Fave Tees</h1>
                    <p>Shop all of our favorites.</p>
                    <button>Shop Now</button>
                </div>
            </div>
        );
    }

    _renderSlide3(item) {
        return (
            <div className="slide">
                <div className="slide-image">
                    <img src={slide3} alt="slide3" />
                </div>
                <div className="slide-content slide-content-light">
                    <h1>Men's Tees</h1>
                    <p>Find the perfect shirt.</p>
                    <button>Shop Now</button>
                </div>
            </div>
        );
    }


    render() {
        return (
            <ImageGallery
                ref={i => this._imageGallery = i}
                items={this.slides}
                infinite={this.state.infinite}
                showBullets={this.state.showBullets}
                showFullscreenButton={this.state.showFullscreenButton}
                showPlayButton={this.state.showPlayButton}
                showThumbnails={this.state.showThumbnails}
                showIndex={this.state.showIndex}
                showNav={this.state.showNav}
                isRTL={this.state.isRTL}
                thumbnailPosition={this.state.thumbnailPosition}
                slideDuration={this.state.slideDuration}
                slideInterval={this.state.slideInterval}
                slideOnThumbnailOver={this.state.slideOnThumbnailOver}
                useWindowKeyDown={this.state.useWindowKeyDown}
            />
        );
    };
};