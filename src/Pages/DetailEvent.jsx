import React, { Fragment, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import SecTestimonial from '../Components/Pages/SecTestimonial'
import { useContextEvents } from '../context/EventsContext'
import SecOptions from '../Components/Pages/SecOptions'

const DetailEvent = () => {
    const { selectedEvent } = useContextEvents();
    const [cartData, setCartData] = useState([
        {
            title: "Menú Durum",
            desc: "Rollo de fina masa de pan de trigo, relleno de carne de pollo, ternera, mixto o falafel con patatas y bebida",
            img: "/images/fd (1).png",
            price: "10.00",
            discount: "-20%",
            quantity: 0,
        }
    ]);

    if (!selectedEvent) {
        return <div>Event not found</div>;
    }

    const handleAddToCart = (item, qty) => {
        const index = cartData.findIndex((cartItem) => cartItem.title === item.title);
        if (index !== -1) {
            const updatedCartData = [...cartData];
            updatedCartData[index].quantity = qty;
            setCartData(updatedCartData);
        }
    };

    const calculateTotal = () => {
        const totalPrice = cartData.reduce((acc, item) => {
            const itemPrice = parseFloat(item.price.replace("$", ""));
            const itemQuantity = item.quantity;
            return acc + (itemPrice * itemQuantity);
        }, 0);
        return {
            totalQuantity: cartData.reduce((acc, item) => acc + item.quantity, 0),
            totalPrice: totalPrice
        };
    };

    const { totalQuantity, totalPrice } = calculateTotal();

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                        <h1>{selectedEvent.title}</h1>
                        <p>{selectedEvent.description}</p>
                        <SecOptions />
                        <SecTestimonial />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default DetailEvent;