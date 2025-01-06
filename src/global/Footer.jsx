import React from 'react'
import useOnScreen from '../components/Hooks/Animation';

export const Footer = () => {
    const [sectionRef, isVisible] = useOnScreen(0.3);

    return (
        <>
            <section className='section bg-black main-footer'>
                <div className="container-sub">
                    <div className="footer">
                        <div ref={sectionRef} className={`footer-top d-flex wrap ${isVisible ? 'fadeInUp' : ''}`}>
                            <div className="logo d-flex align-center white">
                                <div className="img-box">
                                    <img src="/images/icons/white_on_trans.png" alt="logo" loading='lazy' />
                                </div>
                                <h2>Ride Rush</h2>

                                <a className='t-dec call-box d-flex align-center' href="#">

                                    <div className="svg-box">
                                        <img src="/images/icons/call.svg" alt="call" loading='lazy' />
                                    </div>
                                    <h4>+0261 3112005</h4>
                                </a>
                            </div>
                            <div className="social-media align-center  d-flex">
                                <h1 className='white'>Follow Us</h1>
                                <div className="img-box">
                                    <a href="#">

                                        <img src="/images/icons/fb.svg" alt="" />
                                    </a>
                                </div>

                                <div className="img-box">
                                    <a href="#">

                                        <img src="/images/icons/tw.svg" alt="" />
                                    </a>
                                </div>

                                <div className="img-box">
                                    <a href="#">

                                        <img src="/images/icons/instagram.svg" alt="" />
                                    </a>
                                </div>

                                <div className="img-box">
                                    <a href="#">

                                        <img src="/images/icons/linkedin.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div ref={sectionRef} className={`footer-middle d-flex wrap ${isVisible ? 'fadeInUp' : ''}`}>
                            <div className="list-box">
                                <div className="list-title">
                                    <h4 className='white'>Company</h4>
                                </div>
                                <div className="list-body d-flex">
                                    <a href="#" className='t-dec t-dec-hover'>About Us</a>
                                    <a href="#" className='t-dec t-dec-hover'>Our offerings</a>
                                    <a href="#" className='t-dec t-dec-hover'>Newsroom</a>
                                    <a href="#" className='t-dec t-dec-hover'>Investors</a>
                                    <a href="#" className='t-dec t-dec-hover'>Blog</a>
                                    <a href="#" className='t-dec t-dec-hover'>Careers</a>
                                    <a href="#" className='t-dec t-dec-hover'>Gift cards</a>
                                </div>
                            </div>
                            <div className="list-box">
                                <div className="list-title">
                                    <h4 className='white'>Top cities</h4>
                                </div>
                                <div className="list-body d-flex">
                                    <a href="#" className='t-dec t-dec-hover'>New York</a>
                                    <a href="#" className='t-dec t-dec-hover'>London</a>
                                    <a href="#" className='t-dec t-dec-hover'>Berlin</a>
                                    <a href="#" className='t-dec t-dec-hover'>Los Angeles</a>
                                    <a href="#" className='t-dec t-dec-hover'>Paris</a>
                                </div>
                            </div>
                            <div className="list-box">
                                <div className="list-title">
                                    <h4 className='white'>Explore</h4>
                                </div>
                                <div className="list-body d-flex">
                                    <a href="#" className='t-dec t-dec-hover'>Intercity rides</a>
                                    <a href="#" className='t-dec t-dec-hover'>Limousine service</a>
                                    <a href="#" className='t-dec t-dec-hover'>Chauffeur service</a>
                                    <a href="#" className='t-dec t-dec-hover'>Private car service</a>
                                    <a href="#" className='t-dec t-dec-hover'>Ground transportation</a>
                                    <a href="#" className='t-dec t-dec-hover'>Airport transfer</a>
                                </div>
                            </div>
                            <div className="list-box">
                                <div className="list-title">
                                    <h4 className='white'>Classes</h4>
                                </div>
                                <div className="list-body d-flex">
                                    <a href="#" className='t-dec t-dec-hover'>Business</a>
                                    <a href="#" className='t-dec t-dec-hover'>First</a>
                                    <a href="#" className='t-dec t-dec-hover'>XL</a>
                                    <a href="#" className='t-dec t-dec-hover'>Assistant</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom d-flex wrap">
                            <div className="copy-right white">
                                <p>&copy 2024 Ride Rush</p>
                            </div>
                            <div className="menu-bottom">
                                <a href="#" className='t-dec '>Trems</a>
                                <a href="#" className='t-dec '>Privacy policy </a>
                                <a href="#" className='t-dec '>Legal notice</a>
                                <a href="#" className='t-dec '>Accessibility </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}