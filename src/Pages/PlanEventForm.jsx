import React, { useState } from 'react'
import { Fragment } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import DatePicker from "react-multi-date-picker"
import "react-multi-date-picker/styles/layouts/prime.css"
import FormField from '../Components/Form/FormField'
import FormCheckList from '../Components/Form/FormCheckList'
import { COMPANY, FORM_CONTENT } from '../config/constants'

const PlanEventForm = () => {
    const [selectedDates, setSelectedDates] = useState([])

    return (
        <Fragment>
            <section className='-mt-[88px] lg:-mt-[98px] bg-[#F8F8F8]'>
                <Container className='pt-[80px]'>
                    <div className="p-6 bg-white rounded-[24px]">
                        <Row className='justify-between'>
                            <Col className='mb-4 md:mb-0' md={4}>
                                <h2 className='font-medium text__48 mb-3'>{FORM_CONTENT.title}</h2>
                                <p className='text__18 text-[#525252]'>{FORM_CONTENT.description}</p>

                                <div className="my-8">
                                    <p className='text__14 mb-2'>{FORM_CONTENT.assistance.text}</p>
                                    <h5 className='font-medium text__20 text-Myellow'>{COMPANY.email}</h5>
                                </div>

                                <p className='text__14 mb-2'>{FORM_CONTENT.followUs}</p>
                                {/* ... existing social media links ... */}
                            </Col>
                            <Col md={7}>
                                <Row>
                                    <Col className='col-6'>
                                        <FormField 
                                            label="First Name"
                                            placeholder="First Name"
                                            controlId="firstName"
                                        />
                                    </Col>
                                    <Col className='col-6'>
                                        <FormField 
                                            label="Last Name"
                                            placeholder="Last Name"
                                            controlId="lastName"
                                        />
                                    </Col>
                                </Row>

                                <FormField 
                                    label="Email"
                                    placeholder="Email address"
                                    controlId="email"
                                    type="email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                />

                                <Form.Group className="mb-3" controlId="context">
                                    <Form.Label className='font-normal text__14 text-Mblack'>Add Context<span className='text-[#ED544E]'>*</span></Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder={FORM_CONTENT.contextPlaceholder}
                                        style={{ height: '100px' }}
                                        className='font-medium text__14 bg-[#FAFAFA] rounded-[20px] py-3 px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]'
                                        required
                                    />
                                </Form.Group>

                                <Row>
                                    <Col className='col-6'>
                                        <FormField 
                                            label="Number of People"
                                            placeholder="How many guests?"
                                            controlId="people"
                                            type="number"
                                        />
                                    </Col>
                                    <Col className='col-6'>
                                        <FormField 
                                            label="Budget"
                                            placeholder="Your budget"
                                            controlId="budget"
                                            type="number"
                                        />
                                    </Col>
                                </Row>

                                <FormField 
                                    label="Address"
                                    placeholder="Event location"
                                    controlId="address"
                                />

                                <Row>
                                    <Col className='col-6'>
                                        <FormField 
                                            label="Time"
                                            placeholder=""
                                            controlId="time"
                                            type="time"
                                        />
                                    </Col>
                                    <Col className='col-6'>
                                        <FormField 
                                            label="Event Length (hours)"
                                            placeholder="Duration in hours"
                                            controlId="eventLength"
                                            type="number"
                                        />
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3" controlId="when">
                                    <Form.Label className='font-normal text__14 text-Mblack'>When?<span className='text-[#ED544E]'>*</span></Form.Label>
                                    <div>
                                        <DatePicker
                                            multiple
                                            dateSeparator=" & "
                                            value={selectedDates}
                                            onChange={setSelectedDates}
                                            format="YYYY-MM-DD"
                                            className='rmdp-prime calendar-solid-bg'
                                            placeholder="Pick one or more dates"
                                            containerClassName="calendar-solid-bg"
                                            minDate={new Date().setDate(new Date().getDate() + 1)}
                                            style={{
                                                backgroundColor: "aliceblue",
                                                height: "35px",
                                                borderRadius: "8px",
                                                fontSize: "14px",
                                                padding: "3px 10px"
                                            }}
                                        />
                                    </div>
                                </Form.Group>

                                <FormCheckList />

                                <button type='submit' className='inline-block cursor-pointer text-center font-medium text__16 text-white !py-[15px] !px-[28px] bg-Myellow !border-Myellow btnClass'>Submit</button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </Fragment>
    )
}

export default PlanEventForm 