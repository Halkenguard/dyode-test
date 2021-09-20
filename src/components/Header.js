//Styles
import './css/Header.css';

//Images
import logo from './assets/logo.svg'
import search from './assets/search.svg'
import cart from './assets/cart.svg'
import user from './assets/user.svg'
import menu from './assets/menu.svg'

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Announcement-bar">
          <p>Free shipping on all orders over $75</p>
        </div>
        <div className="NavBar">
          <div className="Navbar-mobile-menu">
            <button className="Navbar-icon">
              <img src={menu} alt="search" />
            </button>
          </div>
          <div className="Navbar-logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="NavBar-links">
            <a className="Nav-link" href="/">Men's</a>
            <a className="Nav-link" href="/">Women's</a>
            <a className="Nav-link" href="/">Accessories</a>
            <a className="Nav-link" href="/">Sale!</a>
          </div>
          <div className="Navbar-icons">
            <button className="Navbar-icon">
              <a href="/">
                <img src={search} alt="search"/>
              </a>
            </button>
            <button className="Navbar-icon">
              <a href="/">
                <img src={user} alt="account"/>
              </a>
            </button>
            <button className="Navbar-icon">
              <a href="/">
                <img src={cart} alt="cart"/>
              </a>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
