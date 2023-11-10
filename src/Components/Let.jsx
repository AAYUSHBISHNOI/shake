import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import card from "../assets/img/section_3.png";
import logo from "../assets/img/Frame_35609.png";
import { Doggy, Elpse, Heart, Power, Report } from './Mysvg';

const Let = () => {
  return (
    <div className='bcg_blue mt-5 overflow-hidden' id='Features'> 
        <Container className=' pt-xl-5'>
            <Row className=' align-items-center position-relative pt-4 pt-sm-5'>
                <Col lg={6} data-aos="fade-down-right">
                    <h2 className=' fs_48 fw_500 ff_Roboto txt_clr'>Let your customer <span className=' d-lg-block'>experience shine</span></h2>
                    <p className=' fs_16 fw_300 ff_Helvetica_1 txt_clr'>Automated client rating, provides instant feedback on client <span className=' d-lg-block'>booking history, partner this with your own Loyalty</span> <span className=' d-lg-block'>program.</span></p>
                    <button className='bttn_trail ff_Roboto fs_20 fw_400 text-white'>Free Trial</button>
                </Col>
                <Col lg={6} className='pt-3 pt-sm-5' data-aos="fade-down-left">
                    <img className=' position-relative w-100' src={card} alt="" />
                    <img className='frame_img' src={logo} alt="" />
                </Col>
            </Row>
            <div className=' text-center pt-5 mt-0 mt-xl-5' data-aos="fade-up">
                <p className=' ff_Roboto fs_48 fw_500 text-white pt-0 pt-lg-5 pt-xl-5 mt-xl-5 mt-sm-2'>Features</p>
                <p className=' ff_Helvetica_1 fs_16 text-white'>ShakeYourTail provides your business with the following key features to run an <span className=' d-md-block'>successful dog grooming business.</span></p>
            </div>
            <Row >
                <Col md={6} xl={3} className=' position-relative overflow-hidden' data-aos="fade-down">
                <div className='card_feature'>
                            <Power/>
                            <p className=' txt_clr fw_500 fs_20 ff_Roboto'>Schedule</p>
                            <p className=' txt_clr_1 ff_Helvetica_1 fs_13 '>Powerful and easy to use, book <span className=' d-xl-block'>appointments for your team</span><span className=' d-xl-block'>  members and view a colour</span><span className=' d-xl-block'>coded schedule, at a glance.</span></p>
                            <Elpse/>
                        </div>
                </Col>
                <Col md={6} xl={3} className=' mt-3 mt-md-0 position-relative overflow-hidden' data-aos="fade-right">
                <div className='card_feature_1'>
                    <Doggy/>
                            <p className=' txt_clr fw_500 fs_20 ff_Roboto'>Clients & Pets</p>
                            <p className=' txt_clr_1 ff_Helvetica_1 fs_13 '>Managing your Clients is<span className=' d-xl-block'>effortless; Record Client details,</span><span className=' d-xl-block'>  view appointment history,</span><span className=' d-xl-block'>photos, medical notes, vet</span><span className=' d-xl-block'>contact, groom note Client</span><span className=' d-xl-block'> loyalty and more.</span></p>
                            <Elpse/>
                        </div>
                </Col>
                <Col md={6} xl={3} className=' mt-3 mt-xl-0 position-relative overflow-hidden' data-aos="fade-left">
                <div className='card_feature_2'>
                            <Report/>
                            <p className=' txt_clr fw_500 fs_20 ff_Roboto'>Reports</p>
                            <p className=' txt_clr_1 ff_Helvetica_1 fs_13 '>Report and export client details, <span className=' d-xl-block'>appointments, marketing, no</span><span className=' d-xl-block'>  shows and more..</span></p>
                            <Elpse/>
                        </div>
                </Col>
                <Col md={6} xl={3} className=' mt-3 mt-xl-0 position-relative overflow-hidden' data-aos="fade-up-right">
                <div className='card_feature_3'>
                    <Heart/>
                            <p className=' txt_clr fw_500 fs_20 ff_Roboto'>Services</p>
                            <p className=' txt_clr_1 ff_Helvetica_1 fs_13 '>Add custom services to <span className=' d-xl-block'>appointments, supplementary </span><span className=' d-xl-block'>details, add emergency contacts, </span><span className=' d-xl-block'>treatments, collection and drop</span><span className=' d-xl-block'>offs, promotion packages and</span><span className=' dxl-block'>more.</span></p>
                            <Elpse/>
                        </div>
                </Col>
            </Row>
            <div className='d-flex justify-content-center mt-4 mt-md-5 padding_button'  data-aos="fade-up-left">
                <button className=' fs_20 fw_400 ff_Roboto text-white bttn_view'>View All Features</button>
            </div>
        </Container>
    </div>
  )
}

export default Let