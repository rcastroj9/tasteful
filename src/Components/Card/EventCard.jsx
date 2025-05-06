import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { MAX_QUOTE } from '../../config/constants'
import { useContextEvents } from '../../context/EventsContext'

// export const CardEventToBuy = ({ data, addToCart, index }) => {
//     const [number, setnumber] = useState(data.quantity)

//     useEffect(() => {
//         setnumber(data.quantity)
//     }, [data.quantity])


//     const add = () => {
//         setnumber(number + 1)
//         addToCart(data, number + 1)
//     }
//     const min = () => {
//         if (number > 0) {
//             setnumber(number - 1)
//             addToCart(data, number - 1)
//         }
//     }
//     return (
//         <div className="w-full">
//             <div className=" mb-3">
//                 <div className="relative w-[140px] h-[100px] flex-shrink-0 rounded-xl overflow-hidden">
//                     <div className="text__14 px-3 py-1 rounded-full text-white bg-[#66C87B] absolute left-2 top-2">
//                         {data.discount}
//                     </div>
//                     <img src={data.img} className='w-full h-full object-cover' alt="" />
//                 </div>
//             </div>
//             <div className="">
//                 <h4 className='text__18 font-medium mb-1'>{data.title}</h4>
//                 <p className='text__12 text-[#9CA4AB] clamp-2'>{data.desc}</p>

//                 <div className="mt-2 flex items-center justify-between">
//                     <h5 className='font-medium text__16'>
//                         ${data.price}
//                     </h5>
//                     <div className="flex items-center gap-2">
//                         {
//                             number > 0 ? <Fragment>
//                                 <img src="/images/Tab (1).svg" className='cursor-pointer' onClick={min} alt="" />
//                                 <div className="font-medium text__14 flex items-center justify-center w-[24px] h-[24px] rounded-full bg-[#F9F9F9]">
//                                     {number}
//                                 </div>
//                             </Fragment> : ""
//                         }

//                         <img src="/images/Tab.svg" className='cursor-pointer' onClick={add} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export const CardEventRestaurant = ({ data, addToCart, index }) => {
//     const [number, setnumber] = useState(data.quantity)

//     useEffect(() => {
//         setnumber(data.quantity)
//     }, [data.quantity])

//     const add = () => {
//         setnumber(number + 1)
//         addToCart(data, number + 1)
//     }
//     const min = () => {
//         if (number > 0) {
//             setnumber(number - 1)
//             addToCart(data, number - 1)
//         }
//     }
//     return (
//         <div className="w-full bg-white p-3 rounded-xl flex items-center gap-3">
//             <div className="relative w-[140px] h-[100px] flex-shrink-0 rounded-xl overflow-hidden">
//                 <div className="text__14 px-3 py-1 rounded-full text-white bg-[#66C87B] absolute left-2 top-2">
//                     {data.discount}
//                 </div>
//                 <img src={data.img} className='w-full h-full object-cover' alt="" />
//             </div>
//             <div className="">
//                 <h4 className='text__18 font-medium mb-1'>{data.title}</h4>
//                 <p className='text__12 text-[#9CA4AB] clamp-2'>{data.desc}</p>

//                 <div className="mt-2 flex items-center justify-between">
//                     <h5 className='font-medium text__16'>
//                         ${data.price}
//                     </h5>
//                     <div className="flex items-center gap-2">
//                         {
//                             number > 0 ? <Fragment>
//                                 <img src="/images/Tab (1).svg" className='cursor-pointer' onClick={min} alt="" />
//                                 <div className="font-medium text__14 flex items-center justify-center w-[24px] h-[24px] rounded-full bg-[#F9F9F9]">
//                                     {number}
//                                 </div>
//                             </Fragment> : ""
//                         }

