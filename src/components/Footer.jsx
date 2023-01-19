import React from 'react'

function Footer() {
  return (
    <>
    <footer style={{background:"#8c27f5"}} className='text-dark pt-5 pb-4'>
        <div className="container text-center text-md-left">
            <div className="row text-center text-md-left">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 style={{color:"#26142a"}} className='text-uppercase mb-4 font-weight-bold'>About Us</h5>
                    <p className='text-light'>
                    Bootstrap includes a wide range of shorthand responsive margin and padding utility 
                    classes to modify an elements appearance.
                    </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 style={{color:"#26142a"}} className='text-uppercase mb-4 font-weight-bold'>Let Us Help</h5>
                    <hr className='mb-4'/>
                    <p>
                        <a href="/#" className='text-light' style={{textDecoration:"none"}}>Your Account</a>
                    </p>
                    <p>
                        <a href="/#" className='text-light' style={{textDecoration:"none"}}>Your Orders</a>
                    </p>
                    <p>
                        <a href="/#" className='text-light' style={{textDecoration:"none"}}>Manage Your Content & Devices</a>
                    </p>
                    <p>
                        <a href="/#" className='text-light' style={{textDecoration:"none"}}>Help</a>
                    </p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 style={{color:"#26142a"}} className='text-uppercase mb-4 font-weight-bold'>Make Money</h5>
                    <hr className='mb-4'/>
                    <p>
                        <a href="/#" className='text-light' style={{textDecoration:"none"}}>Sell Products On Our Site</a>
                    </p>
                    <p>
                        <a href="/#" className='text-light' style={{textDecoration:"none"}}>Advertise Your Products</a>
                    </p>
                    <p>
                        <a href="/#" className='text-light' style={{textDecoration:"none"}}>Become An Affiliate</a>
                    </p>
                    <p>
                        <a href="/#" className='text-light' style={{textDecoration:"none"}}>Self-Publush</a>
                    </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 style={{color:"#26142a"}} className='text-uppercase mb-4 font-weight-bold'>Contact</h5>
                    <hr className='mb-4'/>
                    <p className='text-light'>
                        <li className="text-light fas fa-home mr-3"></li>{" "} New York NY 2333, US
                    </p>
                    <p className='text-light'>
                        <li className="text-light fas fa-envelope mr-3"> </li>{" "} nikhilsurfingauz@gmail.com
                    </p>
                    <p className='text-light'>
                        <li className="text-light fas fa-phone mr-3"></li>{" "} +12 42069
                    </p>
                    <p className='text-light'>
                        <li className="text-light fas fa-print mr-3"></li>{" "} +012 462841
                    </p>
                </div>
                <hr className="mb-4" />
                <div className="row d-flex justify-content-center">
                    <div>
                        <p className='text-light'>
                            Copyright 2023 All Rights Reserved By : 
                            <a href="/#" style={{textDecoration:"none"}}>
                                <strong className="text-light text-info"> ©WaveFlightSimulations</strong>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="text-center">
                        <ul className="list-inline-item">
                            <li className="list-inline-item">
                                <a href="/#" className='text-light'><li className="fab fa-facebook"></li></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/#" className='text-light'><li className="fab fa-twitter"></li></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/#" className='text-light'><li className="fab fa-linkedin"></li></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/#" className='text-light'><li className="fab fa-github"></li></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/#" className='text-light'><li className="fab fa-instagram"></li></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/#" className='text-light'><li className="fab fa-youtube"></li></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer