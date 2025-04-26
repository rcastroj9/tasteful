import React, { Fragment, useState } from 'react'
import { Col, Form, Modal, Row } from 'react-bootstrap'
import { CloseIcon, LogoIcon } from '../Icon/Icon'
import 'react-phone-input-2/lib/style.css'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import VerificationInput from 'react-verification-input'
import ResetPassword from '../../Pages/Auth/ResetPassword'
export const ModalStepStarted = ({ show, handleClose, handleShow, StatusModal, setStatusModal }) => {
    const onEventClick = (StatusModal) => {
        handleClose()
        setStatusModal(StatusModal)
        console.log("masuk sini")
        setTimeout(function () {
            handleShow()
        }, 500);
    }

    console.log(StatusModal);

    return (
        <Fragment>
            <StepModal show={show} handleClose={() => handleClose()} handleShow={() => handleShow()} StatusModal={StatusModal} setStatusModal={(e) => setStatusModal(e)} onEventClick={(e) => onEventClick(e)} />
        </Fragment>
    )
}



export const StepModal = ({ show, handleClose, handleShow, StatusModal, setStatusModal, onEventClick }) => {
    const showingForm = (e) => {
        switch (e) {
            case "Login":
                return <Login setStatusModal={(e) => setStatusModal(e)} onEventClick={(e) => onEventClick(e)} handleClose={() => handleClose()} />
                break;
            case "Register":
                return <Register setStatusModal={(e) => setStatusModal(e)} onEventClick={(e) => onEventClick(e)} handleClose={() => handleClose()} />
                break;
            case "ForgotPassword":
                return <ForgotPassword setStatusModal={(e) => setStatusModal(e)} onEventClick={(e) => onEventClick(e)} handleClose={() => handleClose()} />
                break;
            case "Verification":
                return <Verification setStatusModal={(e) => setStatusModal(e)} onEventClick={(e) => onEventClick(e)} handleClose={() => handleClose()} />
                break;
            case "ResetPassword":
                return <ResetPassword setStatusModal={(e) => setStatusModal(e)} onEventClick={(e) => onEventClick(e)} handleClose={() => handleClose()} />
                break;
            case "Success":
                return <Success onEventClick={(e) => onEventClick(e)} handleClose={() => handleClose()} setStatusModal={(e) => setStatusModal(e)} />
                break;
            default:
                break;
        }
    }
    return (

        <Modal size={"md"} className='modalTicket' centered show={show} onHide={() => {
            handleClose()
            setStatusModal(StatusModal == "Success" ? "Success" : StatusModal)
        }}>
            <Modal.Body>
                {
                    showingForm(StatusModal)
                }

            </Modal.Body>
            {
                StatusModal != "Success" ? <div className="text-center mt-6">
                    <div onClick={() => {
                        handleClose()
                        setStatusModal("Login")
                    }} className="cursor-pointer w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white mx-auto">
                        <CloseIcon />
                    </div>
                </div> : ""
            }

        </Modal>
    )
}

