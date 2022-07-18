// second section

import { Grid, Box, Typography } from "@mui/material";
import firstImage from "./../../vetic_is_different laptop.webp";
import firstMobileImage from "./../../vetic_is_different mobile.webp";
import AttentionImage from "./../../Attention.svg";
import ProductsImage from "./../../Products.svg";
import ExclusiveSavingsImage from "./../../ExclusiveSavings.svg";
import {
  SubTextHomePage,
  SubMiniTextHomePage,
} from "../../constants/constants";
import { styled } from "@mui/material/styles";

const Image = styled("img")(({ theme, first }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "80px",
    height: "83px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "99px",
    height: "99px",
    marginTop: first === "false" && 83,
  },
}));
const BoxView = styled(Box)(({ theme }) => ({
  padding: "5%",
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: "156px !important",
    paddingBottom: "0px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "160px",
    paddingLeft: "16px !important",
    paddingRight: "16px !important",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: 230,
    paddingBottom: "0px",
    paddingLeft: "98px !important",
  },
}));

const GridItemView = styled(Grid)(({ theme, imagesection }) => ({
  paddingBottom: "0px !important",
  [theme.breakpoints.between("sm", "md")]: {
    paddingLeft: "70px !important",
    paddingTop: "0px !important",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0px !important",
  },
  [theme.breakpoints.up("sm")]: {
    paddingTop: "0px !important",
    paddingLeft: imagesection === "true" && "265px !important",
  },
  "@media (min-width: 823px) and (max-width: 1368px)": {
    paddingLeft: imagesection === "true" && "50px !important",
  },
}));

const ImageView = styled("img")(({ theme }) => ({}));

const GridView = styled(Grid)(({ theme, first }) => ({
  [theme.breakpoints.down("sm")]: { marginTop: 10 },
  [theme.breakpoints.up("sm")]: {
    marginTop: first === "true" ? 66 : 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: 10,
  },
}));

const TypographyView = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { marginTop: 10 },
  [theme.breakpoints.up("sm")]: {
    marginTop: 30,
    lineHeight: "45px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: 10,
    lineHeight: "20px",
    fontSize: "60px",
  },
}));

const SubTypographyView = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    fontSize: "60px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "60px",
  },
}));

const DivView = styled("div")(({ theme }) => ({
  [theme.breakpoints.between("sm", "md")]: {
    paddingLeft: "50px !important",
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: 40,
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
  },
}));

const TextView = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 32,
    marginTop: -10,
  },
}));

const SubTextView = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: 16,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: 25,
  },
}));

const IMGDIVWRAPPER = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
  [theme.breakpoints.up("sm")]: {
    width: 852,
    height: 880,
  },
}));

const RightSideImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
  [theme.breakpoints.up("sm")]: {
    width: 852,
    height: 880,
  },
}));

const ItemView = styled(Grid)(({ theme, first }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0px !important",
  },
  [theme.breakpoints.up("sm")]: {
    paddingTop: first === "false" && "83px !important",
  },
}));

const subUSPColor = "#8A8987";

const laptopViewHeading = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
      <TypographyView
        component={"span"}
        fontSize="60px"
        fontWeight="400"
        color="#013773"
      >
        Vetic is{" "}
        <SubTypographyView component={"div"} color="#013773" fontWeight="700">
          {" "}
          Different.
        </SubTypographyView>
      </TypographyView>
    </Box>
  );
};

const rightSide = () => {
  return [
    {
      image: AttentionImage,
      heading: "24x7 attentionp",
      subHeading: "Lorem ipsum dolor sit amet,",
    },
    {
      image: ProductsImage,
      heading: "24x7 attentiono",
      subHeading: "Lorem ipsum dolor sit amet,",
    },
    {
      image: ExclusiveSavingsImage,
      heading: "24x7 attentionm",
      subHeading: "Lorem ipsum dolor sit amet,",
    },
  ].map(({ image, subHeading, heading }, id) => {
    return (
      <GridView
        key={`${subHeading}_${heading}`}
        container
        spacing={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        first={id === 0 ? "true" : "false"}
      >
        <Grid item xs={4} sm={2}>
          <Image
            first={id === 0 ? "true" : "false"}
            src={image}
            style={{ borderRadius: 10 }}
          />
        </Grid>
        <ItemView item xs={8} sm={10} first={id === 0 ? "true" : "false"}>
          <DivView>
            <div>
              <TextView fontFamily="Work Sans">{heading}</TextView>
            </div>
            <SubTextView fontFamily="Work Sans" color={subUSPColor}>
              {subHeading}
            </SubTextView>
          </DivView>
        </ItemView>
      </GridView>
    );
  });
};

// USP Showcasing

const SecondSection = () => {
  return (
    <BoxView>
      <Grid
        container
        spacing={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <GridItemView item xs={12} sm={6} md={6}>
          <Box sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}>
            <IMGDIVWRAPPER>
              <RightSideImage
                src={firstImage}
                style={{ borderRadius: 12 }}
                alt="image"
              />
            </IMGDIVWRAPPER>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none", md: "none" },
              flexDirection: "column",
              alignItems: "center",
              margin: "30px 0px 30px 0px",
            }}
          >
            <Typography
              component={"span"}
              fontSize="34px"
              fontWeight="400"
              color="#013773"
            >
              Vetic is
              <Typography
                component={"span"}
                fontSize="34px"
                color="#013773"
                fontWeight="700"
                style={{ display: "inline", marginLeft: 6 }}
              >
                Different
              </Typography>
            </Typography>{" "}
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
            <ImageView src={firstMobileImage} width="100%" height="100%" />
          </Box>
        </GridItemView>
        <GridItemView item xs={12} sm={6} md={6} imagesection="true">
          {laptopViewHeading()}
          {rightSide()}
        </GridItemView>
      </Grid>
    </BoxView>
  );
};

export default SecondSection;
