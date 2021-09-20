import React from 'react';
import ImageGallery from 'react-image-gallery'

//Styles imports
import "react-image-gallery/styles/css/image-gallery.css";
import './ProductSlider.css'

//Images Imports
import product from './images/product.png'

export default class ProductSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showIndex: false,
            showBullets: false,
            infinite: true,
            showThumbnails: false,
            showFullscreenButton: false,
            showGalleryFullscreenButton: false,
            showPlayButton: false,
            showGalleryPlayButton: false,
            showNav: true,
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
            }
        ]
    }

    _product(image, title, description, price) {
        return (
            <div className="product">
                <a href="/">
                    <div className="product-image">
                        <img src={image} alt="product" />
                    </div>
                    <div className="product-info">
                        <div className="product-title"><h2>{title}</h2></div>
                        <div className="product-description"><p>{description}</p></div>
                        <div className="product-price"><p>{price}</p></div>
                    </div>
                </a>
            </div>
        )
    }

    _renderSlide1() {
        return (
            <div className="product-slide">
                <div className="product-slide-4">
                    {this._product(product, "Product Title", "Women's T-Shirt", "$19.99")}
                    {this._product(product, "Product Title", "Women's T-Shirt", "$19.99")}
                    {this._product(product, "Product Title", "Women's T-Shirt", "$19.99")}
                    {this._product(product, "Product Title", "Women's T-Shirt", "$19.99")}
                </div>
                <div className="product-slide-2">
                    {this._product(product, "Product Title", "Women's T-Shirt", "$19.99")}
                    {this._product(product, "Product Title", "Women's T-Shirt", "$19.99")}
                </div>
            </div>
        )
    }

    _renderSlide2() {
        return (
            <div className="product-slide">
                <div className="product-slide-4">
                    {this._product(product, "Product Title", "Women's T-Shirt", "$19.99")}
                    {this._product(product, "Product Title", "Women's T-Shirt", "$19.99")}
                    {this._product(product, "Product Title", "Women's T-Shirt", "$19.99")}
                    {this._product(product, "Product Title", "Women's T-Shirt", "$19.99")}
                </div>
                <div className="product-slide-2">
                    {this._product(product, "Product Title", "Women's T-Shirt", "$19.99")}
                    {this._product(product, "Product Title", "Women's T-Shirt", "$19.99")}
                </div>
            </div>
        )
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