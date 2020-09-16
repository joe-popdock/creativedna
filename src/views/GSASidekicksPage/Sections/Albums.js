import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image from "assets/img/sidekicks/sidekicks_shield.jpg";
//import image2 from "assets/img/stingsoccer/pic-2.jpg";
//import image3 from "assets/img/stingsoccer/pic-3.jpg";
//import image4 from "assets/img/stingsoccer/pic-4.jpg";
//import image5 from "assets/img/stingsoccer/pic-5.jpg";
//import image6 from "assets/img/stingsoccer/pic-6.jpg";
//import image7 from "assets/img/stingsoccer/pic-7.jpg";


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
              <h7>GSA Sidekicks Spring 2020</h7>
                <h6>All Albums</h6>
              <a href="https://www.amazon.com/clouddrive/share/MHuZlFPkRBYVTqsQ4wh7AYpVL33kgW4AJZbzNXUTVf3"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>GSA Sidekicks Fall 2019</h7>
                <h6>All Albums</h6>
              <a href="https://www.amazon.com/clouddrive/share/D0F7TG48rRuocxs5hhQyzLQGVf3BshVLsYqeeSY16dc"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image}
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
