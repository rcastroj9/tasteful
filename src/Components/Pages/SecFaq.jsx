import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react'
import { Container } from 'react-bootstrap'

const SecFaq = () => {
    const dataFaq = [
        {
            title: "How does Foodie Express work?",
            desc: `Foodie Express is an online platform that connects you with a variety of restaurants in your area. Simply enter your location, browse the available menus, place your order, and enjoy delicious food delivered straight to your doorstep.`
        },
        {
            title: "What cuisines are available on Foodie Express?",
            desc: `Foodie Express is an online platform that connects you with a variety of restaurants in your area. Simply enter your location, browse the available menus, place your order, and enjoy delicious food delivered straight to your doorstep.`
        },
        {
            title: "How can I pay for my order?",
            desc: `Foodie Express is an online platform that connects you with a variety of restaurants in your area. Simply enter your location, browse the available menus, place your order, and enjoy delicious food delivered straight to your doorstep.`
        },
        {
            title: "Is there a minimum order amount?",
            desc: `Foodie Express is an online platform that connects you with a variety of restaurants in your area. Simply enter your location, browse the available menus, place your order, and enjoy delicious food delivered straight to your doorstep.`
        },
        {
            title: "How do I track my order?",
            desc: `Foodie Express is an online platform that connects you with a variety of restaurants in your area. Simply enter your location, browse the available menus, place your order, and enjoy delicious food delivered straight to your doorstep.`
        },
        {
            title: "Can I schedule my delivery for later?",
            desc: `Foodie Express is an online platform that connects you with a variety of restaurants in your area. Simply enter your location, browse the available menus, place your order, and enjoy delicious food delivered straight to your doorstep.`
        },
    ]


    const [ToogleFaq, setToogleFaq] = useState(0)

    const setToogleFaqWrap = (e) => {
        if (e === ToogleFaq) {
            setToogleFaq(-1)
        } else {
            setToogleFaq(e)
        }
    }

    return (
        <section className='bg-[#F8F8F8]'>
            <Container>
                <div className="mb-10">
                    <h3 className='font-medium text__48'>FAQs</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                    {
                        dataFaq.map((obj, i) => {
                            return <Fragment>
                                <div className='bg-white px-4 rounded-[20px] overflow-hidden w-full'>
                                    <div className="py-4 flex justify-between items-center cursor-pointer  " onClick={() => setToogleFaqWrap(i)}>
                                        <h5 className='font-medium text__24'>{obj.title}</h5>
                                        <div className={"arrowPlus relative w-[24px] h-[24px] " + (ToogleFaq === i ? "active" : "")}>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>

                                    <div className={ToogleFaq === i ? "block pb-4" : "hidden"}>
                                        <div className='text__18' dangerouslySetInnerHTML={{ __html: obj.desc }} />
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
