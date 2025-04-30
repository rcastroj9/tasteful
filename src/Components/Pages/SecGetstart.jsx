import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const SecGetstart = ({ title, desc, btnTitle, BtnLink }) => {
    return (
        <section className='bg-[#F8F8F8]'>
            <Container>
                <div className="w-full bg-Myellow px-4 py-[4rem] md:py-[6rem] text-center rounded-[32px] relative">
                    <img src={window.origin + "/images/Background Pattern.png"} className='absolute w-ful h-full left-0 top-0' alt="" />
                    <div className="relative z-2">
                        <h2 className='text-Mblack font-medium text__48 mb-2'>{title ? title : "Discover Flavours, Delivered. Order Your Feast!"}</h2>
                        <p className='text-Mblack text__16 mb-8 md:mb-12' dangerouslySetInnerHTML={{ __html: desc ? desc : "Exploring diverse flavors and cuisines, enticing visitors to embark on a culinary <br class='hidden md:block' /> adventure through food delivery." }} />

                        <div className="text-center">
                            <div className="inline-block relative">
                                <NavLink to={BtnLink ? BtnLink : "/search"} className='font-medium text__16 inline-block cursor-pointer font-medium text__14 text-Mblack btnClass !py-[16px] bg-white'>{btnTitle ? btnTitle : "Order Now"}</NavLink>

                                <img className='absolute top-1/2 -right-[6rem] lg:-right-[9rem] w-[5rem] lg:w-auto' src={window.origin + "/images/arrowws.svg"} alt="" />
                            </div>
                        </div>


                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SecGetstart
