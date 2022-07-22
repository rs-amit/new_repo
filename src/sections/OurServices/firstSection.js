import React from 'react';
import { makeStyles } from "@mui/styles";
import img from "../../Assert/blueDog2.jpeg";
import arrowImg from "../../Assert/FirstSectionArrowImg.svg";
import { maxHeight, width } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const useStyles = makeStyles({
    containerWrap:{
        maxWidth:'95%',
        margin:'auto',
        position:'relative'
    },
    coverImg:{
        width:'100%',
        maxHeight:'100vh',  
        borderRadius:'10px', 
    },
    paragraph:{
        fontFamily:'sans-serif',
        position:'absolute',
        top:'0px',
        left:'60px',
        maxWidth:'606px',
        fontSize:'60px',
        color:'white',
        "@media (max-width: 1050px)": {
            left:'20px',
            fontSize:'25px',
            maxWidth:'306px',
        },
        "@media (max-width: 500px)": {
            top:'10px',
            left:'20px',
            fontSize:'12px',
            maxWidth:'133px',
        },

    },
    btnwrap:{
        position:'absolute',
        bottom:'40px',
        right:'30px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'13px 25px',
        borderRadius:'5px',
        backgroundColor:'#013773',
        color:'white',
        fontFamily:'sans-serif',
        "@media (max-width: 800px)": {
            display:'none',
        },
    },
    scheduleBtn:{
        margin:'0 10px 0 0',
        fontSize:"19px",
    }
})

function FirstSection() {

    const classes = useStyles()

  return (
    <div className={classes.container}>
        <div className={classes.containerWrap}>
            <img
             src={img}
             className={classes.coverImg}/>
            <div className={classes.title}>
                <p className={classes.paragraph}>An Animal <strong>Hospital</strong> for All Your <strong>Pet’s Needs</strong></p>
                <div className={classes.btnwrap}>
                    <div className={classes.scheduleBtn}>Schedule a Visit</div>
                    <ArrowForwardIcon/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default FirstSection;