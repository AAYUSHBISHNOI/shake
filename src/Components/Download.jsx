import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mobile from "../assets/img/two_mobile.png";
import play from "../assets/img/play.png";
import apple from "../assets/img/apple.png";
import { Cat, Elpse, Heart, Launch, People } from './Mysvg';

const Download = () => {
  return (
    <div className='bcg_yellow position-relative overflow-hidden'>
        <Container className=' pt-4 pt-sm-0 pt-lg-5'>
            <Row className=' mt-0 mt-lg-5 pt-0 pt-lg-5 align-items-center text-center'>
                <Col lg={4} className=' mt-0 mt-lg-5 pt-0 align-items-center' data-aos="zoom-in">
                    <h2 className=' ff_Roboto fs_48 fw_500 text-white pt-0 pt-sm-5'>Download App</h2>
                    <p className=' ff_Helvetica_1 fs_16 fw_300 text-white'>Are you a mobile groomer or just want to <span className=' d-lg-block'>access your appointments and client on </span><span className=' d-md-block'>the go? Try our app, available to Premier or </span><span className=' d-md-block'>Premier Plus subscribers.</span></p>
                    <div className=' mt-5'>
                        <img src={play} alt="" />
                        <img className='ms-3' src={apple} alt="" />
                    </div>
                </Col>
                <Col lg={7}>
                    <img className='img_yellow_sctn' src={mobile} alt="" />
                </Col>
            </Row>
            <div className=' d-flex align-items-center flex-column padding_text' data-aos="zoom-in-down">
                <h2 className=' ff_Roboto fs_48 fw_500 text-white'>About Us</h2>
                <p className=' ff_Helvetica_1 fs_16 fw_300 text-white text-center'>Software developed by groomers for groomers <span className=' d-lg-block'>Our team has a wealth of experience, over 30 years combined working in dog grooming salons and over 45</span><span className=' d-lg-block'>years combined in working in software development.</span></p>
            </div>
            <Row className=' pt-lg-4'>
                 <Col md={6} xl={3} className='position-relative overflow-hidden' data-aos="zoom-in-left">
                <div className='card_about'>
                    <People/>
                            <p className=' txt_clr fw_500 fs_20 ff_Roboto'>Founded</p>
                            <p className=' fs_16 fw_500 ff_Helvetica txt_clr_3'>Dec 2009</p>
                            <p className=' txt_clr_1 ff_Helvetica_1 fs_16 fw_300 '>Founded in 2009 to support<span className=' d-xl-block'>pet grooming industry to </span><span className=' d-xl-block'>reduce the the administration </span> <span className=' d-xl-block'>burden of running a business.</span></p>
                            <Elpse/>
                        </div>
                </Col>                
                <Col md={6} xl={3} className=' position-relative overflow-hidden mt-3 mt-md-0' data-aos="zoom-in-right">
                <div className='card_product overflow-hidden'>
                    <Launch/>
                            <p className=' txt_clr fw_500 fs_20 ff_Roboto'>Product Launch</p>
                            <p className=' ff_Helvetica fs_16 fw_500 txt_clr_4'>July 2010</p>
                            <p className=' txt_clr_1 ff_Helvetica_1 fs_13 fw_300'>We released our first product <span className=' d-xl-block'> 'Border' and made our first sales</span><span className=' d-xl-block'>into 3 different countries.</span></p>
                            <Elpse/>
                        </div>
                </Col>                
                <Col md={6} xl={3} className=' mt-3 mt-xl-0 position-relative overflow-hidden' data-aos="zoom-out">
                <div className='card_pet'>
                    <Cat/>
                            <p className=' txt_clr fw_500 fs_20 ff_Roboto'>Pet Schedule Released</p>
                            <p className=' ff_Helvetica fs_16 fw_500 txt_clr_5'>Dec 2012</p>
                            <p className=' txt_clr_1 ff_Helvetica_1 fw_300 fs_13 '>Powerful and easy to use, book <span className=' d-xl-block'>appointments for your team</span><span className=' d-xl-block'>  members and view a colour</span><span className=' d-xl-block'>coded schedule, at a glance.</span></p>
                            <Elpse/>
                        </div>
                </Col>                
                <Col md={6} xl={3} className=' mt-3 mt-xl-0 position-relative overflow-hidden' data-aos="zoom-out-up">
                <div className='card_service'>
                    <Heart/>
                            <p className=' txt_clr fw_500 fs_20 ff_Roboto'>Subscription Service</p>
                            <p className=' txt_clr_6 ff_Helvetica fs_16 fw_500'>Aug 2013</p>
                            <p className=' txt_clr_1 ff_Helvetica_1 fw_300 fs_13 '>We released our first premier <span className=' d-xl-block'>subscription to the market</span></p>
                            <Elpse/>
                        </div>
                </Col>
            </Row>
            <div className=' d-flex justify-content-center mt-3 mt-sm-4 mt-md-5  padding_button' data-aos="zoom-out-down">
                <button className='bttn_view_all fs_20 fw_400 ff_Roboto text-white'>View All</button>
            </div>
        </Container>
    </div>
  )
}

export default Download