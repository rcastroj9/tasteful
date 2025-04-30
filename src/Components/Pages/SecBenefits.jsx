import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const SecBenefits = ({ title }) => {
    return (
        <Fragment>
            <section className='bg-[#F8F8F8]'>
                <Container>
                    <div className="mb-10 text-center">
                        <h3 className='mb-10 font-medium text__48'>{title ? title : "Benefits of market design"}</h3>
                    </div>
                    <Row className='gap-y-6'>
                        <Col md={4}>
                            <div className="w-full bg-white p-4 rounded-[24px] h-full">
                                <div className="inline-block w-[56px] sm:w-[72px] h-[56px] sm:h-[72px] flex items-center justify-center rounded-[20px] border border-solid !border-[#793EF1] bg-[#F8F8F8] mb-4">
                                    <img src={"/images/coffee.svg"} className='w-[32px] sm:w-auto' alt="" />
                                </div>
                                <h4 className='font-medium text__24 mb-2'>Efficiency</h4>
                                <p className='text__16'>Market design can help to ensure that electricity is produced and efficiently. This can lead to lower prices for consumers.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="w-full bg-white p-4 rounded-[24px] h-full">
                                <div className="inline-block w-[56px] sm:w-[72px] h-[56px] sm:h-[72px] flex items-center justify-center rounded-[20px] border border-solid !border-[#793EF1] bg-[#F8F8F8] mb-4">
                                    <img src={"/images/ranking.svg"} className='w-[32px] sm:w-auto' alt="" />
                                </div>
                                <h4 className='font-medium text__24 mb-2'>Excellence</h4>
                                <p className='text__16'>Market design can help to ensure that electricity is delivered reliably, this is important for businesses.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="w-full bg-white p-4 rounded-[24px] h-full">
                                <div className="inline-block w-[56px] sm:w-[72px] h-[56px] sm:h-[72px] flex items-center justify-center rounded-[20px] border border-solid !border-[#793EF1] bg-[#F8F8F8] mb-4">
                                    <img src={"/images/chart.svg"} className='w-[32px] sm:w-auto' alt="" />
                                </div>
                                <h4 className='font-medium text__24 mb-2'>Innovation</h4>
                                <p className='text__16'>Market design can give consumers more choice. This can lead to lower prices and better service.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}

export default SecBenefits