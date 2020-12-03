import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image from "assets/img/stonypoint/stp_track&field.jpg";
import xc from "assets/img/stonypoint/xc.jpg";
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
              <h7>2019-2020 Track & Field</h7>
                <h6>All Albums</h6>
              <a href="https://www.amazon.com/clouddrive/share/3nBydRti026lDnwaPo0WqcoBy0HDByYMOi2iwCrY9NF"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>2020-2021 Cross Country</h7>
                <h6>All Albums</h6>
              <a href="https://www.amazon.com/clouddrive/share/3XWN9jFHIhRlYrP3oR63RXeyl3yGzI7G6CNqhHCgl5z"
                target="_blank" rel="noopener noreferrer">
              <img
                src={xc}
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
