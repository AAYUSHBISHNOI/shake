import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import dog from "../assets/img/dog.png";
import mobile from "../assets/img/mobile.png";
import elipse from "../assets/img/e1.png";
import { Close, Dog, Open } from './Mysvg';

const Myheader = () => {
  const [show, setShow] = useState(false);
  if(show){
    document.body.classList.add("overflow-hidden")
  }else{
    document.body.classList.remove("overflow-hidden")
  }
  return (
    <div className='bcg_header min-100 d-flex flex-column pb-lg-5 overflow-hidden'>
        <nav className=' pt-3 d-flex align-items-center'>
          <Container className=' d-flex justify-content-between align-items-center '>
            <div className=' d-flex align-items-center'>
              <a href="w"><img src={dog} alt="" /></a>
            </div>
            <div className=' d-flex align-items-center'>
            <ul className={show ? "open": ""}>
                <li><a href="#Home" className=' fs_16 fw_500 ff_Helvetica_1 text-white position-relative headline'>Home</a></li>
                <li><a href="#Features" className=' fs_16 fw_500 ff_Helvetica_1 text-white position-relative headline'>Features</a></li>
                <li><a href="#Pricing" className=' fs_16 fw_500 ff_Helvetica_1 text-white position-relative headline'>Pricing</a></li>
                <li><a href="#Trial" className=' fs_16 fw_500 ff_Helvetica_1 text-white position-relative headline'>Free Trial</a></li>
                <button className=' fs_20 ff_Helvetica_1 bttn_sign'>Sign In</button>
            </ul>
            <button className='open d-xl-none navicon' onClick={() => {setShow(!show); }}>{show ? <Close/>:<Open/>}</button>
            </div> 
          </Container>
        </nav>
        <section className=' d-flex flex-grow-1 '>
          <Container className=''>
            <Row className=' align-items-center justify-content-between h-100 pb-md-5'>
              <Col lg={6} className=' text-center pt-5 pt-lg-0 text-xl-start pb-xl-5' data-aos="fade-up">
                <h1 className=' fs_80 fw_700 ff_Roboto text-white' >Smart, Simple <span className=' d-block'>Software</span></h1>
                <p className=' fs_20 fw_500 ff_Helvetica_1 text-white'>Dog Grooming Software, helping to reduce 'no <span className='d-md-block'>shows' with appointment confirmations, reminders & </span> <span className='d-md-block'>more.</span></p>
                <div className=' mb-xl-5'>
                  <button className='bttn_free ff_Roboto fs_20 fw_400 text-white'>Free Trial</button>
                  <button className='bttn_more ff_Roboto fs_20 fw_400 text-white ms-4 mb-xl-5'>Explore More</button>
                </div>
              </Col>
              <Col lg={5} className=' position-relative pb-md-5' data-aos="fade-down">
                <img className=" w-100" src={mobile} alt="" />
                <div className='hero_card'>
                  <div className=' d-flex align-items-center'>
                    <Dog/>
                    <div className='ms-2'>
                    <p className='fs_12 fw_700 ff_Helvetica text-black mb-0'>Theresa Webb</p>
                    <p className='fs_8 fw_300 ff_Helvetica_1 text-black mb-0'>CEO</p>
                    </div>
                  </div>
                </div>
                <div className='hero_card_1'>
                  <div className=' d-flex align-items-center'>
                    <img src={elipse} alt="" />
                    <div className='ms-2'>
                    <p className='fs_12 fw_700 ff_Helvetica text-black mb-0'>Esther Howard</p>
                    <p className='fs_8 fw_300 ff_Helvetica_1 text-black mb-0'>Manager</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    </div>
  )
}

export default Myheader