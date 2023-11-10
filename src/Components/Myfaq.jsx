import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { Bulb, Message } from './Mysvg';
import footer_img from "../assets/img/footer.png";


const Myfaq = () => {
  return (
    <div className=' position-relative pb-5 mb-5'>
        <Container className=' pb-0 pb-md-5 mb-0 mb-md-5'>
            <Row className=' align-items-center d-flex justify-content-between pb-5'>
                <Col xl={7} data-aos="zoom-in-down">
                     <Accordion defaultActiveKey="0">
                     <Accordion.Item eventKey="0" className='mt-5'>
        <Accordion.Header className=' ff_Helvetica fs_20 fw_500 txt_clr'>Do you have a mobile app?</Accordion.Header>
        <Accordion.Body>
        Yes, our mobile app is available to premier and premier plus subscribers, allowing you <span className=' d-lg-block'>to manage your business on the go.</span>
        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='mt-5'>
        <Accordion.Header className=' ff_Helvetica fs_20 fw_500 txt_clr'>Do you support start-up business?</Accordion.Header>
        <Accordion.Body>
        Yes, our mobile app is available to premier and premier plus subscribers, allowing you <span className=' d-lg-block'>to manage your business on the go.</span>
        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='mt-5'>
        <Accordion.Header className=' ff_Helvetica fs_20 fw_500 txt_clr'>I’ve used up all my monthly SMS credits, can I buy more?</Accordion.Header>
        <Accordion.Body>
        Yes, our mobile app is available to premier and premier plus subscribers, allowing you <span className=' d-lg-block'>to manage your business on the go.</span>
        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='mt-5'>
        <Accordion.Header className=' ff_Helvetica fs_20 fw_500 txt_clr'>What do I need to access the system?</Accordion.Header>
        <Accordion.Body>
        Yes, our mobile app is available to premier and premier plus subscribers, allowing you <span className=' d-lg-block'>to manage your business on the go.</span>
        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='mt-5'>
        <Accordion.Header className=' ff_Helvetica fs_20 fw_500 txt_clr'>Can you import my data?</Accordion.Header>
        <Accordion.Body>
        Yes, our mobile app is available to premier and premier plus subscribers, allowing you <span className=' d-lg-block'>to manage your business on the go.</span>
        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                </Col>
                <Col xl={4} className=' d-flex justify-content-xl-end justify-content-center mt-5 mt-xl-0' data-aos="zoom-in-up">
                    <div className='accrodian_box'>
                        <p className=' ff_Roboto fs_32 fw_500 txt_clr mb-0'>Need help?</p>
                        <p className=' ff_Helvetica_1 fs_16 fw_300 txt_clr mb-0'>Ask our support team</p>
                        <button className='bttn_new mt-4'><Bulb/> <span className=' ff_Roboto fs_20 fw_400 text-white mb-0'>New Idea?</span></button>
                        <button className='bttn_new mt-3'><Message/><span className=' ff_Roboto fs_20 fw_400 text-white mb-0 ms-1'>Contact Us</span></button>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className=' w-100 blue_img_pstn' src={footer_img} alt="" />
    </div>
  )
}

export default Myfaq