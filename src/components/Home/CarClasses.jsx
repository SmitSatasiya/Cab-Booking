import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import { Autoplay } from 'swiper/modules';

export const CarClasses = () => {
    return (
        <>
            <section className="bg-white">
                <div className="container car-classes">

                    <div className="container price-main-container d-flex">
                        <div className="title-box d-flex">

                            <h2 className="title">Car Classes and Rates</h2>
                            <a href="#" className="t-dec ">More
                                <svg class="icon-16" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}

                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                640: {
                                    spaceBetween: 40,
                                    slidesPerView: 2,
                                },
                                1024:{
                                    spaceBetween: 40,
                                    slidesPerView: 3,
                                    
                                }
                            }}
                            modules={[Autoplay]}
                            className="price-container"
                        >

                            <SwiperSlide className="price-box">
                                <div class="pricing d-flex">
                                    <div class="image-box">
                                        <img width={250} src="/images/cars/e-class.webp" alt="" />
                                    </div>
                                    <h3 class="pricing-title"><a href="#" className="t-dec">Economy</a></h3>
                                    <p class="pricing-text">A perfect choice for saving money and having a great ride.</p>
                                    <div class="pricing-price"><span class="pricing-value">$1,5</span><span class="pricing-postfix">/km</span></div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="price-box">
                                <div class="pricing d-flex">
                                    <div class="image-box">
                                        <img width={250} src="/images/cars/v-class.webp" alt="" />
                                    </div>
                                    <h3 class="pricing-title"><a href="#" className="t-dec">Standard</a></h3>
                                    <p class="pricing-text">Our standard service is the first port of call for the most of our clients.</p>
                                    <div class="pricing-price"><span class="pricing-value">$2,5</span><span class="pricing-postfix">/km</span></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="price-box">
                                <div class="pricing d-flex">
                                    <div class="image-box">
                                        <img width={250} src="/images/cars/eqs.webp" alt="" />
                                    </div>
                                    <h3 class="pricing-title"><a href="#" className="t-dec">Business</a></h3>
                                    <p class="pricing-text">If you need a corporate transfer, then this type of services is for you.</p>
                                    <div class="pricing-price"><span class="pricing-value">$3,5</span><span class="pricing-postfix">/km</span></div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="price-box">
                                <div class="pricing d-flex">
                                    <div class="image-box">
                                        <img width={250} src="/images/cars/suv-class.webp" alt="" />
                                    </div>
                                    <h3 class="pricing-title"><a href="#" className="t-dec">SUV</a></h3>
                                    <p class="pricing-text">SUV is great for interstate driving and distant transfers.</p>
                                    <div class="pricing-price"><span class="pricing-value">$5,5</span><span class="pricing-postfix">/km</span></div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="price-box">
                                <div class="pricing d-flex">
                                    <div class="image-box">
                                        <img width={250} src="/images/cars/suv.webp" alt="" />
                                    </div>
                                    <h3 class="pricing-title"><a href="#" className="t-dec">Van</a></h3>
                                    <p class="pricing-text">Van offers comfort as well as more space than any other modern taxi.</p>
                                    <div class="pricing-price"><span class="pricing-value">$6,5</span><span class="pricing-postfix">/km</span></div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>

                </div>
            </section>
        </>
    )
}