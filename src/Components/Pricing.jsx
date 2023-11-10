import React, {  } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Tick } from './Mysvg';
import elps from "../assets/img/Ellipse2.png";


const Pricing = () => {
    // const [first, setFirst] = useState(true)
  return (
    <div className=' overflow-hidden position-relative' id='Pricing'>
        <img className=' position-absolute start-0 mt-5 pt-5 d-none d-md-block' src={elps} alt="" />
        <Container className=' mt-5 pt-5 mb-5 pb-5'>
            <div className='d-flex justify-content-center flex-column align-items-center text-center' data-aos="fade-up-right">
                <h2 className='ff_Helvetica fs_48 fw_300 txt_clr'>Pricing Plan</h2>
                <p className='ff_Helvetica_1 fs_16 fw_300 txt_clr'>Our Subscriptions, simple, flexible and designed for your business needs.</p>
                <div className='d-flex align-items-center'>
                    <p className='mb-0 fs_24 fw_700 ff_Roboto me-2'>£ GBP</p>
                    <Form>
                        <Form.Check type="switch" id="custom-switch" />
                    </Form>
                    <p className='mb-0 fs_24 fw_400 ff_Roboto ms-2'>$ USD</p>
                </div>
            </div>
            <Row className=' mt-0 mt-md-5 pt-5'>
                <Col sm={6} xl={3} data-aos="fade-up-left">
                    <div className='card_plan'>
                       <div className=' d-flex justify-content-between flex-column h-100'>
                       <div>
                        <p className=' fs_20 fw_500 ff_Roboto txt_clr'>Free</p>    
                        <p className=' fs_16 ff_Helvetica_1 txt_clr_1 pt-1'>Great To Get You Started</p>
                        <p className='txt_main fs_32 fw_700 ff_Roboto txt_clr pt-1'>£0 <span className=' fs_16 fw_400 '>/per month</span></p>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Single User</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Single Resource</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>150 Clients</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Unlimited Appointments</p>
                        </div>
                        </div>
                        <div className=' d-flex justify-content-center'>
                             <button className=' fs_20 fw_400 txt_clr ff_Roboto bttn_started'>Get Started</button>
                        </div>
                       </div>
                    </div>
                </Col>
                <Col sm={6} xl={3} className=' mt-4 mt-sm-0' data-aos="fade-down-right">
                    <div className='card_plan position-relative overflow-hidden'>
                    <div className='box_card'>
                            <p className=' fs_12 ff_Helvetica text-white mb-0'>SMS Included</p>
                        </div>
                       <div className=' d-flex justify-content-between flex-column h-100'>
                       <div>
                        <p className=' fs_20 fw_500 ff_Roboto txt_clr'>Starter Plus</p>    
                        <p className=' fs_16 ff_Helvetica_1 txt_clr_1'>Business Essentials</p>
                        <p className='txt_main fs_32 fw_700 ff_Roboto txt_clr'>£15 <span className=' fs_16 fw_400 '>/per month</span></p>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Single User</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Single Resource</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Single User</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Unlimited Appointments</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Custom Pet Breeds</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>SMS Reminders</p>
                        </div>
                        <p className=' fs_13 ff_Helvetica fw_700 txt_clr_2 pt-2'>100 SMS Credits</p>
                        </div>
                        <div className=' d-flex justify-content-center'>
                             <button className=' fs_20 fw_400 txt_clr ff_Roboto bttn_started'>Get Started</button>
                        </div>
                       </div>
                    </div>
                </Col>
                <Col sm={6} xl={3} className=' mt-4 mt-xl-0' data-aos="fade-down-left">
                    <div className='card_plan position-relative overflow-hidden'>
                        <div className='box_card'>
                            <p className=' fs_12 ff_Helvetica text-white mb-0'>SMS Included</p>
                        </div>
                       <div className=' d-flex justify-content-between flex-column h-100'>
                       <div>
                        <p className=' fs_20 fw_500 ff_Roboto txt_clr'>Premier</p>    
                        <p className=' fs_16 ff_Helvetica_1 txt_clr_1'>Ideal For Busy Businesses</p>
                        <p className='txt_main fs_32 fw_700 ff_Roboto txt_clr'>£25 <span className=' fs_16 fw_400 '>/per month</span></p>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Multi User</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Multi User</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Unlimited Clients</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Unlimited Appointments</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Custom Pet Breeds</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Email Confirmations & Reminders</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Email Marketing</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Online Booking</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Electronic Contracts</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Mobile App</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Reporting</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Support</p>
                        </div>
                        </div>
                        <div className=' d-flex justify-content-center'>
                             <button className=' fs_20 fw_400 txt_clr ff_Roboto bttn_started'>Get Started</button>
                        </div>
                       </div>
                    </div>
                </Col>
                <Col sm={6} xl={3} className=' mt-4 mt-xl-0' data-aos="fade-down">
                    <div className='card_plan position-relative overflow-hidden'>
                        <div className='box_card'>
                            <p className=' fs_12 ff_Helvetica text-white mb-0'>SMS Included</p>
                        </div>
                       <div className=' d-flex justify-content-between flex-column h-100'>
                       <div>
                        <p className=' fs_20 fw_500 ff_Roboto txt_clr'>Premier Plus</p>    
                        <p className=' fs_16 ff_Helvetica_1 txt_clr_1'>Unlimited Possibilities</p>
                        <p className='txt_main fs_32 fw_700 ff_Roboto txt_clr'>£37 <span className=' fs_16 fw_400 '>/per month</span></p>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Multi User</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Multi User</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Unlimited Clients</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Unlimited Appointments</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Custom Pet Breeds</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Email Confirmations & Reminders</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Email Marketing</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Online Booking</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Electronic Contracts</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Mobile App</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Reporting</p>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <Tick/>
                            <p className=' fs_13 ff_Helvetica_1 txt_clr_2 mb-0 ms-2 pt-2'>Support</p>
                        </div>
                        <p className=' ff_Helvetica fs_13 fw_700 text-black pt-2'>200 SMS Credits</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                             <button className=' fs_20 fw_400 txt_clr ff_Roboto bttn_started'>Get Started</button>
                        </div>
                       </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Pricing