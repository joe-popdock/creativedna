import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import logo from "assets/img/creative_dna_design_logo_500px_white.png";

// Sections for this page
import SectionCarousel from "./Sections/SectionCarousel.js";
import WorkSection from "./Sections/WorkSection.js";
import TwitterFeed from "./Sections/TwitterFeed.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Creative DNA"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/dna-bg2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div>
                <img src={logo} alt="..." className={imageClasses} width="250px" />
              </div>
              <h4>
                Creative was for the creativity photography and photo editing has given me. DNA is the first initial of each of my kids, who inspire me to be the person that I am. I wanted a place to share the photos I have taken so I created Creative DNA. I enjoy taking photos as a hobby and I am no where near being a professional, but I am always photographing people, events, etc. This site allows me to have a place to share those images with you. I hope that you enjoy the pictures and maybe I have captured a memory for you. Thanks.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionCarousel />
          <WorkSection />
          <TwitterFeed />
        </div>
      </div>
      <Footer />
    </div>
  );
}
