import React from 'react'
import { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <Fragment>
            <div className='w-full overflow-hidden min-h-screen bg-Mwhite relative grid grid-cols-1 md:grid-cols-2 grid-rows-1'>
                <div className='relative h-full'>
                    <Container className='h-full w-full flex items-center justify-center'>
                        <div className="w-full py-6 md:px-6 lg:px-10">
                            <Outlet />
                        </div>
                    </Container>
                </div>
                <div className='relative h-full bg-MsoftYellow hidden md:!block'>
                    <img src="./../images/001.svg" className='absolute left-0 top-0 w-full h-full object-cover' alt="" />
                </div>
            </div>
        </Fragment>
    )
}

export default AuthLayout