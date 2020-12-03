import React from "react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function TwitterFeed() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <TwitterTimelineEmbed
              sourceType="profile"
              screenName="CreativeD_N_A"
              options={{height: 800}}
            />
        </GridItem>
      </GridContainer>
    </div>
  );
}
