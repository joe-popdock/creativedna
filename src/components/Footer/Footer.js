/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// sections for this page
import DonateModal from "./Sections/DonateModal.js";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.center}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
              >
                Creative DNA
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/profile-page" className={classes.block}>
                About Me
            </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
                <DonateModal />
            </ListItem>
      
            <ListItem className={classes.inlineBlock}>
              &copy; {1900 + new Date().getYear()}, made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="/"
                className={aClasses}
              >
                Creative DNA</a>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
