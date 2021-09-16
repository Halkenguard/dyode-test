import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import HeroSlider from './HeroSlider';
import ProductSlider from './productSlider';
import women from './images/women.png';
import men from './images/men.png';
import accessories from './images/accessories.png'

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
        <ProductSlider />
      </div>
      <div>
        <p>test</p>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
