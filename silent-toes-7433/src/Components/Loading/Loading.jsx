import React from 'react'
import {PointSpreadLoading} from "react-loading";
import {FiSettings} from "react-icons/fi";

const Loading = () => {
  return (
    <>
    <h1>
         <FiSettings />
    </h1>
    <h1>
    <PointSpreadLoading />
    </h1>
   
    </>
  )
}

export default Loading