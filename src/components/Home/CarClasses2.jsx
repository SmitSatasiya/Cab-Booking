import React from 'react'

export const CarClasses2 = () => {
    return (<>
        <section className="bg-white border-top mt-70">
            <div className="container car-classes">
                <div className="title-box d-flex">
                    <h2 className="title">Car Classes and Rates</h2>
                    
                </div>
                <div className="car-boxs d-flex wrap">
                    <div className="car-box">
                        <div class="image-box">
                            <img width={250} src="/images/cars/e-class.webp" alt="" />
                        </div>
                        <h3 class="pricing-title"><a href="#" className="t-dec">Economy</a></h3>
                        <p class="pricing-text">A perfect choice for saving money and having a great ride.</p>
                        <div class="pricing-price"><span class="pricing-value">$1,5</span><span class="pricing-postfix">/km</span></div>
                    </div>

                    <div class="car-box">
                        <div class="image-box">
                            <img width={250} src="/images/cars/v-class.webp" alt="" />
                        </div>
                        <h3 class="pricing-title"><a href="#" className="t-dec">Standard</a></h3>
                        <p class="pricing-text">Our standard service is the first port of call for the most of our clients.</p>
                        <div class="pricing-price"><span class="pricing-value">$2,5</span><span class="pricing-postfix">/km</span></div>
                    </div>


                    <div class="car-box">
                        <div class="image-box">
                            <img width={250} src="/images/cars/eqs.webp" alt="" />
                        </div>
                        <h3 class="pricing-title"><a href="#" className="t-dec">Business</a></h3>
                        <p class="pricing-text">If you need a corporate transfer, then this type of services is for you.</p>
                        <div class="pricing-price"><span class="pricing-value">$3,5</span><span class="pricing-postfix">/km</span></div>
                    </div>


                    <div class="car-box">
                        <div class="image-box">
                            <img width={250} src="/images/cars/suv-class.webp" alt="" />
                        </div>
                        <h3 class="pricing-title"><a href="#" className="t-dec">SUV</a></h3>
                        <p class="pricing-text">SUV is great for interstate driving and distant transfers.</p>
                        <div class="pricing-price"><span class="pricing-value">$5,5</span><span class="pricing-postfix">/km</span></div>
                    </div>



                    <div class="car-box">
                        <div class="image-box">
                            <img width={250} src="/images/cars/suv.webp" alt="" />
                        </div>
                        <h3 class="pricing-title"><a href="#" className="t-dec">Van</a></h3>
                        <p class="pricing-text">Van offers comfort as well as more space than any other modern taxi.</p>
                        <div class="pricing-price"><span class="pricing-value">$6,5</span><span class="pricing-postfix">/km</span></div>
                    </div>


                </div>
            </div>
        </section>
    </>)
}