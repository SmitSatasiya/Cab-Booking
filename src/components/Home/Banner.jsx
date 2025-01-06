import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
export const Banner = () => {
    const getDate = () => {
        const date = new Date().toUTCString().slice(5, 16);

        return (date)
    }

    return (<>
        <section className='section banner-container'>
            <Swiper
                cssMode={true}
                mousewheel={true}
                keyboard={true}
                modules={[Mousewheel, Keyboard]}
                className="banner-swiper"
            >
                <SwiperSlide className='banner-slide'>
                    <div className="img-box">

                        <img className='banner-img' src="/images/background/banner.png" alt="" />
                    </div>
                    <div className="container d-flex">
                        <div className="banner-content">

                            <div className="title">
                                <p>Embark on an Unforgettable Journey</p>
                                <h1 >Discover the <br /> World with Our Expert Guides</h1>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='banner-slide'>

                    <div className="img-box">

                        <img className='banner-img' src="/images/background/banner2.png" alt="" />
                    </div>
                    <div className="container banner-content d-flex">
                        <div className="title">
                            <h1 >Find Your <br /> Perfect Escape</h1>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide className='banner-slide'>

                    <div className="img-box">

                        <img className='banner-img' src="/images/background/banner3.png" alt="" />
                    </div>
                    <div className="container banner-content d-flex">
                        <div className="title">
                            <h1 >Travel in <br /> Style and Comfort</h1>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='banner-slide'>

                    <div className="img-box">

                        <img className='banner-img' src="/images/background/banner4.png" alt="" />
                    </div>
                    <div className="container banner-content d-flex">
                        <div className="title">
                            <h1>Relex in <br />the World's Most Beautiful Locations</h1>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='banner-slide'>

                    <div className="img-box">

                        <img className='banner-img' src="/images/background/banner5.png" alt="" />
                    </div>
                    <div className="container banner-content d-flex">
                        <div className="title">
                            <h1>Culinary Tours <br />to Excite Your Palate</h1>
                        </div>
                    </div>

                </SwiperSlide>
                <div className="form">
                    <form action="">
                        <div className="input-box">
                            <div className="img-box">
                                <img src="/images/icons/calendar.svg" alt="" />
                            </div>
                            <div className="info">
                                <label htmlFor="date" >Date</label>
                                <input type="date" onLoad={getDate} />
                            </div>
                        </div>

                        <div className="input-box">
                            <div className="img-box">
                                <img src="/images/icons/time.svg" alt="" />
                            </div>
                            <div className="info">
                                <label htmlFor="time">Time</label>
                                <input type="time" />
                            </div>
                        </div>

                        <div className="input-box">
                            <div className="img-box">
                                <img src="/images/icons/from.svg" alt="" />
                            </div>
                            <div className="info">
                                <label htmlFor="from">From</label>
                                <input type="text" placeholder='From' />
                            </div>
                        </div>

                        <div className="input-box">
                            <div className="img-box">
                                <img src="/images/icons/to.svg" alt="" />
                            </div>
                            <div className="info">
                                <label htmlFor="to">To</label>
                                <input type="text" placeholder='To' />
                            </div>
                        </div>
                        <button className='btn btn-search' >
                            <img src="/images/icons/search.svg" alt="search" loading='lazy' />
                            Search
                        </button>
                    </form>
                </div>
            </Swiper>

            {/* <div className="bottom-right">
                            <form action="" className='d-flex'>
                                <div className="input d-flex">
                                    <img className='location' height={30} width={20} src="/images/icons/location.png" alt="" />
                                    <input type="text" placeholder='From' />
                                </div>
                                <div className="input d-flex">
                                    <img className='location' height={30} width={20} src="/images/icons/location.png" alt="" />
                                    <input type="text" placeholder='To' />
                                </div>
                                <div className="input d-flex">
                                    <img height={22} width={22} src="/images/icons/call.png" alt="" />
                                    <input type="text" placeholder='Phone Number' />

                                </div>
                                <div className="input d-flex">
                                    <img height={25} width={25} src="/images/icons/time.png" alt="" />
                                    <input type="time" placeholder='Time' />
                                </div>

                                <div className="input d-flex">
                                    <img height={25} width={25} src="/images/icons/car.png" alt="" />
                                    <input type="text" placeholder='Car Type' />
                                </div>
                                <div className="input d-flex">
                                    <img className='payment' height={20} width={20} src="/images/icons/payment.png" alt="" />
                                    <input type="text" placeholder='Payment' />
                                </div>
                                <button className='btn book-btn'> Order taxi now</button>
                            </form>
                        </div> */}

        </section>

    </>)
}
