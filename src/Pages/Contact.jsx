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
                                <h2 className='font-medium text__48 mb-3'>We’d love to hear from you.</h2>
                                <p className='text__18 text-[#525252]'>If you have any questions about the subscription or you are not sure which plan is right for you, please contact our team.</p>

                                <div className="my-8">
                                    <p className='text__14 mb-2'>Don’t like forms?</p>
                                    <h5 className='font-medium text__20 text-Myellow'>Customer@Company.com</h5>
                                </div>

                                <p className='text__14 mb-2'>Social Media</p>
                                <div className="flex items-center gap-2">
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