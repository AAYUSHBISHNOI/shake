import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import all from "../assets/img/all_dogggg.png";
import two from "../assets/img/dog2.png";
import three from "../assets/img/dog1.png";
import pet from "../assets/img/dog6.png";
import { Iconone, Icontwo, Star } from './Mysvg';
import Slider from "react-slick";
import eplsone from "../assets/img/Ellipse1.png";


const Testonomicals = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay:true,
      arrows:false,
      slidesToScroll: 1
    }
  return (
    <div className=' position-relative overflow-hidden'>
      <img className=' position-absolute end-0 bottom-0 d-none d-md-block' src={eplsone} alt="" />
        <Container className=' '>
            <h2 className=' ff_Roboto fs_48 fw_500 txt_clr text-center mb-5 mt-5' data-aos="fade-down">Testimonial</h2>
            <Row>
                <Col lg={7} className=' position-relative h-100' data-aos="zoom-out-right">
                   <img className=' position-relative w-100' src={all} alt="" />
                   <img className=' img_pstn_1' src={two} alt="" />
                   <img className=' img_pstn_2' src={three} alt="" />
                </Col> 
                <Col lg={5} data-aos="zoom-out-left">
                <Slider {...settings}>
                <div>
                <img src={pet} alt="" />
                  <p className='txt_clr_8 fs_16 fw_300 ff_Helvetica_1 pt-3'>“ShakeYourTail is amazing, helping me easily manage my <span className=' d-lg-block'>appointments and reduce my business admin with</span><span className=' d-lg-block'>automated confirmations and reminders.”</span></p>
                  <div className=' d-flex'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                  </div>
                  <p className=' ff_Helvetica fs_32 fw_700 txt_clr_9 mb-0 pt-3'>Mathew Spry</p>
                  <p className=' ff_Helvetica fs_16 fw_500 txt_clr_8'>Director @ BArkingham, UK</p>
                  <div className=' d-flex pt-2'>
                    <Iconone/>
                    <Icontwo/>
                  </div> </div>                 
                 <div>
                 <img  src={pet} alt="" />
                  <p className='txt_clr_8 fs_16 fw_300 ff_Helvetica_1 pt-3'>“ShakeYourTail is amazing, helping me easily manage my <span className=' d-lg-block'>appointments and reduce my business admin with</span><span className=' d-lg-block'>automated confirmations and reminders.”</span></p>
                  <div className=' d-flex'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                  </div>
                  <p className=' ff_Helvetica fs_32 fw_700 txt_clr_9 mb-0 pt-3'>Mathew Spry</p>
                  <p className=' ff_Helvetica fs_16 fw_500 txt_clr_8'>Director @ BArkingham, UK</p>
                  <div className=' d-flex pt-2'>
                    <Iconone/>
                    <Icontwo/>
                  </div>
                 </div>
                </Slider>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Testonomicals
