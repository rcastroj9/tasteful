import React from 'react'
import { Fragment } from 'react'
import Slider from 'react-slick'
import { CardTestimonial } from '../Card/Card'
import { Container } from 'react-bootstrap'

const SecTestimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    return (
        <Fragment>
            <section className='bg-[#F8F8F8]'>
                <Container>
                    <div className="mb-10 text-center">
                        <h3 className='mb-10 font-medium text__48 mb-2'>What our customers say about us.</h3>
                    </div>

                    <Slider {...settings} className="-mx-[15px] sliderDots">
                        <div className="px-[15px]">
                            <CardTestimonial />
                        </div>
                        <div className="px-[15px]">
                            <CardTestimonial />
                        </div>
                        <div className="px-[15px]">
                            <CardTestimonial />
                        </div>
                        <div className="px-[15px]">
                            <CardTestimonial />
                        </div>
                        <div className="px-[15px]">
                            <CardTestimonial />
                        </div>
                        <div className="px-[15px]">
                            <CardTestimonial />
                        </div>
                        <div className="px-[15px]">
                            <CardTestimonial />
                        </div>
                        <div className="px-[15px]">
                            <CardTestimonial />
                        </div>
                        <div className="px-[15px]">
                            <CardTestimonial />
                        </div>
                    </Slider>
                </Container>
            </section>
        </Fragment>
    )
}

export default SecTestimonial