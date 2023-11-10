import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Clients, Elipse, Notification, Schedule } from './Mysvg'

const Main = () => {
  return (
    <div className=' pt-md-0 pt-5 overflow-hidden' id='Home'>
        <Container className=' '>
            <Row className=' align-items-center justify-content-between'>
                <Col lg={7}>
                    <Row className=' justify-content-center'>
                        <Col sm={12} md={6}>
                            <div className=' d-sm-flex d-md-block'>
                            <div className='card_main position-relative overflow-hidden' data-aos="zoom-in-up">
                            <Clients/>
                            <p className=' txt_clr fw_500 fs_20 ff_Roboto'>Clients & Pets</p>
                            <p className=' txt_clr_1 ff_Helvetica_1 fs_16 fw_300 '>Managing your Clients and their <span className=' d-lg-block'>Pets is effortless; Record their</span><span className=' d-lg-block'>details, add emergency contacts, </span><span className=' d-lg-block'>Medical Notes, Grooming notes, </span><span className=' d-lg-block'>view their appointment history, set</span><span className=' d-lg-block'>alerts and much more…</span></p>
                            <Elipse/>
                        </div>
                        <div className='card_main mt-5 mt-sm-0 mt-md-4 ms-sm-3 ms-md-0 position-relative overflow-hidden' data-aos="zoom-out-down">
                            <Notification/>
                            <p className=' txt_clr fw_500 fs_20 ff_Roboto'>Notifications & Reminders</p>
                            <p className=' txt_clr_1 ff_Helvetica_1 fs_16 fw_300 '>We’ll take the strain by <span className=' d-lg-block'>automatically sending your </span><span className=' d-lg-block'>Clients, their appointment</span><span className=' d-lg-block'>reminders, confirmations, ‘Miss </span><span className=' d-lg-block'> You’s and No Shows, by text or</span><span className=' d-lg-block'> email. </span></p>
                            <Elipse/>
                        </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} className=' justify-content-center d-flex align-items-center mt-5'>
                                 <div className='card_main_1 position-relative overflow-hidden' data-aos="zoom-out">
                                     <Schedule/>
                                        <p className=' txt_clr fw_500 fs_20 ff_Roboto'>Schedule</p>
                                        <p className=' txt_clr_1 ff_Helvetica_1 fs_16 fw_300 '>Powerful and easy to use, <span className=' d-lg-block'>book appointments to your</span><span className=' d-lg-block'> team members and view your</span><span className=' d-lg-block'>  colour coded schedule, ‘at a </span><span className=' d-lg-block'>glance’.</span></p>
                                        <Elipse/>
                                </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5} className=' mt-5' data-aos="zoom-out-left">
                    <h2 className=' fs_48 fw_500 txt_clr ff_Roboto'>Main Features</h2>
                    <p className=' ff_Helvetica_1 fs_16 fw_300 txt_clr_1'>ShakeYourTail is an trusted dog grooming software based <span className=' d-lg-block'>in the cloud; Client, appointment, scheduling and document management</span> <span className=' d-lg-block'>service.</span></p>
                    <p className=' ff_Helvetica_1 fs_16 fw_300 txt_clr_1'>Great for Salons & Groomers on the move; Run it on your PC, laptop, <span className=' d-lg-block'>Ipad, Tablet or Mobile with a standard internet connection.</span></p>
                    <p className=' ff_Helvetica_1 fs_16 fw_300 txt_clr_1'>Store everything in one place and leave the tech stuff to us.</p>
                    <p className=' ff_Helvetica_1 fs_16 fw_300 txt_clr_1'>We provide a complete service solution, giving you peace of mind, we <span className=' d-lg-block'>support, secure, update and keep your data, all safely backed up.</span></p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Main