import React, { useState } from 'react';
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
        // border:'1px solid black',
        maxWidth: '90%',
        margin: 'auto',
    },
    img: {
        minHeight: '260px',
        fitContent: 'cover',
        transform: 'scale(0.5)',
        borderRadius: "50%",
        opacity: '8',

    },
    imgActive: {
        minHeight: '290px',
        fitContent: 'content',
        transform: 'scale(0.8)',
        opacity: '10',
        borderRadius: "50%"
    },
    mainTitle: {
        fontSize: "35px",
        margin: '5px 0'
    },
    titleStrong: {
        fontWeight: "700",
        color: "#013773",
        display: 'inline',
    },
    next: {
        // border:'1px solid black',
        width: 'fit-content',
        position: 'absolute',
        right: '5px',
        top: '40%',
        cursor: 'pointer',


    },
    prev: {
        // border:'1px solid black',
        width: 'fit-content',
        position: 'absolute',
        left: '5px',
        top: '40%',
        cursor: 'pointer',
    },
    scrolInfo: {
        fontSize: '16px',
    }
})

const Container = styled("div")({
    //    border:'1px solid black',
    padding: '20px 0'
});


const Title = styled('div')({
    //    border:'1px solid black',
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
    // border: '1px solid black',
    maxWidth: '90%',
    margin: 'auto',
    textAlign: 'center',

})

const InnerTextField = styled('div')({
    // border: '1px solid black',
    maxWidth: '75%',
    margin: 'auto',
    textAlign: 'center',
})

// ----------------------------------------------------------------------------------------------------
const ImgArray = [img1, img2, img3, img4, img5, img6]

function FourthSection() {

    const [currentImg, setCurrentImg] = useState(0)

    const classes = useStyles()


    const NextArrow = ({ onClick }) => {
        return (
            <div className={classes.next} onClick={onClick}>
                <img src={arrowImg1} alt="" style={{width:'25px'}}/>
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className={classes.prev} onClick={onClick}>
                <img src={arrowImg2} alt="" style={{width:'25px'}}/>
            </div>
        )
    }

    const setting = {
        infinity: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 5,
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    <h3 className={classes.scrolhead}>Manish malhotra, Bruno's Dad</h3>
                    <p className={classes.scrolInfo}>Google . Dog Parent</p>
                </InnerTextField>
            </TextInfoField>
        </Container>
    )
}

export default FourthSection;