const Login = ({ onEventClick, setStatusModal, handleClose }) => {
    const [tooglePassword, settooglePassword] = useState(true)
    const [toogleChecklist, settoogleChecklist] = useState(false)
    return <Fragment>
        <div className="text-center mb-10">
            <div className="flex items-center gap-2 mb-3 justify-center">
                <LogoIcon color='#171717' />
                <span className='font-medium text__20 '>BankUI</span>
            </div>
            <h4 className='font-medium text__32 mb-2'>Good to see you again 👋</h4>
            <p>Don’t have an account? <span onClick={() => onEventClick("Register")} className='cursor-pointer text-Myellow '>Sign Up</span></p>
        </div>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Email</Form.Label>
            <Form.Control type="email" placeholder="e.g sanandreas@gmail.com" className='font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Password</Form.Label>
            <div className="relative">
                <Form.Control type={tooglePassword ? "password" : "text"} placeholder="Must be at least 8 character" className='font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
                <img onClick={() => settooglePassword(!tooglePassword)} src="./../../images/eye-slash.svg" className='cursor-pointer absolute top-1/2 -translate-y-1/2 right-4' alt="" />
            </div>

        </Form.Group>

        <div className="text-right mb-3">
            <div onClick={() => onEventClick("ForgotPassword")} className='font-medium text__14 text-Myellow cursor-pointer '>Forgot Password?</div>
        </div>

        <div className="mb-6 flex items-center gap-2 cursor-pointer" onClick={() => settoogleChecklist(!toogleChecklist)}>
            <div className={"flex items-center justify-center w-[24px] h-[24px] rounded-full border border-solid  " + (toogleChecklist ? "border-Myellow bg-Myellow bg-Myellow" : "border-[#A3A3A3]")}>
                <img src="./../images/check (3).svg" className={toogleChecklist ? "opacity-100" : "opacity-0"} alt="" />
            </div>
            <span className='text__14'>Opt out of emails about latest product updates</span>
        </div>

        <div className="text-center">
            <NavLink to="/" onClick={() => handleClose()} className='inline-block cursor-pointer text-center font-medium text__16 text-white !py-[15px] bg-Myellow !border-Myellow bg-Myellow btnClass w-full'>Login</NavLink>

            <div className="my-3 relative">
                <div className="absolute h-[1px] left-0 w-full top-1/2 -translate-y-1/2 bg-[#F5F5F5]"></div>
                <div className='px-4 py-2 bg-white relative inline-block text__12 text-[#525252] relative z-[2]'>Or Log In with</div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-3">
                <a href='#!' className="relative inline-block px-3 py-[10px] w-full text-center rounded-[50px] border border-solid border-[#F5F5F5] ">
                    <img src="./../images/Icon - Google.svg" className='absolute left-[10px] top-1/2 -translate-y-1/2' alt="" />
                    <div className="relative z-2 font-medium text__14">
                        Google
                    </div>
                </a>
                <a href='#!' className="relative inline-block px-3 py-[10px] w-full text-center rounded-[50px] border border-solid border-[#F5F5F5] ">
                    <img src="./../images/facebook-3-2 1.svg" className='absolute left-[10px] top-1/2 -translate-y-1/2' alt="" />
                    <div className="relative z-2 font-medium text__14">
                        Facebook
                    </div>
                </a>
            </div>
        </div>
    </Fragment>
}
const Register = ({ onEventClick, setStatusModal, handleClose }) => {
    const [tooglePassword, settooglePassword] = useState(true)
    const [toogleChecklist, settoogleChecklist] = useState(false)
    return <Fragment>
        <div className="text-center mb-10">
            <div className="flex items-center gap-2 mb-3 justify-center">
                <LogoIcon color='#171717' />
                <span className='font-medium text__20 '>BankUI</span>
            </div>
            <h4 className='font-medium text__32 mb-2'>Create an account to continue</h4>
            <p>It’s free to create an account and get your event live. <br className='hidden xl:block' />
                Already have an account? <span onClick={() => onEventClick("Login")} className='cursor-pointer text-Myellow'>Log in</span></p>
        </div>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Full Name</Form.Label>
            <Form.Control type="text" placeholder="e.g San Andreas" className='font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Email</Form.Label>
            <Form.Control type="email" placeholder="e.g sanandreas@gmail.com" className='font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Password</Form.Label>
            <div className="relative">
                <Form.Control type={tooglePassword ? "password" : "text"} placeholder="Must be at least 8 character" className='font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
                <img onClick={() => settooglePassword(!tooglePassword)} src="./../../images/eye-slash.svg" className='cursor-pointer absolute top-1/2 -translate-y-1/2 right-4' alt="" />
            </div>

        </Form.Group>

        <div className="mb-6 flex items-center gap-2 cursor-pointer" onClick={() => settoogleChecklist(!toogleChecklist)}>
            <div className={"flex items-center justify-center w-[24px] h-[24px] rounded-full border border-solid  " + (toogleChecklist ? "border-Myellow text-Myellow bg-Myellow text-Myellow" : "border-[#A3A3A3]")}>
                <img src="./../images/check (3).svg" className={toogleChecklist ? "opacity-100" : "opacity-0"} alt="" />
            </div>
            <span className='text__14'>Opt out of emails about latest product updates</span>
        </div>

        <div className="text-center">
            <NavLink to="/" onClick={() => handleClose()} className='inline-block cursor-pointer text-center font-medium text__16 text-white !py-[15px] bg-Myellow text-Myellow !border-Myellow text-Myellow btnClass w-full'>Sign Up</NavLink>

            <div className="my-3 relative">
                <div className="absolute h-[1px] left-0 w-full top-1/2 -translate-y-1/2 bg-[#F5F5F5]"></div>
                <div className='px-4 py-2 bg-white relative inline-block text__12 text-[#525252] relative z-[2]'>Or Sign Up with</div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-3">
                <a href='#!' className="relative inline-block px-3 py-[10px] w-full text-center rounded-[50px] border border-solid border-[#F5F5F5] ">
                    <img src="./../images/Icon - Google.svg" className='absolute left-[10px] top-1/2 -translate-y-1/2' alt="" />
                    <div className="relative z-2 font-medium text__14">
                        Google
                    </div>
                </a>
                <a href='#!' className="relative inline-block px-3 py-[10px] w-full text-center rounded-[50px] border border-solid border-[#F5F5F5] ">
                    <img src="./../images/facebook-3-2 1.svg" className='absolute left-[10px] top-1/2 -translate-y-1/2' alt="" />
                    <div className="relative z-2 font-medium text__14">
                        Facebook
                    </div>
                </a>
            </div>
        </div>
    </Fragment>
}
const ForgotPassword = ({ onEventClick, setStatusModal, handleClose }) => {
    return <Fragment>
        <div className="text-center mb-10">
            <div className="flex items-center gap-2 mb-3 justify-center">
                <LogoIcon color='#171717' />
                <span className='font-medium text__20 '>BankUI</span>
            </div>
            <h4 className='font-medium text__32 mb-2'>Forgot your password?</h4>
            <p>We'll send you an email with a link to reset your password.</p>
        </div>


        <Form.Group className="mb-8" controlId="exampleForm.ControlInput1">
            <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Email address</Form.Label>
            <Form.Control type="email" placeholder="e.g sanandreas@gmail.com" className='font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
        </Form.Group>

        <div onClick={() => onEventClick("Verification")} className='inline-block cursor-pointer text-center font-medium text__16 text-white !py-[15px] bg-Myellow !border-Myellow btnClass w-full'>Send me a reset link</div>
    </Fragment >
}
const Verification = ({ onEventClick, setStatusModal, handleClose }) => {
    return <Fragment>
        <div className="text-center mb-10">
            <div className="flex items-center gap-2 mb-3 justify-center">
                <LogoIcon color='#171717' />
                <span className='font-medium text__20 '>BankUI</span>
            </div>
            <h4 className='font-medium text__32 mb-2'>Reset Password</h4>
            <p>Recover your account password</p>
        </div>

        <div className="mb-8 wrapVerification">
            <VerificationInput length={5} classNames={{
                container: "wrap",
                character: "character",
                characterInactive: "character--inactive",
                characterSelected: "character--selected",
            }} />
        </div>
        <div onClick={() => onEventClick("RisetPassword")} className='inline-block cursor-pointer text-center font-medium text__16 text-white !py-[15px] bg-Myellow !border-Myellow btnClass w-full'>Next</div>

        <a href="#!" className='font-medium text__16 text-center w-full text-Myellow inline-block mt-4'>Resend</a>
    </Fragment >
}


