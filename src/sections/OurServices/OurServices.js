import React from 'react';
import FourthSection from "./FourthSection";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import FirstSection from "./firstSection"

function OurServices() {

  return (
    <div className='our_services'>
        <FirstSection/>
        <FourthSection/>
    </div>
  )
}

export default OurServices;