//                         <img src="/images/Tab.svg" className='cursor-pointer' onClick={add} alt="" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export const CardEvent = (props) => {
    const { setSelectedEvent } = useContextEvents();
    const percentage = (parseInt(props.data.quote.replace('$', '')) / MAX_QUOTE) * 100;
    
    const handleClick = () => {
        setSelectedEvent(props.data);
    };
    
    return (
        <NavLink 
            to="/detail/event"
            onClick={handleClick}
            className="w-full inline-block"
        >
            <div className="w-full relative overflow-hidden h-[186px] rounded-[16px]">
                <div className="flex items-center gap-1 font-medium text__14 px-3 py-1 rounded-full bg-Myellow absolute left-3 top-3">
                    <span>{props.data.category}</span>
                </div>
                <img src={props.data.img} className='w-full h-full overflow-hidden' alt="" />
            </div>
            <div className="mt-4 flex flex-col">
                <h5 className='font-medium text__16 line-clamp-1 h-[28px]'>{props.data.title}</h5>
                <div className="flex flex-col gap-2 w-full">
                    <div className="w-full h-2 bg-[#737373] rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-Myellow rounded-full" 
                            style={{ width: `${percentage}%` }}
                        />
                    </div>
                    <div className="flex justify-between text__12 text-[#171717]">
                        <p>{percentage}% of Budget</p>           
                        <p>{props.data.distance}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

// export const PriceListCard = (props) => {
//     const [toglePrice, settoglePrice] = useState("Monthly")
//     return (
//         <div className="w-full bg-white p-[1.5rem] rounded-[20px]">
//             <p className='font-medium text__20 text-[#793EF1] mb-2'>{props.data.type}</p>
//             <div className="flex items-end mb-1">
//                 <h5 className='font-medium text__48'>${toglePrice === "Monthly" ? props.data.monthly : props.data.yearly}</h5>
//                 <p className='font-medium text__18 mb-2'>/{toglePrice === "Monthly" ? "month" : "year"}</p>
//             </div>
//             <p className='font-medium 16 mb-3'>For new creators building their list</p>

//             <div className="w-full p-[4px] rounded-full bg-[#F5F5F5]">
//                 <div className="grid grid-cols-2 gap-[4px]">
//                     <div onClick={() => settoglePrice("Monthly")} className={"font-medium text__12 p-[4px] rounded-full cursor-pointer text-center " + (toglePrice === "Monthly" ? "bg-white text-Myellow" : "text-Mblack")}>
//                         Monthly
//                     </div>
//                     <div onClick={() => settoglePrice("Yearly")} className={"font-medium text__12 p-[4px] rounded-full cursor-pointer text-center " + (toglePrice === "Yearly" ? "bg-white text-Myellow" : "text-Mblack")}>
//                         Yearly
//                     </div>
//                 </div>
//             </div>

//             <hr className='!border-[#E5E5E5] w-full h-[1px] my-4' />

//             <ul className='flex gap-3 flex-wrap mb-10'>
//                 {
//                     props.data.plan.map((obj) => {
//                         return <li className='w-full'>
//                             <div className="flex items-center gap-2">
//                                 <CheckCircleIcon /> <span className='font-medium text__16'>{obj}</span>
//                             </div>
//                         </li>;
//                     })
//                 }
//             </ul>

//             <a href='#!' className="inline-block w-full">
//                 <div className={'inline-block w-full text-center cursor-pointer font-medium text__14 btnClass !px-[32px]  !border-Myellow bg-Myellow text-white'}>Select Plan</div>
//             </a>
//         </div>
//     )
// }

// export const CardTestimonial = (props) => {
//     return (
//         <Fragment>
//             <div className="w-full bg-white p-4 rounded-[20px]">
//                 <img src={"/images/tik.svg"} className='mb-3' alt="" />
//                 <h5 className='font-medium text__18 mb-2'>I was so grateful to have insurance when my car was totaled in an accident.</h5>
//                 <p className="text__16">
//                     The insurance company handled everything quickly and efficiently, and I was able to get a new car without having to worry about the cost.
//                 </p>

//                 <div className="my-3">
//                     <div className="inline-block">
//                         <div className="flex items-center gap-2 px-3 py-1 border border-solid !border-[#E5E5E5] rounded-full">
//                             <img src={"/images/star.svg"} alt="" />
//                             <span className='font-medium text__16'>5.0</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex items-center gap-2">
//                     <img src={"/images/Avatar.png"} className='w-[48px] h-[48px] rounded-full object-cover' alt="" />
//                     <div className="">
//                         <h5 className='font-medium text__18'>Skylar Siphron</h5>
//                         <p className='text__14'>Behance</p>
//                     </div>
//                 </div>
//             </div>
//         </Fragment>
//     )
// }

export const CardEventTestimonial = ({ review }) => {
    return (
        <Fragment>
            <div className="w-full bg-white p-4 rounded-[20px]">
                <img src={"https://bwwgddl6kxqlkkp1.public.blob.vercel-storage.com/images/tik-oe4Pngu6brpdKp0Ml3UtKOyFUnRD3O.svg"} className='mb-3' alt="" />
                <h5 className='font-medium text__18 mb-2'>{review.comment}</h5>

                <div className="my-3">
                    <div className="inline-block">
                        <div className="flex items-center gap-2 px-3 py-1 border border-solid !border-[#E5E5E5] rounded-full">
                            <img src={"https://bwwgddl6kxqlkkp1.public.blob.vercel-storage.com/images/star-RHPIajbLi0QDnvSlH6tZ4avIzyZIpv.svg"} alt="" />
                            <span className='font-medium text__16'>{review.stars}.0</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <img src={"https://bwwgddl6kxqlkkp1.public.blob.vercel-storage.com/images/Avatar-FbkaqVTy5drI1HWNs3Kc6l1uUfCMpF.png"} className='w-[48px] h-[48px] rounded-full object-cover' alt="" />
                    <div className="">
                        <h5 className='font-medium text__18'>{review.reviewer}</h5>
                        <p className='text__14'>{review.date}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}