const RisetPassword = ({ onEventClick, setStatusModal, handleClose }) => {
    const [statusPassword, setstatusPassword] = useState(false)

    const [tooglePassword, settooglePassword] = useState(true)
    const [tooglePasswordRNew, settooglePasswordRNew] = useState(true)

    const SuccessForm = () => {
        return (
            <Fragment>
                <div className="text-center">
                    <img src={window.location.origin + "/images/Illustration.svg"} className='mx-auto -mb-[0.5rem]' alt="" />
                    <h3 className='font-medium text__32 mb-2'>Success!</h3>
                    <p className='text__16 text-Mgray mb-10'>Your password is succesfully <br /> created</p>

                    <NavLink to="/" onClick={() => handleClose()} className='inline-block cursor-pointer font-medium text__16 text-Myellow  !border-Myellow hover:text-white hover:bg-Myellow btnClass'>Continue</NavLink>
                </div>
            </Fragment>
        )
    }

    const NewPasswordForm = () => {
        return <Fragment>
            <div className="text-center mb-10">
                <div className="flex items-center gap-2 mb-3 justify-center">
                    <LogoIcon color='#171717' />
                    <span className='font-medium text__20 '>BankUI</span>
                </div>
                <h4 className='font-medium text__32 mb-2'>Create New Password</h4>
                <p>Recover your account password</p>
            </div>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='font-normal text__14 text-[#A3A3A3]'>Password<span className='text-[#ED544E]'>*</span></Form.Label>
                <div className="relative">
                    <Form.Control type={tooglePassword ? "password" : "text"} placeholder="***************" className='font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
                    <img onClick={() => settooglePassword(!tooglePassword)} src="./../../images/eye-slash.svg" className='cursor-pointer absolute top-1/2 -translate-y-1/2 right-4' alt="" />
                </div>

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='font-normal text__14 text-[#A3A3A3]'>New Password<span className='text-[#ED544E]'>*</span></Form.Label>
                <div className="relative">
                    <Form.Control type={tooglePasswordRNew ? "password" : "text"} placeholder="***************" className='font-medium text__14 bg-[#FAFAFA] h-[54px] rounded-[20px] px-3 outline-none shadow-none focus:outline-none focus:shadow-none border-[#F5F5F5] focus:border-[#F5F5F5] focus:bg-[#FAFAFA]' />
                    <img onClick={() => settooglePasswordRNew(!tooglePasswordRNew)} src="./../../images/eye-slash.svg" className='cursor-pointer absolute top-1/2 -translate-y-1/2 right-4' alt="" />
                </div>

            </Form.Group>

            <div onClick={() => setstatusPassword(!statusPassword)} className='cursor-pointer inline-block cursor-pointer text-center font-medium text__16 text-white !py-[15px] bg-Myellow !border-Myellow btnClass w-full'>Next</div>
        </Fragment >
    }
    return <Fragment>
        {
            !statusPassword ? NewPasswordForm() : SuccessForm()
        }
    </Fragment>
}

const Success = ({ onEventClick, handleClose, setStatusModal }) => {
    return <Fragment>

        <div className="text-center">
            <img src={window.location.origin + "/images/Illustration.svg"} className='mx-auto -mb-[1rem]' alt="" />

            <h3 className='font-medium text__32 mb-2 relative z-2'>Payment Successful!</h3>
            <p className='text__16 text-Mgray relative z-2 mb-6'>Ac quis condimentum viverra varius purus vulputate ut eget pharetra.</p>

            <div onClick={() => {
                handleClose()
                setStatusModal("Success")
            }} className={'cursor-pointer inline-block cursor-pointer font-medium text__14 text-Myellow !border-Myellow btnClass hover:bg-Myellow hover:text-white relative z-2'}>Explore More</div>
        </div>

    </Fragment>
}