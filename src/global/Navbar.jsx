import React from 'react'
export const Navbar = () => {
    const handleToggle = () => {
        const nav= document.getElementById('nav-list');
        if(nav.classList[2] == "d-block"){
            nav.classList.remove('d-block');
        }
        else{
            nav.classList.add('d-block');
        }
    }
    return (
        <header class="section  bg-black">
            <div className="container">
                <div className="navbar d-flex">
                    <div className="logo d-flex align-center white">
                        <div className="img-box">
                            <img src="/images/icons/white_on_trans.png" alt="logo" loading='lazy' />
                        </div>
                        <h2>Ride Rush</h2>

                    </div>
                    <nav id='nav-list' className='nav d-flex align-center'>
                        <ul className='d-flex align-center'>
                            <li>
                                <a className='active t-dec' href="#">Home</a>
                            </li>
                            <li>
                                <a className='t-dec' href="#">Services</a>
                            </li>
                            <li>
                                <a className='t-dec' href="#">About</a>
                            </li>
                            <li>
                                <a className='t-dec' href="#">Reviews</a>
                            </li>
                            <li>
                                <a className='t-dec' href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="profile d-flex align-center">
                        <a className='t-dec call-box d-flex align-center' href="#">

                            <div className="svg-box">
                                <img src="/images/icons/call.svg" alt="call" loading='lazy' />
                            </div>
                            <h4>+0261 3112005</h4>
                        </a>
                        <div className="user-profile">
                            <div className="img-box">
                                <img src="/images/background/profile.webp" alt="profile" loading='lazy' />
                            </div>
                        </div>
                        <div className="login-container d-flex align-center">
                            <div className="login">
                                <a href="#" className='btn btn-default t-dec'>
                                    Log In
                                </a>
                            </div>
                            <div className="registration">
                                <a href='#' className='btn-white btn t-dec'>
                                    Sign Up
                                </a>
                            </div>
                        </div>
                        <div onClick={handleToggle} id='toggle' className="toggle-box">
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}