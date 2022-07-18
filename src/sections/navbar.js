import * as React from "react";
import { Link as ReactLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Box, Grid } from "@mui/material";
import { Toolbar, IconButton, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useMatch, useResolvedPath } from "react-router-dom";
import MenuIcon from "./../menu icon.webp";
// import homePageMenuIcon from "./../Hamburger Icon Background.svg";
import { Link } from "react-scroll";
import ButtonComponent from "../component/button";
import veticLogo from "./../logo.webp";
import homePageMenuIcon from "./../homePageMenuIcon.jpg";
import { redirectUrl } from "../constants/constants";
import COLORS from "../constants/colors";
import { useLocation } from "react-router-dom";

const MobileView = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "104px !important",
    height: "37px !important",
  },
  [theme.breakpoints.up("sm")]: {
    width: 121,
    height: 43,
  },
}));

const TypographyView = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
}));

const AppbarView = styled(AppBar)(({ theme }) => ({
  position: "static",
  backgroundColor: "#FFF",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "#FFF",
  },
  [theme.breakpoints.up("sm")]: {
    height: 84,
    display: "flex",
    justifyContent: "center",
  },
}));

const ToolbarView = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "84px !important",
    paddingRight: "84px !important",
  },
  [theme.breakpoints.down("sm")]: {
    height: 71,
  },
}));

const Navbar = ({ isScroll, setScroll }) => {
  const { pathname } = useLocation();
  console.log({ pathname });

  function CustomLink({ children, to, fontSize, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <div style={{ textAlign: "center" }}>
        <ReactLink style={{ textDecoration: "none" }} to={to} {...props}>
          <TypographyView
            component={"span"}
            fontWeight={"400"}
            color={COLORS.HOMEPAGE_LINKS_COLOR}
            fontSize={fontSize}
          >
            {children}
            {match && (
              <div
                style={{
                  height: 4,
                  width: 75,
                  backgroundColor: "rgb(27, 55, 107)",
                }}
              />
            )}
          </TypographyView>
        </ReactLink>
      </div>
    );
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const onClick = () => {
    setScroll(!isScroll);
  };

  const menuId = "primary-search-account-menu";
  const menuItms = [
    {
      value: "Clinics",
    },
    { value: "About Us" },
    {
      value: "Careers",
    },
  ];

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {menuItms.forEach(({ value }) => {
        if (value === "Careers") {
          return (
            <MenuItem onClick={handleMenuClose}>
              {redirectUrl(
                <Typography
                  component={"span"}
                  fontWeight="400"
                  color={COLORS.HOMEPAGE_LINKS_COLOR}
                >
                  {value}
                </Typography>,
                "https://www.linkedin.com/company/veticin"
              )}
            </MenuItem>
          );
        }

        return (
          <MenuItem onClick={handleMenuClose}>
            <CustomLink to="/about-us">{value}</CustomLink>
          </MenuItem>
        );
      })}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  // const homePageMenuItems = ["Clinics", "About Us",];
  const homePageOtherMenuItems = [
    {
      value: "Clinics",
    },
    { value: "About Us" },
    {
      value: "Careers",
    },
  ];
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* {homePageMenuItems.forEach((value) => {
        return (
          homePageLink && (
            <div key={`${value}`}>
              <MenuItem>
                <CustomLink to="/" fontSize="16px">
                  {value}
                </CustomLink>
              </MenuItem>
            </div>
          )
        );
      })} */}
      <MenuItem>
        <CustomLink to="/clinics" fontSize="16px">
          Clinics
        </CustomLink>
      </MenuItem>
      <MenuItem>
        <CustomLink to="/about-us" fontSize="16px">
          About Us
        </CustomLink>
      </MenuItem>
      <MenuItem>
        {redirectUrl(
          <Typography
            component={"span"}
            fontWeight={"400"}
            color={"#4C4C4C"}
            fontSize="16px"
          >
            Careers
          </Typography>,
          "https://www.linkedin.com/company/veticin"
        )}
      </MenuItem>

      <MenuItem>
        <span style={{ marginTop: -10 }}>
          <Link
            activeClass="active"
            to="consultation_form"
            spy={isScroll}
            smooth={true}
          >
            <ButtonComponent
              onClick={() => {
                onClick();
                handleMenuClose();
              }}
              heading="Consult now"
              width="158px"
              fontSize="18px"
            />
          </Link>
        </span>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppbarView elevation={1}>
        <ToolbarView>
          {redirectUrl(
            <MobileView
              src={veticLogo}
              alt="navbar-logo"
              style={{ width: 121, height: 43, marginBottom: 5 }}
            />,
            "/",
            true
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <span
              style={{
                marginRight: 40,
                marginTop: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <CustomLink to="/clinics">Clinics</CustomLink>
            </span>
            <span
              style={{
                marginRight: 40,
                marginTop: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <CustomLink to="/about-us">About Us</CustomLink>
            </span>
            <span
              style={{ marginRight: 40, display: "flex", alignItems: "center" }}
            >
              {redirectUrl(
                <TypographyView
                  component={"span"}
                  fontWeight={"400"}
                  color={"#4C4C4C"}
                >
                  Careers
                </TypographyView>,
                "https://www.linkedin.com/company/veticin"
              )}
            </span>
            <span style={{ marginTop: "-17px" }}>
              <Link
                component="button"
                activeClass="active"
                to="consultation_form"
                spy={isScroll}
                smooth={true}
              >
                <TypographyView component={"span"}>
                  <ButtonComponent
                    onClick={onClick}
                    heading={"Book now"}
                    width={"158px"}
                    fontSize={"20px"}
                    fontweight={"400"}
                  />
                </TypographyView>
              </Link>
            </span>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              style={{ color: "rgb(27, 55, 107)" }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <img
                    src={MenuIcon}
                    alt="menu-icon"
                    style={{ width: 24, height: 11 }}
                  />
                  <Typography
                    component={"div"}
                    style={{
                      fontSize: 9,
                      color: "#313131",
                      fontFamily: "Work Sans, Medium",
                      marginTop: -2,
                    }}
                  >
                    Menu
                  </Typography>
                </Grid>
              </Grid>
            </IconButton>
          </Box>
        </ToolbarView>
      </AppbarView>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;
