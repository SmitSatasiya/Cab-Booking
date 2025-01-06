import React from 'react'
import '../../components/Home/Home.css'
import { Banner } from '../../components/Home/Banner'
import { CarClasses2 } from '../../components/Home/CarClasses2'
import { Work } from '../../components/Home/Work'
import { Service } from '../../components/Home/Services'
import { AboutComponet } from '../../components/Home/AboutComponet'
import Question from '../../components/Home/Question'
import Partner from '../../components/Home/Partner'

export const Home = () => {
    return (
        <>
            <Banner />
            <Partner />
            <CarClasses2 />
            <Work />
            <AboutComponet />
            <Service />
            <Question />
        </>
    )
}