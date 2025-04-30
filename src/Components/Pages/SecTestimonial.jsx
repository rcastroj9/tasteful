import React from 'react'
import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { CardEventTestimonial } from '../Card/EventCard'
import { useContextEvents } from '../../context/EventsContext'
import { useEffect } from 'react'
import Slider from 'react-slick'

let COUNT = 0;

const SecTestimonial = React.memo(() => {
    const { selectedEvent } = useContextEvents();
    console.log({selectedEvent});
    console.log({COUNT});
    COUNT++;

    useEffect(() => {
        console.log('SecTestimonial mounted');
        return () => console.log('SecTestimonial unmounted');
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    if (!selectedEvent?.reviews?.length) {
        return null;
    }

    return (
        <Fragment>
            <Container className="py-5">
                <h2 className="text-center mb-4">Testimonials</h2>
                <Slider {...settings}>
                    {selectedEvent?.reviews?.map((review, index) => (
                        <CardEventTestimonial key={index} review={review} />
                    ))}
                </Slider>
            </Container>
        </Fragment>
    );
});

export default SecTestimonial;