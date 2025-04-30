import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SecTestimonial from '../Components/Pages/SecTestimonial'
import SecGetstart from '../Components/Pages/SecGetstart'
const About = () => {
    return (
        <Fragment>
            <section className='relative overflow-hidden min-h-screen pt-[88px] lg:pt-[98px] -mt-[88px] lg:-mt-[98px] bg-MsoftYellow flex flex-wrap pb-0'>
                <img src={"/images/001.svg"} className='absolute left-0 top-0 w-full h-full object-cover' alt="" />
                <Container className='relative z-[2] w-full pt-[80px] relative'>
                    <img src={"/images/Burst-circle-1.png"} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
                    <Row className='justify-center relative z-2 pb-12'>
                        <Col md={10} className='text-center bg-MsoftYellow rounded-[20px] p-12' >
                            <h1 className='font-medium text__48 mb-3'>About Us</h1>
                            <p className='text__18 mb-6 lg:mb-12'>We're passionate about making team outings effortless. Our AI-powered platform helps you plan the perfect team gathering in minutes, connecting you with the best venues and activities that match your team's needs.</p>

                            <div className="my-8">
                                <h5 className='font-medium text__20 text-Mblack mb-2'>Our Mission</h5>
                                <p className='text__16 text-Mblack'>To simplify team outing planning by providing an intelligent platform that matches teams with perfect venues and activities, ensuring every gathering is memorable and stress-free.</p>
                            </div>

                            <div className="my-8">
                                <h5 className='font-medium text__20 text-Mblack mb-2'>Our Vision</h5>
                                <p className='text__16 text-Mblack'>To become the go-to platform for team outings, known for making event planning quick, easy, and enjoyable for teams of all sizes.</p>
                            </div>

                            <div className="my-8">
                                <h5 className='font-medium text__20 text-Mblack mb-2'>Our Values</h5>
                                <ul className='text__16 text-Mblack pl-5'>
                                    <li>Speed and efficiency in planning</li>
                                    <li>Personalized recommendations for every team</li>
                                    <li>Quality venues and activities</li>
                                    <li>Making team bonding easy and fun</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <section className='bg-Myellow py-[40px] md:py-[80px]'>
                <Container>
                    <div className="flex items-center flex-wrap lg:flex-nowrap justify-between gap-y-4 lg:gap-y-0">
                        <div className="w-[48%] lg:w-auto">
                            <h2 className='font-medium text__64 mb-2'>28+</h2>
                            <p className='font-medium text-[14px] ss:text-[16px] md:text-[18px] lg:text-[20px]'>Available Countries</p>
                        </div>
                        <div className="w-[1px] h-[124px] bg-[#171717] inline-block opacity-20"></div>
                        <div className="w-[48%] lg:w-auto">
                            <h2 className='font-medium text__64 mb-2'>80K</h2>
                            <p className='font-medium text-[14px] ss:text-[16px] md:text-[18px] lg:text-[20px]'>Monthly couriers</p>
                        </div>
                        <div className="w-[1px] h-[124px] bg-[#171717] inline-block opacity-20 lg:block hidden"></div>
                        <div className="w-[48%] lg:w-auto">
                            <h2 className='font-medium text__64 mb-2'>120+</h2>
                            <p className='font-medium text-[14px] ss:text-[16px] md:text-[18px] lg:text-[20px]'>Monthly local stores</p>
                        </div>
                        <div className="w-[1px] h-[124px] bg-[#171717] inline-block opacity-20"></div>
                        <div className="w-[48%] lg:w-auto">
                            <h2 className='font-medium text__64 mb-2'>4.2K</h2>
                            <p className='font-medium text-[14px] ss:text-[16px] md:text-[18px] lg:text-[20px]'>Employees</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='bg-Mblack'>
                <Container>
                    <div className="text-center">
                        <h2 className='font-medium text__48 mb-10 text-white'>+1.200 Cities in 20 Countries <br /> Across The Globe</h2>
                        <img src={"/images/map dark.svg"} className='w-full' alt="" />
                    </div>
                </Container>
            </section>

            <section className='bg-white g:pb-[80px] pb-0 mx-[16px] rounded-tl-[40px] rounded-tr-[40px]'>
                <Container>
                    <Row className='gap-y-6'>
                        <Col md={6} className='my-auto'>
                            <img src={"/images/ab (1).png"} alt="" />
                        </Col>
                        <Col md={6} className='my-auto'>
                            <h2 className='font-medium text__48 mb-3'>What Sets Us Apart</h2>
                            <p className='text__18 mb-3'>At TeamOut, we take pride in our commitment to making team outings simple and enjoyable. Our AI-powered platform analyzes your team's preferences and requirements to find the perfect match. </p>
                            <p className='text__18'>From team dinners to department celebrations, we help you plan gatherings that strengthen team bonds. What sets us apart is not just the venues we connect you with, but the experience we provide – quick, reliable, and always tailored to your team's needs.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='bg-white mx-[16px] rounded-bl-[40px] rounded-br-[40px]'>
                <Container>
                    <Row className='gap-y-6'>
                        <Col md={6} className='my-auto md:!order-1 order-2'>
                            <h2 className='font-medium text__48 mb-3'>Our Promise</h2>
                            <p className='text__18 mb-3'>We promise to make team outing planning effortless. Whether it's a last-minute team dinner or a planned department celebration, we'll help you find the perfect venue in minutes. </p>
                            <p className='text__18'>Our AI-powered platform ensures you get the best options that fit your team size and budget, making every gathering memorable and stress-free.</p>
                        </Col>
                        <Col md={6} className='my-auto order-1 md:!order-2'>
                            <img src={"/images/ab (2).png"} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section> */}


            <SecTestimonial />

            <SecGetstart title={"Join Our Event Planning Community"} BtnLink={"/auth/login"} btnTitle={"Join Now"} />

        </Fragment>
    )
}

export default About