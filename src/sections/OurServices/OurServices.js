import React from 'react';
import FourthSection from "./FourthSection";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles({
    
})

// const MobileView = styled("div")(
//     ({ theme, laptopbannerimgheight, mobilebannerimgheight }) => ({
//       fontFamily: "Work Sans",
//       height: laptopbannerimgheight || 570,
//       width: "100%",
//       [theme.breakpoints.down("sm")]: {
//         height: mobilebannerimgheight || 300,
//       },
//     })
// );



function OurServices() {

    const classes = useStyles()

  return (
    <div className='our_services'>
        <FourthSection/>
    </div>
  )
}

export default OurServices;