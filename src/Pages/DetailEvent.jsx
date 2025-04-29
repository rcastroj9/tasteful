import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SortAction from '../Components/Filter/SortAction'
import { CardFoodRestaurant, CardFoodToBuy } from '../Components/Card/Card'
import { NavLink } from 'react-router-dom'
import SecTestimonial from '../Components/Pages/SecTestimonial'
import SecGetstart from '../Components/Pages/SecGetstart'
import { useContextEvents } from '../context/EventsContext'
import SecOptions from '../Components/Pages/SecOptions'

const DetailEvent = () => {
    const { selectedEvent } = useContextEvents();
    const [cartData, setCartData] = useState([
        {
            title: "Menú Durum",
            desc: "Rollo de fina masa de pan de trigo, relleno de carne de pollo, ternera, mixto o falafel con patatas y bebida",
            img: window.origin + "/images/fd (1).png",
            price: "10.00",
            discount: "-20%",
            quantity: 0,
        }
    ]);

    if (!selectedEvent) {
        return <div>Event not found</div>;
    }
    console.log({selectedEvent});

    const addToCart = (item, qty) => {
        const index = cartData.findIndex((cartItem) => cartItem.title === item.title);
        if (index !== -1) {
            const updatedCartData = [...cartData];
            updatedCartData[index].quantity = qty;
            setCartData(updatedCartData);
        }
    };

    const allTotal = () => {
        const totalPrice = cartData.reduce((acc, item) => {
            const itemPrice = parseFloat(item.price.replace("$", ""));
            const itemQuantity = item.quantity;
            return acc + (itemPrice * itemQuantity);
        }, 0)
        return {
            totalQuantity: cartData.reduce((acc, item) => acc + item.quantity, 0),
            totalPrice: totalPrice
        }
    }

    return (
        <Fragment>
             <section className='bg-white pb-0 mx-[16px] rounded-tl-[40px] rounded-tr-[40px] mb-[100px]'>
                <Container>
                    <div className="max-w-[1000px] mx-auto">
                        <Row className='gap-y-6'>
                            <Col md={5} className='my-auto'>
                                <img src={selectedEvent.img} alt={selectedEvent.title} className="w-full rounded-[16px]" />
                            </Col>
                            <Col md={6} className='my-auto ml-auto'>
                                <h2 className='font-medium text__48 mb-3'>{selectedEvent.title}</h2>
                                <p className='text__18 mb-3'>{selectedEvent.description}</p>
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="flex items-center gap-2">
                                        <img src="./../images/location.png" alt="Location" />
                                        <span className="text__14">{selectedEvent.distance}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="./../images/star.svg" alt="Time" />
                                        <span className="text__14">{selectedEvent.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="./../images/star.svg" alt="Rating" />
                                        <span className="text__14">{selectedEvent.rating}</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>      
                        <SecOptions options={selectedEvent.options} />
                        <SecTestimonial />
                        <div className="flex justify-center">
                            <NavLink to="/payment" className={'cursor-pointer font-medium text__14 btnClass !px-[32px] text-white bg-Myellow'}>Book Now</NavLink>
                        </div>
                    </div>
                </Container>
            </section>
        </Fragment>
    )
}

export default DetailEvent