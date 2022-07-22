import React, { useState,useEffect } from 'react';
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./../../guidance_dog.webp";
import img2 from "./../../guidance_cat.webp";
import img3 from "./../../guidance_dog2.webp";
import img4 from "./../../blog left side .webp";
import img5 from "../../Assert/dog1.jpeg"
import img6 from "../../Assert/dog2.jpeg"

import arrowImg1 from "../../Assert/arrowImg1.svg"
import arrowImg2 from "../../Assert/arrowImg2.svg"
import { border, borderRadius, display, margin, padding, width } from '@mui/system';


const useStyles = makeStyles({
    slideContainer: {
        maxWidth: '80%',
        margin: 'auto',
        "@media (max-width: 1000px)": {
            maxWidth: '90%', 
        },
    },
    img: {
        minHeight: '250px',
        fitContent: 'cover',
        transform: 'scale(0.5)',
        borderRadius: "50%",
        opacity: '8',
        "@media (max-width: 1225px)": {
            minHeight: '200px',
        },
        "@media (max-width: 1000px)": {
            minHeight: '175px',
        },
        "@media (max-width: 800px)": {
            minHeight: '155px',
        },
        "@media (max-width: 700px)": {
            minHeight: '135px',
        },
        "@media (max-width: 500px)": {
            minHeight: '100px',
            transform: 'scale(0.6)',
        },
        "@media (max-width: 450px)": {
            minHeight: '80px',
        },
        "@media (max-width: 350px)": {
            minHeight: '60px',
        },


    },
    imgActive: {
        minHeight: '250px',
        fitContent: 'content',
        transform: 'scale(0.8)',
        opacity: '10',
        borderRadius: "50%",
        "@media (max-width: 1225px)": {
            minHeight: '200px',
        },
        "@media (max-width: 1000px)": {
            minHeight: '175px',
        },
        "@media (max-width: 800px)": {
            minHeight: '155px',
        },
        "@media (max-width: 700px)": {
            minHeight: '135px',
        },
        "@media (max-width: 500px)": {
            minHeight: '100px',
            transform: 'scale(0.9)',
        },
        "@media (max-width: 450px)": {
            minHeight: '80px',
        },
        "@media (max-width: 350px)": {
            minHeight: '60px',
        },

    },
    mainTitle: {
        fontSize: "35px",
        margin: '5px 0',
        "@media (max-width: 1000px)": {
            fontSize:'30px'
        },
        "@media (max-width: 500px)": {
            fontSize:'25px'
        },
    },
    titleStrong: {
        fontWeight: "700",
        color: "#013773",
        display: 'inline',
    },
    next: {
        width: 'fit-content',
        cursor: 'pointer',
        position: 'absolute',
        right: '-20px',
        top: '45%',
        "@media (max-width: 1225px)": {
            top: '42%',
        },
        "@media (max-width: 700px)": {
            top: '40%',
        },
        "@media (max-width: 500px)": {
            top: '38%',
        },
        "@media (max-width: 350px)": {
            top: '35%',
        },

    },
    prev: {
        width: 'fit-content',
        top: '40%',
        cursor: 'pointer',
        position: 'absolute',
        left: '-20px',
        top: '45%',
        "@media (max-width: 1225px)": {
            top: '42%',
        },
        "@media (max-width: 700px)": {
            top: '40%',
        },
        "@media (max-width: 500px)": {
            top: '38%',
        },
        "@media (max-width: 350px)": {
            top: '32%',
        },
    },
    scrolInfo: {
        fontSize: '24px',
        margin:'0 0 10px 0',
        "@media (max-width: 500px)": {
            fontSize: '16px',
        },
    },
    scrolhead:{
        fontSize:'30px',
        margin:'3px',
        "@media (max-width: 500px)": {
            fontSize: '14px',
        },
    },
    scrolSnap:{
        fontSize:'30px',
        "@media (max-width: 500px)": {
            fontSize: '12px',
        },

    },
    arrowImg:{
        width:'25px',
        "@media (max-width: 700px)": {
            width:'20px',
        },
        "@media (max-width: 500px)": {
            width:'17px',
        },
        "@media (max-width: 350px)": {
            width:'15px',
        },
    },
    imgContainer:{
       border:'1px solid baack',
    }



})

const Container = styled("div")({
    padding: '20px 10px'
});


const Title = styled('div')({
    maxWidth: "90%",
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'sans-serif',
    padding: '10px 0'
})

const TextInfoField = styled('div')({
    maxWidth: '90%',
    margin: 'auto',
    textAlign: 'center',

})

const InnerTextField = styled('div')({
    maxWidth: '75%',
    margin: 'auto',
    textAlign: 'center',
})


const ImgArray = [img1, img2, img3, img4, img5,img6]

function FourthSection() {
    const [currentImg, setCurrentImg] = useState(0)
    const [scale, setScale] = useState([])

    const classes = useStyles()

    const NextArrow = ({ onClick }) => {
        return (
            <div className={classes.next} onClick={onClick}>
                <img src={arrowImg1} alt="" className={classes.arrowImg} />
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className={classes.prev} onClick={onClick}>
                <img src={arrowImg2} alt="" className={classes.arrowImg}/>
            </div>
        )
    }

    const setting = {
        infinity: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll:1,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setCurrentImg(next)
    }

    return (
        <Container>
            <Title >
                <div className={classes.mainTitle}>Happy <h3 className={classes.titleStrong}>Pets</h3></div>
                <div className={classes.mainTitle}>Happy Pet <h3 className={classes.titleStrong}>Parents</h3></div>
            </Title>
            <div className={classes.slideContainer}>
                <Slider {...setting}>
                    {ImgArray.map((img, index) => (
                            <img
                                src={img}
                                alt=""
                                className={index === currentImg ? classes.imgActive : classes.img}
                            />
                    ))}
                </Slider>
            </div>
            <TextInfoField>
                <InnerTextField>
                    <p className={classes.scrolInfo}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <h3 className={classes.scrolhead}>Manish malhotra, Bruno's Dad</h3>
                    <p className={classes.scrolInfo}>Google . Dog Parent</p>
                </InnerTextField>
            </TextInfoField>
        </Container>
    )
}

export default FourthSection;