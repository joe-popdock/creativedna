import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import sting from "assets/img/stingsoccer/sting-bg.jpg";
import image from "assets/img/stingsoccer/pic-1.jpg";
import image2 from "assets/img/stingsoccer/pic-2.jpg";
import image3 from "assets/img/stingsoccer/pic-3.jpg";
import image4 from "assets/img/stingsoccer/pic-4.jpg";
import image5 from "assets/img/stingsoccer/pic-5.jpg";
import image6 from "assets/img/stingsoccer/pic-6.jpg";
import image7 from "assets/img/stingsoccer/pic-7.jpg";
import image8 from "assets/img/stingsoccer/pic-8.jpg";
import image9 from "assets/img/stingsoccer/pic-9.jpg";
import image10 from "assets/img/stingsoccer/pic-10.jpg";
import image11 from "assets/img/stingsoccer/pic-11.jpg";
import image12 from "assets/img/stingsoccer/pic-12.jpg";
import image13 from "assets/img/stingsoccer/pic-13.jpg";
import image14 from "assets/img/stingsoccer/pic-14.jpg";
import image15 from "assets/img/stingsoccer/pic-15.jpg";

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
              <h7>All GoPro Game Footage</h7>
                <h6>All Videos</h6>
              <a href="https://www.amazon.com/clouddrive/share/0YPgd8Wvjz246WdPl5wThpIC7tDNpbhrD3eGL3NxweM"
                target="_blank" rel="noopener noreferrer">
              <img
                src={sting}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
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
              <h7>Pre-Labor Day Tourny</h7>
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
              <h7>vs Challenge</h7>
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
            <GridItem xs={12} sm={2}>
              <h7>vs Hurricane FC</h7>
                <h6>09-27-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/G9iwlpLEXeY8sapOvy8EMF0qCRJ3S3xpspcSiwdJypE"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image8}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>vs Challenge</h7>
                <h6>10-04-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/UhsmQyPEm9OBLksGUyePwfzsTqDauNCxwt8SsPStXX2"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image9}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>vs Solar FC</h7>
                <h6>10-10-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/3oKnpsNWraM1xiZ9v7TwciS4LlU5OgVlMnSRbuwsvGo"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image10}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>vs Dallas Texans</h7>
                <h6>10-11-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/fnq0SjsdveLoc4X4qZkMr6vYX0JyPAwC05f3Rodr9l2"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image11}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>vs D'Feeters Kick SC</h7>
                <h6>10-24-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/S7GaXFk3gl1gETmjKj8YGF7ScxmwGcT2h30H9844lE1"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image12}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>vs Sting Dallas Black</h7>
                <h6>10-25-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/dnug1ujuQbbyolJVemUJycUT3gbHmDS4FdSOZTSyno8"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image13}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>vs Dallas</h7>
                <h6>11-07-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/hcH5V2KsCynszzAKEitD6pzLbe43TuZwMnvQwDKif5Z"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image14}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>vs Classic Elite</h7>
                <h6>11-08-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/zOof0eoZ3b4dfDYsdttD1bmplMgkaEHJYPLzuKxNgFj"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image15}
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
