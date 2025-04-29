import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { FAQ_DATA } from '../../config/constants'

const SecFaq = () => {
    const [ToogleFaq, setToogleFaq] = useState(0)

    const setToogleFaqWrap = (e) => {
        if (e === ToogleFaq) {
            setToogleFaq(-1)
        } else {
            setToogleFaq(e)
        }
    }

    return (
        <section>
            <Container>
                <div className="mb-10 text-center">
                    <h3 className='font-medium text__48 mb-3'>Frequently Asked Questions</h3>
                </div>
                <div className="flex flex-wrap gap-3 mx-12">
                    {
                        FAQ_DATA.map((obj, i) => {
                            return <Fragment key={i}>
                                <div className='bg-white px-4 rounded-[20px] overflow-hidden w-full'>
                                    <div className="py-4 px-4 flex justify-between items-center cursor-pointer rounded-[20px] bg-white" onClick={() => setToogleFaqWrap(i)}>
                                        <h5 className='font-medium text__24'>{obj.title}</h5>
                                        <div className={"arrowPlus relative w-[24px] h-[24px] " + (ToogleFaq === i ? "active" : "")}>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>

                                    <div className={ToogleFaq === i ? "block pb-4" : "hidden"}>
                                        <div className='text__18 m-4' dangerouslySetInnerHTML={{ __html: obj.desc }} />
                                    </div>
                                </div>
                            </Fragment>
                        })
                    }
                </div>
            </Container>
        </section>
    )
}

export default SecFaq