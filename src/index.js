import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//Page components
import HeroSlider from './HeroSlider';
import Header from './Header';
import ProductSlider from './ProductSlider';

//Images
import women from './images/women.png';
import men from './images/men.png';
import accessories from './images/accessories.png';
import heroImage2 from './images/HeroImage2.png';
import envelope from './images/envelope.svg';

//Styles
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HeroSlider />
    <div className="index-content">
      <div className="collection-list">
        <div className="collection">
          <img src={women} alt='women'/>
          <div className="collection-title">
            <p>Women's</p>
          </div>
        </div>
        <div className="collection">
          <img src={men} alt='men'/>
          <div className="collection-title">
            <p>Men's</p>
          </div>
        </div>
        <div className="collection collection-last">
          <img src={accessories} alt='accessories'/>
          <div className="collection-title">
            <p>Accessories</p>
          </div>
        </div>
      </div>
      <div className="product-slider">
        <h1>Shop New Arrivals</h1> 
        <ProductSlider />
      </div>
      <div className="hero-image-still">
        <img src={heroImage2} alt='heroImage2'/>
        <div className="hero-image-still-content">
          <h1>Our Favorite Tees</h1>
          <h2>Everyday tees you need!</h2>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="newsletter">
        <div className="newsletter-title">
          <img src={envelope} alt='envelope'/>
          <h1>Sign Up & Stay Connected</h1>
        </div>
        <div className="newsletter-form">
          <p>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
          <input type="text" placeholder="Enter your email address"/>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
