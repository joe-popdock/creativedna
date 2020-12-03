import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

//import prms from "assets/img/pearsonranch/prms.jpg";
import image1 from "assets/img/pearsonranch/pic-1.jpg";
import image2 from "assets/img/pearsonranch/pic-2.jpg";
import image3 from "assets/img/pearsonranch/pic-3.jpg";
import image4 from "assets/img/pearsonranch/pic-4.jpg";
import image5 from "assets/img/pearsonranch/pic-5.jpg";
import image6 from "assets/img/pearsonranch/pic-6.jpg";
import image7 from "assets/img/pearsonranch/pic-7.jpg";
import image8 from "assets/img/pearsonranch/pic-8.jpg";


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
            <div className={classes.title}>
            <h3>Football</h3>
            </div>
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <h7>Pearson Ranch vs Hernandez</h7>
                <h6>10-14-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/BySXLSEMoWhRG3yvN9Ym7yB8ipSeWZ4sFVO9Apb50R3"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image1}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Pearson Ranch vs Grisham</h7>
                <h6>10-20-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/UpXTHdQ2dNVfPyKLoV2y1DGraKXMmkfzyPM422FR1ar"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image2}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Pearson Ranch vs Chisholm Trail</h7>
                <h6>10-27-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/egE8eErOqIBZZEVCCVfagwUXTI3MVepJfa5EJhPR1tL"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image4}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Pearson Ranch vs CD Fulkes</h7>
                <h6>11-03-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/pjrzGNDdiRi3lqHjrU8E3FObuk1VH3QTGBLFix9s57u"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image6}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Pearson Ranch vs Canyon Vista</h7>
                <h6>11-10-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/8RqVVN3UjDDZyGDFCygmp3xZb0qhb2xFTXed8V6DkwN"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image7}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Pearson Ranch vs Deerpark</h7>
                <h6>12-02-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/D3FZISkK27VgogCJpg3EiB4TUEAfwEjKGpqw0N0sSju"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image8}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
          </GridContainer>
          <GridContainer />
        <br />
            <div className={classes.title}>
            <h3>Volleyball</h3>
            </div>
        <GridContainer>
            <GridItem xs={12} sm={2}>
              <h7>Pearson Ranch vs CD Fulkes - 7th Grade</h7>
                <h6>10-22-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/4tDMx2dWnf4t1iBJvKAuXyqaBPreY5N56KUC1xkeTft"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image3}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <h7>Pearson Ranch vs Grisham - 8th Grade</h7>
                <h6>10-29-2020</h6>
              <a href="https://www.amazon.com/clouddrive/share/Vy0owTgzgJvCll4FuwXD5KD34o89iild0UQKQ4NEMui"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image5}
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
