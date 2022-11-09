import React from 'react'
import Destination from '../../Components/LandingPage/Destination'
import Managed from '../../Components/LandingPage/Managed'
import Navbar from "../../Components/Navbar/Navbar"
import Search from '../../Components/Search/Search'
const HomePage = () => {
  return (
    <div>
    <Navbar/>
    <Search />
    <Destination />
    <Managed />
    </div>
  )
}

export default HomePage