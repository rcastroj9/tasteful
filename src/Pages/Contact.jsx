import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <Fragment>
            <section className='-mt-[88px] lg:-mt-[98px] bg-[#F8F8F8]'>
                <Container className='pt-[80px]'>
                    <div className="p-6 bg-white rounded-[24px]">
                        <Row className='justify-between'>
                            <Col className='mb-4 md:mb-0' md={4}>
                                <h1 className='font-medium text__48 mb-3'>Get in Touch</h1>
                                <p className='text__18 mb-6 lg:mb-12'>Have questions about our event planning services? We're here to help! <br className='xl:block hidden' /> Reach out to us for any inquiries about venues, event packages, or planning assistance.</p>

                                <div className="my-8">
                                    <h5 className='font-medium text__20 text-Mblack mb-2'>Customer Support</h5>
                                    <p className='text__16 text-Mblack'>Our dedicated support team is available 24/7 to assist you with any event planning needs.</p>
                                </div>

                                <div className="my-8">
                                    <h5 className='font-medium text__20 text-Mblack mb-2'>Venue Partnerships</h5>
                                    <p className='text__16 text-Mblack'>Interested in partnering with us? Contact our venue relations team to discuss collaboration opportunities.</p>
                                </div>

                                <div className="my-8">
                                    <h5 className='font-medium text__20 text-Mblack mb-2'>Event Planning Services</h5>
                                    <p className='text__16 text-Mblack'>Need help planning your next event? Our expert planners are ready to assist you.</p>
                                </div>

                                <p className='text__14 mb-2'>Social Media</p>
                                <div className="flex items-center gap-2">
                                    <a href="#!">
                                        <img src="/images/sos (1).svg" alt="" />
                                    </a>
                                    <a href="#!">
                                        <img src="/images/sos (2).svg" alt="" />
                                    </a>
                                    <a href="#!">
                                        <img src="/images/sos (3).svg" alt="" />
                                    </a>
                                    <a href="#!">
                                        <img src="/images/sos (4).svg" alt="" />
                                    </a>
                                    <a href="#!">
                                        <img src="/images/sos (5).svg" alt="" />
                                    </a>
                                </div>
                            </Col>
                            <Col md={7}>
                                <Row>
                                    <Col className='col-6'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>First Name<span className='text-[#ED544E]'>*</span></Form.Label>
                                            <Form.Control type="email" placeholder="First Name" className='font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
                                        </Form.Group>
                                    </Col>
                                    <Col className='col-6'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Last Name<span className='text-[#ED544E]'>*</span></Form.Label>
                                            <Form.Control type="text" placeholder="Last Name" className='font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Email<span className='text-[#ED544E]'>*</span></Form.Label>
                                    <Form.Control type="email" placeholder="Email address" className='font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Your Message<span className='text-[#ED544E]'>*</span></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="How we can help?"
                                        style={{ height: '100px' }}
                                        className='font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] py-3 px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]'
                                    />
                                </Form.Group>

                                <a href='#!' className='inline-block cursor-pointer text-center font-medium text__16 text-white !py-[15px] !px-[28px] bg-Myellow !border-Myellow btnClass'>Submit</a>

                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </Fragment>
    )
}

export default Contact