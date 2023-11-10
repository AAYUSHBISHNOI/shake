import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Lock, Key, Coustomer, Done } from './Mysvg'
import yellow from "../assets/img/yellow.png";
import sky from "../assets/img/skyblue.png";
import blue from "../assets/img/blue.png";
import pink from "../assets/img/pink.png";

const How = () => {
  return (
    <div className='position-relative overflow-hidden' id='Trial'>
        <Container className=' mt-0 mt-xl-5 pt-5 '>
            <h2 className='ff_Roboto fs_48 fw_500 txt_clr' data-aos="fade-up">How It Work</h2>
            <p className='ff_Helvetica_1 fs_13 txt_clr' data-aos="fade-down">ShakeYourTail is an online scheduling and CRM service & is super easy to use, you <span className='d-lg-block'>can trial our premier service free for 30 days.</span></p>
            <div className='col_line mb-5'></div>
            <Row className='d-flex justify-content-center '>
                <Col md={3} className='position-relative ' data-aos="fade-left">
                  <img className='img_col_pstn' src={yellow} alt="" />
                    <div className='mt-5 ms-5 ps-5 ms-md-0 ps-md-0 pt-md-5'>
                        <div className=' pt-md-3'>
                        <Lock/>
                        <p className='ff_Roboto fs_20 fw_500 txt_clr mb-0 pt-3'>Register</p>
                        <p className='ff_Helvetica_1 fs_13 fw_300 mb-0 pt-2'>Create a account</p>
                        <div className='z-n1 txt_pstn'>
                        <p className='text_one ff_Helvetica z-n1'>01</p>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md={3} className='position-relative' data-aos="fade-left">
                    <img className='img_blue_col' src={sky} alt="" />
                    <div className='mt-5 ms-5 ps-5 ps-md-0 ms-md-0 pt-md-5'>
                      <div className=' mt-md-3'>
                        <Key/>
                        <p className='ff_Roboto fs_20 fw_500 txt_clr mb-0 pt-3'>Login</p>
                        <p className='ff_Helvetica_1 fs_13 fw_300 mb-0 pt-2'>Create a account</p>
                        <div className='z-n1 txt_pstn'>
                        <p className='text_one ff_Helvetica z-n1 clr_sky'>02</p>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md={3} className='position-relative' data-aos="fade-right">
                    <img className='img_col' src={blue} alt="" />
                    <div className='mt-5 ms-5 ps-5 ms-md-0 ps-md-0 pt-md-5'>
                        <div className=' mt-md-3'>
                        <Coustomer/>
                        <p className='ff_Roboto fs_20 fw_500 txt_clr mb-0 pt-3'>Customise</p>
                        <p className='ff_Helvetica_1 fs_13 fw_300 mb-0 pt-2'>Customise your emails, <span className='d-block'>SMS & settings.</span></p>
                        <div className='z-n1 txt_pstn'>
                        <p className='text_one ff_Helvetica z-n1 clr_blue'>03</p>
                        </div>
                        </div>
                    </div>
                </Col>
                <Col md={3} className='position-relative' data-aos="fade-right">
                    <img className='img_pink_col' src={pink} alt="" />
                    <div className='mt-5 ms-5 ps-5 ms-md-0 ps-md-0 pt-md-5'>
                        <div className=' mt-md-3'>
                        <Done/>
                        <p className='ff_Roboto fs_20 fw_500 txt_clr mb-0 pt-3'>Done</p>
                        <p className='ff_Helvetica_1 fs_13 fw_300 mb-0 pt-2'>You're Ready to Rock! Add <span className='d-block'>clients & start booking</span> <span className='d-block'> appointments.</span></p>
                        <div className='z-n1 txt_pstn'>
                        <p className='text_one ff_Helvetica z-n1 clr_pink'>04</p>
                        </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default How