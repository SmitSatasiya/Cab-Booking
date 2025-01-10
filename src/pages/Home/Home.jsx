import React from 'react'
import '../../components/Home/Home.css'
import { Banner } from '../../components/Home/Banner'
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
            <Work />
            <AboutComponet />
            <Service />
            <Question />
        </>
    )
}