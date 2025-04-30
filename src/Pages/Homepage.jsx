import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SecFaq from "../Components/Pages/SecFaq"
import SecGetstart from "../Components/Pages/SecGetstart"
import SecTestimonial from '../Components/Pages/SecTestimonial';
import { SearchIcon } from '../Components/Icon/Icon';
import ModalFind from '../Components/Modal/ModalFind'

const Homepage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment>

            <ModalFind show={show} handleClose={() => handleClose()} />

            {/* start:hero */}
            <section className='relative overflow-hidden min-h-screen pt-[88px] lg:pt-[98px] -mt-[88px] lg:-mt-[98px] bg-MsoftYellow flex flex-wrap pb-0'>
                <img src={"/images/001.svg"} className='absolute left-0 top-0 w-full h-full object-cover' alt="" />
                <Container className='relative z-[2] w-full pt-[80px] relative'>
                    <img src={"/images/Burst-circle-1.png"} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
                    <Row className='justify-center relative z-2'>
                        <Col md={8} className='text-center' >
                            <div className="mb-10">
                                <h1 className='font-medium text__64 text-Mblack mb-3'>
                                    Bringing Flavor to Your Doorstep
                                </h1>
                                <p className='leading-[30px] text__18'>Our user-friendly food delivery platform is designed to bring you the best <br className='lg:block hidden' /> dining experience from the comfort of your home.</p>
                            </div>


                            <div onClick={handleShow} class="mx-auto max-w-[566px] flex items-center pl-[16px] pr-[4px] py-[4px] rounded-full bg-white border border-solid !border-white gap-2">
                                <div className="flex-shrink-0">
                                    <SearchIcon color={"#A3A3A3"} />
                                </div>
                                <input type="text" class="w-full bg-transparent outline-none shadow-none text__14 placeholder:text-[#A3A3A3]" placeholder="Enter address ..." />
                                <div class="inline-block cursor-pointer text-center font-semibold text__14 text-Mblack bg-Mblack !py-[10px] sm:!py-[15px] !px-[20px] sm:!px-[28px] !border-Mblack btnClass flex-shrink-0 text-white">Find Now</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img src={"/images/Group 970.png"} className='w-full object-cover relative z-[2]' alt="" />
            </section>
            <section className='bg-Myellow'>
                <Container>
                    <Row className='justify-center gap-y-6'>
                        <Col md={6} lg={4}>
                            <div className="p-[1.5rem] rounded-[24px] bg-white border border-1 !border-white h-full">
                                <div className="flex gap-[12px] flex-wrap sm:flex-nowrap gap-y-6">
                                    <div className="flex-shrink-0 flex items-center justify-center">
                                        <img src={"/images/tp (3).svg"} className='w-[32px] sm:w-auto' alt="" />
                                    </div>
                                    <div className="w-full">
                                        <h5 className='font-medium text__20 text-Mblack mb-2'>Your city's top restaurants</h5>
                                        <p className='text__16 text-Mblack'>With a great variety of restaurants you can order your favourite food or explore new restaurants nearby!</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="p-[1.5rem] rounded-[24px] bg-white border border-1 !border-white h-full">
                                <div className="flex gap-[12px] flex-wrap sm:flex-nowrap gap-y-6">
                                    <div className="flex-shrink-0 flex items-center justify-center">
                                        <img src={"/images/tp (1).svg"} className='w-[32px] sm:w-auto' alt="" />
                                    </div>
                                    <div className="w-full">
                                        <h5 className='font-medium text__20 text-Mblack mb-2'>Fast delivery</h5>
                                        <p className='text__16 text-Mblack'>Like a flash! Order or send anything in your city and receive it in minutes</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className="p-[1.5rem] rounded-[24px] bg-white border border-1 !border-white h-full">
                                <div className="flex gap-[12px] flex-wrap sm:flex-nowrap gap-y-6">
                                    <div className="flex-shrink-0 flex items-center justify-center">
                                        <img src={"/images/tp (2).svg"} className='w-[32px] sm:w-auto' alt="" />
                                    </div>
                                    <div className="w-full">
                                        <h5 className='font-medium text__20 text-Mblack mb-2'>Groceries delivery & more</h5>
                                        <p className='text__16 text-Mblack'>Find anything you need! From supermarkets to shops, pharmacies to florists — if it's in your city order it and receive it</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* end:hero */}


            <section className='bg-Mblack py-[40px]'>
                <Container>
                    <div className="flex items-center justify-center lg:justify-between lg:flex-nowrap flex-wrap gap-2 xs:gap-4 lg:gap-3">
                        <img src={"/images/BRAN (1).png"} className="w-[80px] xx:w-[100px] xs:w-[130px] md:w-[160px] xl:w-auto" alt="" />
                        <img src={"/images/BRAN (2).png"} className="w-[80px] xx:w-[100px] xs:w-[130px] md:w-[160px] xl:w-auto" alt="" />
                        <img src={"/images/BRAN (3).png"} className="w-[80px] xx:w-[100px] xs:w-[130px] md:w-[160px] xl:w-auto" alt="" />
                        <img src={"/images/BRAN (4).png"} className="w-[80px] xx:w-[100px] xs:w-[130px] md:w-[160px] xl:w-auto" alt="" />
                        <img src={"/images/BRAN (5).png"} className="w-[80px] xx:w-[100px] xs:w-[130px] md:w-[160px] xl:w-auto" alt="" />
                    </div>
                </Container>
            </section>


            <section className='bg-white lg:pb-[80px] pb-0 mx-[16px] rounded-tl-[40px] rounded-tr-[40px]'>
                <Container>
                    <Row className='gap-y-6'>
                        <Col md={6} className='my-auto'>
                            <img src={"/images/dfhfgfh.png"} alt="" />
                        </Col>
                        <Col md={6} className='my-auto'>
                            <h2 className='font-medium text__48 mb-3'>Promotions and <br className='xl:block hidden' /> Discounts</h2>
                            <p className='text__18 mb-6 lg:mb-12'>Save big with FoodieDelights' exclusive promotions! Discover <br className='xl:block hidden' /> discounts, special offers, and meal bundles tailored just for you. Keep <br className='xl:block hidden' /> an eye on our promotions section to enjoy mouthwatering meals <br className='xl:block hidden' /> while staying within your budget.</p>
                            <a href='/about' className="inline-block">
                                <div className={'inline-block cursor-pointer font-medium text__14 btnClass !px-[32px]  !border-Mblack bg-Mblack text-white'}>Get Started</div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='bg-white mx-[16px] rounded-bl-[40px] rounded-br-[40px]'>
                <Container>
                    <Row className='gap-y-6'>
                        <Col md={6} className='my-auto md:!order-1 order-2'>
                            <h2 className='font-medium text__48 mb-3'>Order for delivery or <br className='xl:block hidden' /> pickup.</h2>
                            <p className='text__18 mb-6 lg:mb-12'>Stay in the loop with real-time order tracking. Receive updates on<br className='xl:block hidden' /> your order's preparation, dispatch, and estimated delivery time. Our<br className='xl:block hidden' /> notifications keep you informed, so you know exactly when your<br className='xl:block hidden' /> delicious meal will arrive at your door.</p>
                            <a href='/about' className="inline-block">
                                <div className={'inline-block cursor-pointer font-medium text__14 btnClass !px-[32px]  !border-Mblack bg-Mblack text-white'}>Get Started</div>
                            </a>
                        </Col>
                        <Col md={6} className='my-auto order-1 md:!order-2'>
                            <img src={"/images/sasffg.png"} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="text-center">
                        <h2 className='font-medium text__48 mb-3'>Countries where we deliver</h2>
                        <p className='text__18 mb-6'>Save time with delivery or order ahead and skip the fees with pickup. You can schedule orders for later, too.</p>

                        <Row className='justify-center mb-12'>
                            <Col md={9}>
                                <div className="flex items-center justify-center flex-wrap gap-2 md:gap-4">
                                    <div className="font-medium text__14 px-[16px] xs:px-[24px] py-[6px] md:py-[10px] rounded-full border border-solid !border-[#E5E5E5]">United States</div>
                                    <div className="font-medium text__14 px-[16px] xs:px-[24px] py-[6px] md:py-[10px] rounded-full border border-solid !border-[#E5E5E5]">United Kingdom</div>
                                    <div className="font-medium text__14 px-[16px] xs:px-[24px] py-[6px] md:py-[10px] rounded-full border border-solid !border-[#E5E5E5]">Italy</div>
                                    <div className="font-medium text__14 px-[16px] xs:px-[24px] py-[6px] md:py-[10px] rounded-full border border-solid !border-[#E5E5E5]">Spain</div>
                                    <div className="font-medium text__14 px-[16px] xs:px-[24px] py-[6px] md:py-[10px] rounded-full border border-solid !border-[#E5E5E5]">Kazakhstan</div>
                                    <div className="font-medium text__14 px-[16px] xs:px-[24px] py-[6px] md:py-[10px] rounded-full border border-solid !border-[#E5E5E5]">India</div>
                                    <div className="font-medium text__14 px-[16px] xs:px-[24px] py-[6px] md:py-[10px] rounded-full border border-solid !border-[#E5E5E5]">Japan</div>
                                    <div className="font-medium text__14 px-[16px] xs:px-[24px] py-[6px] md:py-[10px] rounded-full border border-solid !border-[#E5E5E5]">Japan</div>
                                    <div className="font-medium text__14 px-[16px] xs:px-[24px] py-[6px] md:py-[10px] rounded-full border border-solid !border-[#E5E5E5]">Morroco</div>
                                    <div className="font-medium text__14 px-[16px] xs:px-[24px] py-[6px] md:py-[10px] rounded-full border border-solid !border-[#E5E5E5]">Indonesia</div>
                                    <div className="font-medium text__14 px-[16px] xs:px-[24px] py-[6px] md:py-[10px] rounded-full border border-solid !border-[#E5E5E5]">etc</div>
                                </div>
                            </Col>
                        </Row>

                        <img src={"/images/Map.svg"} className='w-full' alt="" />
                    </div>
                </Container>
            </section>

            <SecTestimonial />

            <div className='bg-[#F8F8F8]'>
                <SecFaq />
                <div className="text-center">
                    <a href="/faq" class="inline-block cursor-pointer text-center font-medium text__14 text-Mblack bg-Mblack !py-[10px] sm:!py-[15px] !px-[20px] sm:!px-[28px] !border-Mblack btnClass flex-shrink-0 text-white">Discover More</a>
                </div>
            </div>

            <SecGetstart />
        </Fragment >
    )
}

export default Homepage
