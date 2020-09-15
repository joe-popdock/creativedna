import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h4 className={classes.description}>
            If you would like to reach out to me, please click the "Send Me A Message" link below.  I will do my best to responde quickly.  Thank you.
          </h4>
          <h2 className={classes.title}><a href="mailto:info@creativedna.design">Send Me A Message</a></h2>
        </GridItem>
      </GridContainer>
    </div>
  );
}
