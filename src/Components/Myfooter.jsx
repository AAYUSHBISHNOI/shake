import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from "../assets/img/footerdog.png";
import { Facebook, Instagram, Linkdin, Telegram, Twitter } from './Mysvg';


const Myfooter = () => {
  return (
    <div className='bcg_clr_footer overflow-hidden'>
        
        <Container className=''>
            <Row className='pt-2   mb-5 pb-0 pb-sm-5'>
                <Col lg={6} className=' align-items-center'>
                    <a href="www"><img src={logo} alt="" /></a>
                    <p className=' fs_16 fw_300 ff_Helvetica_1 text-white pt-4'>Rutrum mauris vitae at vitae augue placerat arcu in. Vel in <span className=' d-md-block'>elementum tempor enim accumsan enim a magna at.</span> <span className=' d-md-block'>Dolor lorem nisi dignissim nulla.</span></p>
                    <div>
                        <a href="https://www.facebook.com/login/"><Facebook/></a>
                        <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"><Twitter/></a>
                       <a href="ram.com"> <Instagram/></a>
                        <a href="https://in.linkedin.com/"><Linkdin/></a>
                       <a href="https://web.telegram.org/a/"> <Telegram/></a>
                    </div>
                </Col>
                <Col className=' d-flex justify-content-lg-end pt-5'>
                    <ul>
                        <li className=' fs_16 fw_500 ff_Helvetica text-white'>Important Links</li>
                        <li><a href="ww" className=' ff_Helvetica_1 fs_16 fw_300 txt_clr_7 position-relative headline'>About Us</a></li>
                        <li><a href="ww" className=' ff_Helvetica_1 fs_16 fw_300 txt_clr_7 position-relative headline'>Features</a></li>
                        <li><a href="ww" className=' ff_Helvetica_1 fs_16 fw_300 txt_clr_7 position-relative headline'>Pricing</a></li>
                        <li><a href="ww" className=' ff_Helvetica_1 fs_16 fw_300 txt_clr_7 position-relative headline'>How It Work</a></li>
                        <li><a href="ww" className=' ff_Helvetica_1 fs_16 fw_300 txt_clr_7 position-relative headline'>New Features</a></li>
                    </ul>
                </Col>
                <Col  className=' d-flex justify-content-end pt-5'>
                    <ul>
                        <li className=' fs_16 fw_500 ff_Helvetica text-white'>Other Links</li>
                        <li><a href="ww" className=' ff_Helvetica_1 fs_16 fw_300 txt_clr_7 position-relative headline'>Testimonials</a></li>
                        <li><a href="ww" className=' ff_Helvetica_1 fs_16 fw_300 txt_clr_7 position-relative headline'>FAQs</a></li>
                        <li><a href="ww" className=' ff_Helvetica_1 fs_16 fw_300 txt_clr_7 position-relative headline'>Contact Us</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <div className='footer_line'></div>
        <Container>
            <p className=' ff_Helvetica_1 fs_16 fw_300 text-white mb-0 text-center py-3'>Made with Powered by Petstar - <span className=' text-decoration-underline'>DOG GROOMING BUSINESSES & PET SERVICES</span></p>
        </Container>
    </div>
  )
}

export default Myfooter