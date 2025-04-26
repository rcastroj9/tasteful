import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { LogoIcon } from '../Icon/Icon'

const Footer = () => {
    return (
        <Fragment>
            <section className='pb-6 bg-[#F8F8F8]'>
                <Container className='relative'>
                    <Row className='mb-10'>
                        <Col className='mb-4 mb-lg-0' lg={3}>
                            <div className="flex items-center gap-2 mb-3">
                                <LogoIcon color='#FEC51C' />
                                <span className='font-medium text__20 text-Myellow'>Foodex</span>
                            </div>
                            <p className='text__16'>Our user-friendly food delivery platform is designed to bring.</p>
                        </Col>
                        <Col className='col-6 mb-4 mb-lg-0' lg={{ span: 2, offset: 1 }}>
                            <h5 className='font-medium text__16 mb-3 text-[#A3A3A3]'>Navigate</h5>
                            <div className="flex flex-wrap gap-3 font-medium text__16">
                                <NavLink to="/about" className='inline-block w-full text-Mblack'>About Us</NavLink>
                                <NavLink to="/contact" className='inline-block w-full text-Mblack'>Contact Us</NavLink>
                            </div>
                        </Col>
                        <Col className='col-6 mb-4 mb-lg-0' lg={2}>
                            <h5 className='font-medium text__16 mb-3 text-[#A3A3A3]'>Link</h5>
                            <div className="flex flex-wrap gap-3 font-medium text__16">
                                <NavLink to="/privacy" className='inline-block w-full text-Mblack'>Privacy Policy</NavLink>
                                <NavLink to="/terms" className='inline-block w-full text-Mblack'>Term & Conditioner</NavLink>
                                <NavLink to="/faq" className='inline-block w-full text-Mblack'>FAQs</NavLink>
                            </div>
                        </Col>
                        <Col className='mb-4 mb-lg-0' lg={4}>
                            <h5 className='font-medium text__16 mb-3'>Newsletter</h5>
                            <div className="flex items-center gap-3 mb-6">
                                <input type="text" className='w-full h-[46px] px-[16px] border-b-[1px] border-Mblack text__14 bg-transparent outline-none focus:outline-none active:outline-none' placeholder='Enter your email address' />
                                <button className='font-medium text-[14px] bg-Mblack text-white px-4 py-2 rounded-full'>Submit</button>
                            </div>

                            <h5 className='font-medium text__16 mb-3'>Download Now</h5>
                            <div className="flex items-center gap-4">
                                <img src="./../images/sss (1).png" alt="" />
                                <img src="./../images/sss (2).png" alt="" />
                            </div>
                        </Col>
                    </Row>

                    <div className="relative flex flex-wrap lg:flex-nowrap items-center justify-center md:justify-between gap-y-2 gap-x-4 bg-[#F5F5F5] px-4 py-2 rounded-full">
                        <p className='text__16 text-[#A3A3A3]'>© 2022 Company Name® Global Inc.</p>

                        <div className="flex justify-center items-center gap-3 w-auto">
                            <a href="#!">
                                <img src="./../images/sos (1).svg" alt="" />
                            </a>
                            <a href="#!">
                                <img src="./../images/sos (2).svg" alt="" />
                            </a>
                            <a href="#!">
                                <img src="./../images/sos (3).svg" alt="" />
                            </a>
                            <a href="#!">
                                <img src="./../images/sos (4).svg" alt="" />
                            </a>
                            <a href="#!">
                                <img src="./../images/sos (5).svg" alt="" />
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </Fragment>
    )
}

export default Footer
