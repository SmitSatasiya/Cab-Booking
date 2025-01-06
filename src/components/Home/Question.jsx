import React, { useState } from 'react';

const Question = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionData = [
        {
            id: 1,
            title: 'How do I create an account?',
            content: 'To create an account, click on the Sign-Up button on the homepage and fill in your details. Once you submit the form, verify your email, and your account will be created.',
        },
        {
            id: 2,
            title: 'How do I earn Easy Ride Rewards points?',
            content: 'You can earn Easy Ride Rewards points by booking rides through our app or referring friends to join. Each completed ride and referral adds points to your account automatically.',
        },
        {
            id: 3,
            title: 'How can I add my credit card on the app for payments?',
            content: 'To add your credit card, go to the "Payment Methods" section in the app settings and select "Add Card". Enter your card details, save them, and youre ready to use it for payments.',
        },
        {
            id: 4,
            title: 'How do I become a Captain?',
            content: 'To become a Captain, sign up through our app or website and complete the registration process. Submit the required documents, attend the onboarding session, and start earning by driving with us.',
        },
        {
            id: 5,
            title: 'Where can I get more information, support or make a claim?',
            content: 'For more information, support, or to make a claim, visit the "Help Center" in our app or website. You can also contact our support team directly via chat or email for assistance.',
        },
    ];

    // Toggle accordion open/close
    const toggleAccordion = (id) => {
        if (activeAccordion === id) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(id);
        }
    };

    return (
        <div className="main-question">
            <div className="container-sub">
                <div className="box-ques">
                    <div className="ques-haeder">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="ques-body">
                        <div className="accordion">
                            {accordionData.map((item) => (
                                <div key={item.id} className="accordion-item">
                                    <h5 className="accordion-header">
                                        <button
                                            type="button"
                                            className={`accordion-button ${activeAccordion === item.id ? '' : 'collapsed'}`}
                                            onClick={() => toggleAccordion(item.id)}
                                        >
                                            {item.title}
                                        </button>
                                    </h5>
                                    <div
                                        className={`accordion-body ${activeAccordion === item.id ? 'open' : 'closed'}`}
                                        style={{
                                            display: activeAccordion === item.id ? 'block' : 'none',
                                        }}
                                    >
                                        {item.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
