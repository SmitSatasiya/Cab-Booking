import React from "react";
export const AboutComponet = () => {
    return (
        <section className="">
            <div className="container">

                <div className="about">
                    <div className="about-sub">
                        <h1>Make Your Trip Your Way With Us</h1>
                        <div className="about-services">
                            <div className="about-service">
                                <div className="img">

                                <img src="/images/icons/safe.svg" alt="Safety First" />
                                </div>
                                <h2>Safety First</h2>
                                <p>
                                    Both you and your shipments will travel with professional drivers.
                                    Always with the highest quality standards.
                                </p>
                            </div>
                            <div className="about-service">
                                <div className="img">

                                <img src="/images/icons/price.svg" alt="Prices With No Surprises" />
                                </div>
                                <h2>Prices With No Surprises</h2>
                                <p>
                                    Both you and your shipments will travel with professional drivers.
                                    Always with the highest quality standards.
                                </p>
                            </div>
                            <div className="about-service">
                                <div className="img">

                                <img src="/images/icons/vehicle.svg" alt="Private Travel Solutions" />
                                </div>
                                <h2>Private Travel Solutions</h2>
                                <p>
                                    Both you and your shipments will travel with professional drivers.
                                    Always with the highest quality standards.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="numbers">
                        <div className="bg-img">
                            <img src="/images/background/bg-showcase.png" alt="" />
                        </div>
                        <h2>
                            Showcase some <br />
                            impressive numbers.
                        </h2>
                        <div>
                            <h2>285</h2>
                            <p>Vehicles</p>
                        </div>
                        <div>
                            <h2>97</h2>
                            <p>Awards</p>
                        </div>
                        <div>
                            <h2>13K</h2>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

