import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import shield from "assets/img/sidekicks/sidekicks_shield.jpg";
import image from "assets/img/sidekicks/pic-1.jpg";
import image2 from "assets/img/sidekicks/pic-2.jpg";
import image3 from "assets/img/sidekicks/pic-3.jpg";
import image4 from "assets/img/sidekicks/pic-4.jpg";
import image5 from "assets/img/sidekicks/pic-5.jpg";
import image6 from "assets/img/sidekicks/pic-6.jpg";


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
              <h7>GSA Sidekicks Fall 2019</h7>
                <h6>All Albums</h6>
              <a href="https://www.amazon.com/clouddrive/share/D0F7TG48rRuocxs5hhQyzLQGVf3BshVLsYqeeSY16dc"
                target="_blank" rel="noopener noreferrer">
              <img
                src={shield}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>GSA Sidekicks Spring 2020</h7>
                <h6>All Albums</h6>
              <a href="https://www.amazon.com/clouddrive/share/MHuZlFPkRBYVTqsQ4wh7AYpVL33kgW4AJZbzNXUTVf3"
                target="_blank" rel="noopener noreferrer">
              <img
                src={shield}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Sidekicks vs GSA Dynamo</h7>
                <h6>09-26-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/nn62H6KUaU6tXIve677JI0JgrckBIq26HbNAYaeboju"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Sidekicks vs Lampasas</h7>
                <h6>10-03-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/BydIXe2oBika2neE0tAFjTnKrlngbGQliJGf6WjVsjn"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image2}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Sidekicks vs Lake Travis</h7>
                <h6>10-17-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/v6CZJNBbPGexWd4hpYipPavRa7GGzk0VGuxBUeLDtK6"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image3}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Sidekicks vs WBSA United 06B</h7>
                <h6>10-18-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/jGrCgbOWDJORwruJqxL7PhU4EuSCZrXh9dN229nkDFI"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image4}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Sidekicks vs Lampasas</h7>
                <h6>11-01-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/WwiriNWia04VL7K89lAqRdjmbZDI6OdLLAlvHLWncdd"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image5}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Sidekicks vs Lake Travis</h7>
                <h6>11-21-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/CFuz7bLoe7KbQ2zIB6Xjl3MQ66FyS7dAek3bhIM6Bpd"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image6}
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
