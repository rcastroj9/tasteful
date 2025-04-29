import React from 'react'
import { Fragment } from 'react'
import Slider from 'react-slick'
import { Container } from 'react-bootstrap'
import { CardEventTestimonial } from '../Card/EventCard'
import { useContextEvents } from '../../context/EventsContext'
import { useEffect } from 'react'

let COUNT = 0;

const SecTestimonial = React.memo(() => {
    const { selectedEvent } = useContextEvents();
    console.log({selectedEvent});
    console.log({COUNT});
    COUNT++;
    // console.log("first");

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
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    if (!selectedEvent?.reviews?.length) {
        return null;
    }

    return (
        <Fragment>
            <section className='bg-[#F8F8F8] rounded-xl m-8'>
                <Container>
                    <div className="mb-10 text-center">
                        <h3 className='mb-10 font-medium text__48 mb-2'>Customer Reviews</h3>
                    </div>
                    <div className='flex justify-around'>   
                        {selectedEvent.reviews.map((review, index) => {
                                return (
                                    <div key={`${review.reviewer}-${index}`} className="px-[15px]">
                                    <CardEventTestimonial review={review} />
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>
        </Fragment>
    )
});

export default SecTestimonial