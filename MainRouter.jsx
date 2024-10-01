// MainRouter.jsx, Aabeed Ismail, 301457580, 2024-09-29

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/components/Home'
import About from './src/components/About'
import Projects from './src/components/Projects'
import Services from './src/components/Services'
import Contact from './src/components/Contact'
import Layout from './src/components/Layout'

const MainRouter = () => {
    return (
        <div>
            <Layout/>
            <Routes>

                <Route exact path="/" element = {<Home />} />
                <Route exact path="/About" element = {<About />} />
                <Route exact path="/Projects" element = {<Projects />} />
                <Route exact path="/Services" element = {<Services />} />
                <Route exact path="/Contact" element = {<Contact />} />

            </Routes>
        </div>
    )
}
export default MainRouter