import React from 'react'
import { Fragment } from 'react'
import SecFaq from '../Components/Pages/SecFaq'
import SecGetstart from '../Components/Pages/SecGetstart'

const Faq = () => {
    return (
        <Fragment>
            <div className="-mt-[88px] lg:-mt-[98px] bg-[#F8F8F8]">
                <div className="pt-[88px] lg:pt-[98px] bg-[]">
                    <SecFaq />
                    <SecGetstart title={"Join Our Foodie Community"} BtnLink={"/login"} btnTitle={"Join Now"} />
                </div>
            </div>
        </Fragment>
    )
}

export default Faq