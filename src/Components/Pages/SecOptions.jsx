import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const SecOptions = ({ options }) => {
    const [activeOption, setActiveOption] = useState(0)

    const toggleOption = (index) => {
        if (index === activeOption) {
            setActiveOption(-1)
        } else {
            setActiveOption(index)
        }
    }

    return (
        <section>
            <Container>
                <div className="mb-10 text-center">
                    <h3 className='font-medium text__48 mb-3'>Available Options</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                    {
                        options.map((option, index) => {
                            return (
                                <Fragment key={index}>
                                    <div className='bg-white px-4 rounded-[20px] overflow-hidden w-full'>
                                        <div 
                                            className="py-4 px-4 flex justify-between items-center cursor-pointer rounded-[20px] bg-[#F8F8F8]" 
                                            onClick={() => toggleOption(index)}
                                        >
                                            <h5 className='font-medium text__24'>Option {index + 1}</h5>
                                            <div className={"arrowPlus relative w-[24px] h-[24px] " + (activeOption === index ? "active" : "")}>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>

                                        <div className={activeOption === index ? "block pb-4" : "hidden"}>
                                            <div className='text__18 m-4'>
                                                <h6 className='font-medium mb-2'>{option.name}</h6>
                                                <div className='mb-3'>
                                                    <p className='font-medium mb-1'>Includes:</p>
                                                    <ul className='list-disc pl-5'>
                                                        {option.includes.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className='font-medium'>
                                                    Budget: <span className='text-Myellow'>{option.budget}</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <NavLink to="/payment" className={'cursor-pointer font-medium text__14 btnClass !px-[32px] text-white bg-Myellow'}>Let's book it!</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

export default SecOptions