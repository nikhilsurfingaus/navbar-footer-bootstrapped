import React from 'react'
import image from '../assets/images/booty.png'

function Navbar() {
  return (
    <>
    <nav className="navbar py-4 sticky-top navbar-expand-sm navbar-dark text-white" style={{background:"#101522"}}>
        <div className="container">
            <a href='/#' className="navbar-brand mb-0 h1">
                <img src={image}
                width="40" height="30" alt="log"
                className='d-inline block align-top text-white'
                />
                {" "}BOOSTRAP
            </a>
            <button className="navbar-toggler" type='button' 
            data-bs-toggle='collapse' data-bs-target='#navbarNav'
            aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id='navbarNav'>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a href="/home" className="nav-link active">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="/info" data-bs-target='dropdown' aria-expanded='false'
                        role='button' id='navbarDrop' className="nav-link">Information</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="/#" role='button' id='navbarDrop' data-bs-toggle='dropdown' aria-expanded='false'
                         className="nav-link dropdown-toggle">Products</a>
                        <ul className='dropdown-menu'  aria-labelledby='navbarDropdown' style={{background:"#8c27f5"}}>
                            <li>
                                <a href="/#" className='dropdown-item text-white'>Feature 1</a>
                            </li>
                            <li>
                                <a href="/#" className='dropdown-item text-white '>Feature 2</a>
                            </li>
                            <li> 
                                <a href="/#" className='dropdown-item text-white'>Feature 3</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="/#" role='button' id='navbarDrop' className="nav-link">About</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>

    
    </>
  )
}

export default Navbar