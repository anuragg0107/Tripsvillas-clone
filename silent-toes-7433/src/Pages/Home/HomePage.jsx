import React from 'react'
import Destination from '../../Components/LandingPage/Destination'
import Managed from '../../Components/LandingPage/Managed'
import Navbar from "../../Components/Navbar/Navbar"
import Search from '../../Components/LandingPage/Search'
import Vacation from '../../Components/LandingPage/Vacation'
import Footer from '../../Components/LandingPage/Footer'
const HomePage = () => {
  return (
    <div>
    <Navbar/>
    <Search/>
    <Destination />
    <Managed />
    <Vacation />
    <Footer />
    </div>
  )
}

export default HomePage