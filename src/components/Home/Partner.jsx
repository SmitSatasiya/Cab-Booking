import React from 'react'
import useOnScreen from '../Hooks/Animation';

const Partner = () => {
    const [sectionRef, isVisible] = useOnScreen(0.3);

    return (
        <>
            <div className="main-partner">
                <div className="container-sub">
                    <div className="sub-partner">
                        <div className="partner-heading">
                            <h3 ref={sectionRef} className={`${isVisible ? 'fadeInUp' : ''}`}>The partners who sell<br />our products</h3>
                        </div>
                        <div className='partner-content'>
                            <ul ref={sectionRef} className={`partner-img ${isVisible ? 'fadeInUp' : ''}`} >
                                <li><img alt="luxride" src="public\images\slider\logo\air.svg" width={130} height={27} /></li>
                                <li><img alt="luxride" src="public\images\slider\logo\eb.svg" width={130} height={27} /></li>
                                <li><img alt="luxride" src="public\images\slider\logo\nba.svg" width={130} height={27} /></li>
                                <li><img alt="luxride" src="public\images\slider\logo\nla.svg" width={130} height={27} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partner