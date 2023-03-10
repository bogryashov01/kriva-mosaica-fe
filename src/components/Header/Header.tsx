import { useSelector } from 'react-redux';
import { cartTotalSelector } from '../../redux/selectors';
import { useTranslation } from 'react-i18next';
import { Logo } from '../../assets';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdShoppingCart } from 'react-icons/md';

import { ukraineFlag, ukFlag } from '../../assets/icons/icons';

import './header.css';
import { useEffect, useState } from 'react';

function Header() {
  const cartTotal: any = useSelector(cartTotalSelector);
  const [width, setWidth] = useState(window.innerWidth);
  const { t, i18n } = useTranslation();
  const isMobile = width <= 991 ? true : false;

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="container header-container">
        <Navbar.Brand>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <div className="mobile-toggle-block">
          {isMobile === true ? (
            <>
              <Nav>
                <Link to="/shopping-cart" className="cartBlock">
                  <button className="header-cart-button">
                    <MdShoppingCart />
                  </button>
                  {cartTotal >= 1 ? (
                    <div className="total-cart">
                      <p>{cartTotal}</p>
                    </div>
                  ) : null}
                </Link>
              </Nav>
              <div className="mobile-language-cart-block">
                <NavDropdown
                  title={i18n.language}
                  id="collasible-nav-dropdown"
                  className="uppercase">
                  <NavDropdown.Item onClick={() => changeLanguage('uk')}>
                    UK {<img src={ukraineFlag} alt="" className="icon" />}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => changeLanguage('en')}>
                    EN {<img src={ukFlag} alt="" className="icon" />}
                  </NavDropdown.Item>
                </NavDropdown>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              </div>
            </>
          ) : null}
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <Link to="/about" className="header-link">
                {t('header-tab-about-us')}
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/shop" className="header-link">
                {t('header-tab-shop')}
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/master-class" className="header-link">
                {t('header-tab-master-class')}
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link to="/contacts">
                <button className="button"> {t('header-tab-contact-button')}</button>
              </Link>
            </Nav.Link>
          </Nav>
          {isMobile === false ? (
            <Nav>
              <NavDropdown title={i18n.language} id="collasible-nav-dropdown" className="uppercase">
                <NavDropdown.Item onClick={() => changeLanguage('uk')}>
                  UK {<img src={ukraineFlag} alt="" className="icon" />}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => changeLanguage('en')}>
                  EN {<img src={ukFlag} alt="" className="icon" />}
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/shopping-cart" className="cartBlock">
                <button className="header-cart-button">
                  <MdShoppingCart />
                </button>
                {cartTotal >= 1 ? (
                  <div className="total-cart">
                    <p>{cartTotal}</p>
                  </div>
                ) : null}
              </Link>
            </Nav>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
