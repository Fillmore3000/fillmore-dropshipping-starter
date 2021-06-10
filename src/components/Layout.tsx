import Link from "next/link";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";
import { Navbar,Nav } from 'react-bootstrap';
import  Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;

  return (
    <>
      <header className="">
        <div className="max-w-6xl mx-auto px-6">
        <Navbar bg="white" variant="light" expand="lg">
                                <Navbar.Brand href="#home"><Link href="/">
                                <a className="flex items-center text-gray-900">
                                <div className="flex items-center justify-center ml-6">
                                <img
                                className="fill-current"
                                src="https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1620685489/main-logo_liqxfy.png"
                                role="presentation"
                                style={{ width:'270px'}}
                                /></div></a>
                                </Link></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">HOME</Nav.Link>
                                    <Nav.Link href="/services">SERVICES</Nav.Link>
                                    <Nav.Link href="/gallery">GALLERY</Nav.Link>
                                    <Nav.Link href="/blog">BLOG</Nav.Link>
                                    <Nav.Link href="/nft">NFT's</Nav.Link>
                                    <Nav.Link href="/contact">CONTACT</Nav.Link>
                                 
                                    </Nav>
                                    <div className="flex items-center space-x-3 -mr-2.5">
              <button
                className="snipcart-customer-signin appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="User login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                </svg>
              </button>
              <Link href="/wishlist">
                <a
                  className="px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 relative transition"
                  aria-label="Wishlist"
                >
                  {hasItems && (
                    <span className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
                </a>
              </Link>
              <button
                className="snipcart-checkout appearance-none px-2 text-gray-800 hover:text-blue-600 rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="Cart"
              >
                {cartHasItems && (
                  <span className="absolute bg-blue-600 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </button>
            </div>
                                </Navbar.Collapse>
                            </Navbar>
        </div>
      </header>
      <main className="">
        <div className="max-w-6xl mx-auto px-6">{children}</div>
      </main>
      <footer className=" footer">
        <div className=" items-center ">
        <Container>
        <Row noGutters>
          <Col xs={12} sm={4} md={4}>  
        <img src="https://res.cloudinary.com/fillmore-xr-limited/image/upload/v1620685489/main-logo_liqxfy.png" alt="logo" className="App-logo" style={{ width:'270px', padding:'0px 15px 15px 0px'}}/></Col>
        <Col xs={12} sm={4} md={4}>  
        <nav className=" " style={{  padding:'15px 0px'}}>
            <Link href="/">
              <a className="text-whitey-800 hover:text-blue-600 p-1 transition text-sm">
                HOME
              </a>
            </Link>
            <Link href="/services">
              <a className="text-white-800 hover:text-blue-600 p-1 transition text-sm">
                SERVICES
              </a>
            </Link>
            <Link href="/gallery">
              <a className="text-white-800 hover:text-blue-600 p-1 transition text-sm">
                GALLERY
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-whitey-800 hover:text-blue-600 p-1 transition text-sm">
                BLOG
              </a>
            </Link>
            <Link href="/nft">
              <a className="text-white-800 hover:text-blue-600 p-1 transition text-sm">
                NFT's
              </a>
            </Link><br/><br/>
            <Link href="/contact">
              <a className="text-whitey-800 hover:text-blue-600 p-1 transition text-sm">
                CONTACT 
              </a>
            </Link>
            <Link href="/about">
              <a className="text-whitey-800 hover:text-blue-600 p-1 transition text-sm">
                ABOUT US
              </a>
            </Link>
            <Link href="/terms-of-sale">
              <a className="text-white-800 hover:text-blue-600 p-1 transition text-sm">
                TERMS OF SALES
              </a>
            </Link><br/>

          </nav>
        </Col>
        <Col xs={12} sm={4} md={4}>  
          <p className="center" style={{ color: '#fff', fontWeight:'bold', padding:'0px 0px 0px 10px' }}>FOLLOW ME ON:</p>
          <a href="https://www.linkedin.com/in/henryapaw/" style={{ color: '#fff',  padding:'0px 0px 0px 10px' }}>< LinkedInIcon className="icon"/></a> <a href="https://www.instagram.com/hennyx3000/" style={{ color: '#fff',  padding:'0px 0px 0px 10px' }}><InstagramIcon className="icon"/></a> <a href="https://twitter.com/HennyX3000"  style={{ color: '#fff',  padding:'0px 0px 0px 10px' }}><TwitterIcon className="icon"/></a>
          </Col></Row></Container>
        
        </div>
        <p className="center" style={{ color: '#fff', fontSize:'11px',padding:'20px 0px 0px 10px'}}>©FILLMORE-XR.COM. ALL COPYRIGHT SOLELY BELONGS TO FILLMORE XR LTD.</p>
      </footer>
    </>
  );
};

export default Layout;
