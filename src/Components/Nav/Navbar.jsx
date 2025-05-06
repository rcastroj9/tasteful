import React from 'react'
import { Container } from 'react-bootstrap'
import { Fragment } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { CheckCircleIcon } from '../Icon/Icon'
import { COMPANY } from '../../config/constants'
import { LogoIcon } from '../Icon/Icon'

const Navbar = () => {

    let location = useLocation();
    const navigate = useNavigate();
    const [ToogleMenuResponsive, setToogleMenuResponsive] = useState(false);
    const [navabarScroll, setnavabarScroll] = useState(false)
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [email, setEmail] = useState('');

    const stickNavabr = () => {
        if (window.scrollY > 100) {
            setnavabarScroll(true)
        } else {
            setnavabarScroll(false)
        }
    }

    const handleAccessQuotes = (e) => {
        e.preventDefault();
        setShowEmailInput(!showEmailInput);
    }

    const handleGoToQuotes = () => {
        if (email) {
            navigate(`/eventsFound?email=${encodeURIComponent(email)}`);
            // navigate(`/quotes?email=${encodeURIComponent(email)}`);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', stickNavabr);
    }, [location])
    return (
        <Fragment>

            <div className={"fixed h-full w-full bg-MsoftYellow z-[99] pt-[100px] menuMobile " + (ToogleMenuResponsive ? "active" : "")}>
                <Container className='h-full'>
                    <ul className='list-none p-0 m-0 flex items-center flex-wrap gap-4 text-[20px] w-full'>
                        <li className='w-full'>
                            <NavLink to="/" onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className='font-medium text-Mblack'>Plan Team Outing</NavLink>
                        </li>
                        <li className='w-full'>
                            <NavLink to="/about" onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className='font-medium text-Mblack'>About</NavLink>
                        </li>
                        <li className='w-full'>
                            <NavLink to="/faq" onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className='font-medium text-Mblack'>FAQ</NavLink>
                        </li>
                        <li className='w-full'>
                            <NavLink to="/contact" onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className='font-medium text-Mblack'>Contact</NavLink>
                        </li>

                        <li className='w-full'>
                            {showEmailInput ? (
                                <div className="flex items-center gap-3">
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='min-w-[200px] h-[46px] px-[16px] border-b-[1px] border-Mblack text__14 bg-transparent outline-none focus:outline-none active:outline-none' 
                                        placeholder='Enter your email address' 
                                    />
                                    <button 
                                        onClick={handleGoToQuotes}
                                        className='font-medium text-[14px] bg-Mblack text-white px-4 py-2 rounded-full'
                                    >
                                        Go to my quotes
                                    </button>
                                </div>
                            ) : (
                                <a 
                                    href='#!' 
                                    onClick={handleAccessQuotes}
                                    className={'cursor-pointer font-medium text__14 btnClass !px-[32px] text-white bg-Mblack inline-block'}
                                >
                                    Access your quotes
                                </a>
                            )}
                        </li>
                    </ul>
                </Container>
            </div>

            <div className={'fixed py-4 w-full z-[999] left-0 top-0 bg-gradient-to-b from-MsoftYellow to-transparent' + (navabarScroll ? "bg-MsoftYellow" : ToogleMenuResponsive ? "bg-MsoftYellow" : "bg-transparent")}>
                <Container className='relative flex items-center'>


                    <NavLink to="/" className=''>
                        <div className="flex items-center gap-2">
                            {/* <LogoIcon /> */}
                            <LogoIcon color='#FEC51C' />
                            {/* <CheckCircleIcon  /> */}
                            <span className={'font-medium text-2xl text-Mblack'}>{COMPANY.name}</span>
                        </div>
                    </NavLink>


                    <ul className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 list-none p-0 m-0 hidden lg:flex items-center gap-6 text__16'>
                        <li>
                            <NavLink to="/planEvent" className={'font-medium ' + (navabarScroll ? "text-Mblack" : "text-Mblack")}>Plan Team Outing</NavLink>
                        </li>
                        <li>
                            {/* <NavLink to="/about" className={'font-medium ' + (navabarScroll ? "text-Mblack" : "text-Mblack")}>About</NavLink> */}
                        </li>
                        <li>
                            <NavLink to="/faq" className={'font-medium ' + (navabarScroll ? "text-Mblack" : "text-Mblack")}>FAQ</NavLink>
                        </li>
                        <li>
                            {/* <NavLink to="/contact" className={'font-medium ' + (navabarScroll ? "text-Mblack" : "text-Mblack")}>Contact</NavLink> */}
                        </li>
                    </ul>


                    <div className="flex items-center ml-auto gap-3">
                        <div className="lg:inline-block hidden">
                            {showEmailInput ? (
                                <div className="flex items-center gap-3">
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='min-w-[200px] h-[46px] px-[16px] border-b-[1px] border-Mblack text__14 bg-transparent outline-none focus:outline-none active:outline-none' 
                                        placeholder='Enter your email address' 
                                    />
                                    <button 
                                        onClick={handleGoToQuotes}
                                        className='w-full font-medium text-[14px] bg-Mblack text-white px-4 py-2 rounded-full'
                                    >
                                        Go to my quotes
                                    </button>
                                </div>
                            ) : (
                                <a 
                                    href='#!' 
                                    onClick={handleAccessQuotes}
                                    className={'cursor-pointer font-medium text__14 btnClass !px-[32px] text-white bg-Mblack inline-block'}
                                >
                                    Access your quotes
                                </a>
                            )}
                        </div>

                        <div onClick={() => setToogleMenuResponsive(!ToogleMenuResponsive)} className={"relative px-1 py-1 barIcon w-[30px] h-[30px] cursor-pointer lg:hidden ml-auto " + (ToogleMenuResponsive ? "active" : "")}>
                            <div className="hamburger-line !bg-Mblack"></div>
                            <div className="hamburger-line !bg-Mblack"></div>
                            <div className="hamburger-line !bg-Mblack"></div>
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    )
}

export default Navbar
