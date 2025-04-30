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
                    <Row className='justify-center relative z-2'>
                        <Col md={10} className='text-center' >
                            <h5 className='font-medium text__18 text-Myellow mb-3'>ABOUT US</h5>
                            <h1 className='font-medium text__64 text-Mblack mb-3 relative'>
                                <img src={"/images/Vector (1).png"} className='absolute w-[50px] lg:w-auto right-0 md:-right-[4rem] -top-[4.5rem]' alt="" />
                                <span className="relative">
                                    <img src={"/images/Vector.png"} className='absolute -left-[3.5rem] -top-[2.5rem] w-[50px] lg:w-auto' alt="" />
                                    <span className='relative z-2'>Where</span>
                                </span> passion for food meets the ease of online ordering!
                            </h1>
                            <p className='leading-[30px] text__18'>At Foodie Express, we believe that everyone deserves a delicious, convenient, <br /> and satisfying dining experience.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='bg-Myellow py-[40px] md:py-[80px]'>
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
                            <p className='text__18 mb-3'>At Foodie Express, we take pride in our commitment to quality, variety, and customer satisfaction. We partner with renowned restaurants, local eateries, and talented chefs to bring you an extensive menu of delectable dishes. </p>
                            <p className='text__18'>From classic comfort foods to exotic international cuisines, we have something to please every palate. What sets us apart is not just the food we deliver but the experience we provide – seamless, reliable, and always delightful.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='bg-white mx-[16px] rounded-bl-[40px] rounded-br-[40px]'>
                <Container>
                    <Row className='gap-y-6'>
                        <Col md={6} className='my-auto md:!order-1 order-2'>
                            <h2 className='font-medium text__48 mb-3'>Our Promise</h2>
                            <p className='text__18 mb-3'>We promise to deliver more than just meals. We promise convenience on busy days, indulgence on special occasions, and a helping hand when you need it the most. With our user-friendly website and mobile app, you can browse menus, customize orders, and track deliveries with ease. </p>
                            <p className='text__18'>Our dedicated team ensures that your food arrives fresh, hot, and right on time, making every meal memorable.</p>
                        </Col>
                        <Col md={6} className='my-auto order-1 md:!order-2'>
                            <img src={"/images/ab (2).png"} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>


            <SecTestimonial />

            <SecGetstart title={"Join Our Foodie Community"} BtnLink={"/auth/login"} btnTitle={"Join Now"} />

        </Fragment>
    )
}

export default About