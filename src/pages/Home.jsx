import React from 'react'
import Announcements from '../components/Announcements'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Announcements />
            <Products />
        </div>
    )
}

export default Home
