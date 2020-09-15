import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image from "assets/img/stingsoccer/pic-1.jpg";
import image2 from "assets/img/stingsoccer/pic-2.jpg";
import image3 from "assets/img/stingsoccer/pic-3.jpg";
import image4 from "assets/img/stingsoccer/pic-4.jpg";
import image5 from "assets/img/stingsoccer/pic-5.jpg";
import image6 from "assets/img/stingsoccer/pic-6.jpg";
import image7 from "assets/img/stingsoccer/pic-7.jpg";


import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>

        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
            <h2>Albums</h2>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <h7>Houston Friendlies vs Challenger</h7>
                <h6>08-08-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/vmj7nK5qIWehbGHYMugw7MaADJojBqOt4XVt3yLQ38C"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Houston Friendlies vs Hurricanes</h7>
                <h6>08-09-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/HOaq5uPNz3V0QWUlIxGAgn4phbo2vVAtrX4xB2CjOsP"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image2}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Ft. Worth NEPS Showcase vs Fever</h7>
                <h6>08-15-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/02xr5g0rVkB3bM4xL1E2jkRfoiaGf4EpFGCRk1Sflcs"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image3}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Ft. Worth NEPS Showcase vs Solar</h7>
                <h6>08-16-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/iHEWu0vorEUpFmWS1aomGKFvgUUdIH4mS7yjB2h4HfW"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image4}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Scrimmage vs FC Westlake</h7>
                <h6>08-22-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/pmReeXHtt4H9Wwap8coAnQ2J2WfkIno300riK41WclQ"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image5}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Pre-Labor Day Tournament</h7>
                <h6>08-28-2020 to 08-30-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/t7FQxhkRwXY0ROWtBBnLJf54VRRr3V10bBL9ZXZBJUk"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image6}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>vs Challenger</h7>
                <h6>09-13-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/dW1BkYTpW5ztcHPk8f8DI8qPHcm4BHPWlWDyrNviBMx"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image7}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
