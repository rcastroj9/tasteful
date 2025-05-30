import React, { useState } from 'react'
import { Fragment } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import DatePicker from "react-multi-date-picker"
import "react-multi-date-picker/styles/layouts/prime.css"
import FormField from '../Components/Form/FormField'
import FormCheckList from '../Components/Form/FormCheckList'
import { COMPANY, FORM_CONTENT } from '../config/constants'
import { NavLink } from 'react-router-dom'


const PlanEventForm = () => {
    const [selectedDates, setSelectedDates] = useState([])
    const [selectedDynamics, setSelectedDynamics] = useState([])

    const getInputValue = (id) => {
        return document.getElementById(id).value;
    };

    const handleSubmit = async () => {
        try {
            // Get the form data from your existing form fields

            const eventRequirements = {
                dates: selectedDates,
                startTime: getInputValue('time'),
                timeZone: 'EST',
                location: ['43.637633', '-79.399336'],
                numberOfGuests: getInputValue('numberOfGuests'),
                budget: getInputValue('budget'),
                address: getInputValue('address'),
                eventLength: getInputValue('eventDuration'),
                teamDynamics: selectedDynamics,
            }
            
            const userData = {
                firstName: getInputValue('firstName'),
                lastName: getInputValue('lastName'),
                emailAddress: getInputValue('emailAddress'),
                companyContext: getInputValue('context'),
                phoneNumber: '647989394',
                eventRequirements: eventRequirements,
                eventQuotes: []
            };

            // Make the API call
            const response = await fetch('http://localhost:3000/api/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: userData,
                    eventRequirements: eventRequirements
                })
            });

            if (!response.ok) {
                throw new Error('Failed to create user and event');
            }

            const data = await response.json();
            console.log('User and event created successfully:', data);
            
            // Redirect to events found page
            window.location.href = '/eventsFound';
            
        } catch (error) {
            console.error('Error creating user and event:', error);
            // You might want to show an error message to the user here
        }
    }

    const handleDynamicChange = (dynamic) => {
        setSelectedDynamics(prev => {
            if (prev.includes(dynamic)) {
                return prev.filter(d => d !== dynamic);
            } else {
                return [...prev, dynamic];
            }
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log("Dani");
        
    //     // const eventRequirements = {
    //     //     numberOfGuests: parseInt(document.getElementById('numberOfGuests').value),
    //     //     budget: parseFloat(document.getElementById('budget').value),
    //     //     address: document.getElementById('address').value,
    //     //     time: document.getElementById('time').value,
    //     //     eventLength: parseInt(document.getElementById('eventLength').value),
    //     //     teamDynamics: selectedDynamics
    //     // };

    //     const formData = {
    //         emailAddress: document.getElementById('emailAddress').value,
    //         firstName: document.getElementById('firstName').value,
    //         lastName: document.getElementById('lastName').value,
    //         context: document.getElementById('context').value,
    //         eventRequirements: [],
    //         eventQuotes: []
    //     };
    //     console.log(formData);

    //     try {
    //         const response = await fetch('http://localhost:3000/api/users/', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to submit form');
    //         }

    //         const data = await response.json();
    //         console.log('Success:', data);
    //         // Handle successful submission (e.g., show success message, redirect)
    //     } catch (error) {
    //         console.error('Error:', error);
    //         // Handle error (e.g., show error message)
    //     }
    // };

    return (
        <Fragment>
            <section className='-mt-[88px] lg:-mt-[98px] bg-[#F8F8F8]'>
                <Container className='pt-[30px]'>
                    <div className="p-12 bg-white rounded-[24px]">
                        <Row className='justify-between'>
                            <Col className='mb-4 md:mb-0 items-center flex flex-col gap-4' md={4}>
                                {/* <h2 className='font-medium text__48 text-center'>{COMPANY.name}</h2> */}
                                {/* <h3 className='text__40 text-Myellow text-center'>Plan your next team outing in less than 5 minutes.</h3> */}
                                <p className='text__24 text-center leading-[30px]'>Your own team outing planner assistant </p>
                                <p className='text__16 text-center '>Whether it's a team dinner, happy hour, or fun activity, get the best options that fit your group size and budget. Easy for you to compare and choose.</p>
                                <img src={"https://bwwgddl6kxqlkkp1.public.blob.vercel-storage.com/images/partyPlanningComitee-2LYqyZzc7dNexmOIQqGaeI3myUxPOE.jpg"} alt="" />
                                <NavLink to="/eventsFound" className="cursor-pointer text__16 btnClass !px-[32px] text-white bg-Myellow">View Sample Events</NavLink>

                                <div className="my-2">
                                    <p className='text__14 mb-2'>Perfect for:</p>
                                    <ul className='text__14 list-disc pl-5 space-y-2'>
                                        <li>Department celebrations</li>
                                        <li>Team building activities</li>
                                        <li>Small group social events</li>
                                        <li>Team dinners and happy hours</li>
                                    </ul>
                                </div>
                            </Col>
                                {/* <p className='text__14 mb-2'>{FORM_CONTENT.followUs}</p> */}
                                {/* ... existing social media links ... */}
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
                                    controlId="emailAddress"
                                    type="emailAddress"
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
                                            controlId="numberOfGuests"
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
                                    placeholder="Address"
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
                                            controlId="eventDuration"
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

                                <FormCheckList 
                                    selectedDynamics={selectedDynamics}
                                    onDynamicChange={handleDynamicChange}
                                />
                            
                            </Col>
                            <div>
                                <section className='bg-[#FFFFF]'>
                                    <Container>
                                        <div className="w-full bg-Myellow px-20 py-[4rem] md:py-[6rem] text-center rounded-[32px] relative">
                                            <img src="https://bwwgddl6kxqlkkp1.public.blob.vercel-storage.com/images/Background%20Pattern-lc8ACi6JaloFqjcF98gNwMy2UJGMYD.png" className='absolute w-full h-full left-0 top-0' alt="" />
                                            <div className="relative z-2">
                                                <p className='text-Mblack text__16 mb-8 md:mb-12'> Don't worry, we've got you covered! We'll gather the best quotes that fit your budget and all your needs—just sit back and we'll be in touch with you soon. </p>
                                                <div className="text-center">
                                                    <div className="inline-block relative">
                                                        <NavLink 
                                                            to="/eventsFound" 
                                                            onClick={handleSubmit} 
                                                            className='font-medium text__16 inline-block cursor-pointer font-medium text__14 text-Mblack btnClass !py-[16px] bg-white'
                                                        >
                                                            Help me plan!
                                                        </NavLink>
                                                        <img className='absolute top-1/2 -right-[6rem] lg:-right-[9rem] w-[5rem] lg:w-auto' src="https://bwwgddl6kxqlkkp1.public.blob.vercel-storage.com/images/arrowws-ixQUKrZG2sUkl4qme5pX2pSsnVHcT9.svg" alt="" />
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </Container>
                                </section>
                            </div>
                        </Row>
                    </div>
                </Container>
            </section>
        </Fragment>
    )
}

export default PlanEventForm 