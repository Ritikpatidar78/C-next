import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer p-3 d-flex flex-column flex-sm-column flex-xl-row'>
            <div className='information  w-100 w-lg-75 d-flex flex-row my-2'>
                <div className='one d-flex flex-column mx-5'>
                    <h1> <>Collections</> </h1>
                    <Link className='Link' to="#">Laptop</Link>
                    <Link className='Link' to="#">Keyboard</Link>
                    <Link className='Link' to="#">Mouse</Link>
                    <Link className='Link' to="#">Moniter</Link>
                    <Link className='Link' to="#">Speaker</Link>
                </div>
                <div className='one d-flex flex-column mx-2'>
                    <h1> <>Information</> </h1>
                    <Link className='Link' >FAQ's</Link>
                    <Link className='Link' >About us</Link>
                    <Link className='Link' >More.</Link>

                </div>
                <div className='one d-flex flex-column mx-2'>
                    <h1> <>Our Policy</> </h1>
                    <Link className='Link'>Shippig Policy</Link>
                    <Link className='Link'>Refund Policy</Link>
                    <Link className='Link'>Privacy Policy</Link>
                    <Link className='Link'>Terms of Service</Link>

                </div>
            </div>
            <div className='follow w-100 w-lg-25 d-flex sm-flex-column lg-flex-row mx-5 my-2'>
                <h1>Follow us....</h1>
                <Link className='Link m-3'><i class="bi bi-instagram"></i></Link>
                <Link className='Link m-3'><i class="bi bi-facebook"></i></Link>
                <Link className='Link m-3'><i class="bi bi-linkedin"></i></Link>
                {/* <h2 className='title'>Designed by Ritik patidar.</h2> */}
                
            </div>

        </div>
    )
}

export default Footer