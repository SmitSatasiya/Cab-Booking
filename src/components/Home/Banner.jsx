import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Mousewheel, Keyboard } from 'swiper/modules';

export const Banner = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [formattedDate, setFormattedDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    // Initialize with current date and time
    useEffect(() => {
        const now = new Date();

        const isoDate = now.toISOString().slice(0, 10); // For date input (YYYY-MM-DD)
        const displayDate = new Intl.DateTimeFormat('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
        }).format(now); // For display (March 10, 2025)

        const formattedTime = now.toTimeString().slice(0, 5); // Format as HH:MM

        setCurrentDate(isoDate);
        setFormattedDate(displayDate);
        setCurrentTime(formattedTime);
    }, []);

    // Handlers for user input
    const handleDateChange = (e) => {
        setCurrentDate(e.target.value); // Update date value
    };

    const handleTimeChange = (e) => {
        setCurrentTime(e.target.value); // Update time value
    };

    return (
        <section className="section banner-container">
            <Swiper
                cssMode={true}
                mousewheel={true}
                keyboard={true}
                modules={[Mousewheel, Keyboard]}
                className="banner-swiper"
            >
                <SwiperSlide className="banner-slide">
                    <div className="img-box">
                        <img
                            className="banner-img"
                            src="/images/background/banner.png"
                            alt=""
                        />
                    </div>
                    <div className="container d-flex">
                        <div className="banner-content">
                            <div className="title">
                                <p>Embark on an Unforgettable Journey</p>
                                <h1>Discover the <br /> World with Our Expert Guides</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Other slides */}
                <div className="form">
                    <form>
                        {/* Editable Date Input */}
                        <div className="input-box">
                            <div className="img-box">
                                <img src="/images/icons/calendar.svg" alt="" />
                            </div>
                            <div className="info">
                                <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    value={currentDate} // Controlled input in YYYY-MM-DD format
                                    onChange={handleDateChange} // Handle manual updates
                                />
                            </div>
                        </div>

                        {/* Editable Time Input */}
                        <div className="input-box">
                            <div className="img-box">
                                <img src="/images/icons/time.svg" alt="" />
                            </div>
                            <div className="info">
                                <label htmlFor="time">Time</label>
                                <input
                                    type="time"
                                    id="time"
                                    value={currentTime} // Controlled input
                                    onChange={handleTimeChange} // Handle manual updates
                                />
                            </div>
                        </div>

                        {/* Other inputs */}
                        <div className="input-box">
                            <div className="img-box">
                                <img src="/images/icons/from.svg" alt="" />
                            </div>
                            <div className="info">
                                <label htmlFor="from">From</label>
                                <input type="text" placeholder="From" />
                            </div>
                        </div>

                        <div className="input-box">
                            <div className="img-box">
                                <img src="/images/icons/to.svg" alt="" />
                            </div>
                            <div className="info">
                                <label htmlFor="to">To</label>
                                <input type="text" placeholder="To" />
                            </div>
                        </div>
                        <button className="btn btn-search">
                            <img
                                src="/images/icons/search.svg"
                                alt="search"
                                loading="lazy"
                            />
                            Search
                        </button>
                    </form>
                </div>
            </Swiper>
        </section>
    );
};
