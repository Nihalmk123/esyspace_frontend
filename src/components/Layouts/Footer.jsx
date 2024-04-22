import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Footer() {
  const [isVisible, setIsvisible] = useState(false)

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  const listenToScroll = () => {
    let heightHidden = 250
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightHidden ? setIsvisible(true) : setIsvisible(false)
  }

  return (
    <>
      <footer style={{ backgroundColor: "#F6F5F5" }}>
        <Container>
          <Row>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Navigation</h5>
                <p>Home</p>
                <p>Contact</p>
                <p>Blog</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Information</h5>
                <p>Terms and Conditions</p>
                <p>Cancellation Policy</p>
                <p>Documentation</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Find us</h5>
                <p>Quaerat neque purus ipsum</p>
                <p>
                  <Link to="tel:999888777" className='calling' style={{ color: "#11235A" }}>999-888-777</Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Follow Us</h5>
                <p>Quaerat neque purus ipsum</p>
                <ul className='list-unstyled text-center mt-2'>
                  <li>
                    <Link to="/">
                      <i className='bi bi-youtube'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className='bi bi-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className='bi bi-instagram'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className='bi bi-facebook'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className='copy_right'>
            <Col>
              <div>
                <ul className='list-unstyled text-center'>
                  <li>
                    <Link to="/">
                      © 2024 <span>Easyspace's</span>. All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/">Blogs</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      {/* scroll top */}
      {isVisible && (<div className='scroll_top'>
        <i className='bi bi-arrow-up' onClick={ScrollTop}></i>
      </div>)}
    </>
  )
}
