import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

//import sting from "assets/img/stingsoccer/sting-bg.jpg";
import committed from "assets/img/stingaustinteam/committed.png";
import email from "assets/img/stingaustinteam/email.png";
import coach from "assets/img/stingaustinteam/coach.jpg";
import roster from "assets/img/stingaustinteam/roster.pdf";
import image00 from "assets/img/stingaustinteam/00.jpg";
import image1 from "assets/img/stingaustinteam/1.jpg";
import image2 from "assets/img/stingaustinteam/2.jpg";
import image3 from "assets/img/stingaustinteam/3.jpg";
import image4 from "assets/img/stingaustinteam/4.jpg";
import image6 from "assets/img/stingaustinteam/6.jpg";
import image7 from "assets/img/stingaustinteam/7.jpg";
import image8 from "assets/img/stingaustinteam/8.jpg";
import image9 from "assets/img/stingaustinteam/9.jpg";
import image10 from "assets/img/stingaustinteam/10.jpg";
import image11 from "assets/img/stingaustinteam/11.jpg";
import image13 from "assets/img/stingaustinteam/13.jpg";
import image15 from "assets/img/stingaustinteam/15.jpg";
import image16 from "assets/img/stingaustinteam/16.jpg";
import image20 from "assets/img/stingaustinteam/20.jpg";
import image21 from "assets/img/stingaustinteam/21.jpg";
import image22 from "assets/img/stingaustinteam/22.jpg";
import image23 from "assets/img/stingaustinteam/23.jpg";
import image24 from "assets/img/stingaustinteam/24.jpg";

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
            <h2>Sting Austin ECRL U18/19 Women's Team</h2>
          </div>
          <div>
            <img
                src={coach}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <h3>Coach Albert Flores</h3>
              <h4>(956) 454-6568</h4>
              <h4>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:albertflores@stingsoccer.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h4>
                  <br />
              <a href={roster}><Button type="button" color="primary">Download Team Roster</Button></a>
          </div>
        <br />
        <br />
          <h6>Click on the player picture to view their athlete profile page.&nbsp;&nbsp;&nbsp;Click the envelope if you would like to contact them by email.</h6>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <img
                src={image00}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <h7>Zoe Ellis</h7>
                <h6>Goalkeeper</h6>
                <h6>Henrickson HS</h6>
                <h6>&nbsp;</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:zoe.ellis2003@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <a href="https://www.ncsasports.org/womens-soccer-recruiting/texas/austin/lake-travis-high-school/hannah-alexander1"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image1}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <img
                src={committed}
                alt="..."
                className={classes.imgFluid}
                style={{width:'100px',position: 'absolute',top: '55px',right: '20px'}}
              />
              </a>
              <h7>Hannah Alexander</h7>
                <h6>Goalkeeper</h6>
                <h6>Lake Travis HS</h6>
                <h6>4.96 (weighted) / 4.21 (unweighted)</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:hannah.alexander0924@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
              
            </GridItem>
            <GridItem xs={12} sm={2}>
              <a href="https://www.ncsasports.org/womens-soccer-recruiting/texas/round-rock/round-rock-stony-point-school/natali-barb1"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image2}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
              <h7>Natali Barb</h7>
                <h6>Forward, Wing</h6>
                <h6>Stony Point HS</h6>
                <h6>4.37 (weighted) / 3.33 (unweighted)</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:natali.barb@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <img
                src={image3}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <h7>Yasmine Taylor</h7>
                <h6>Outside Back, Midfielder</h6>
                <h6>Hutto HS</h6>
                <h6>4.84</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:yasminealissa3@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <img
                src={image4}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <h7>Kelci Grahmann</h7>
                <h6>Holding Mid, Wing, Forward, Center Back</h6>
                <h6>Rouse HS</h6>
                <h6>4.9</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:kelcigrahmann@yahoo.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <img
                src={image6}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <h7>Jordyn Jay</h7>
                <h6>Outside Back, Center Back</h6>
                <h6>Cedar Ridge HS</h6>
                <h6>3.5</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:jordynjay2565@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <a href="https://www.ncsasports.org/womens-soccer-recruiting/texas/leander/rouse-high-school1/lauren-rowden"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image7}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
              <h7>Lauren Rowden</h7>
                <h6>Defender, Holding Mid, Striker</h6>
                <h6>Rouse HS</h6>
                <h6>4.87 (weighted) / 3.62 (unweighted)</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:rowden05@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <a href="https://www.hudl.com/profile/12354189/Lizzy-Loera"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image8}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
              <h7>Lizzy Loera</h7>
                <h6>Defender, Midfielder</h6>
                <h6>Edinburg North HS</h6>
                <h6>3.5</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:lizzyloera16@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <a href="https://youtu.be/w79FFB0gK24"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image9}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <img
                src={committed}
                alt="..."
                className={classes.imgFluid}
                style={{width:'100px',position: 'absolute',top: '55px',right: '20px'}}
              />
              </a>
              <h7>Taylor Campbell</h7>
                <h6>Attacking Mid, Forward</h6>
                <h6>Robert R Vela HS</h6>
                <h6>4.0</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:taylor_campbell18@yahoo.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <a href="https://www.ncsasports.org/womens-soccer-recruiting/texas/salado/salado-high-school/lily-lougheed"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image10}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
              <h7>Lily Lougheed</h7>
                <h6>Wing</h6>
                <h6>Salado HS</h6>
                <h6>3.58</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:lalougheed@centurylink.net"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <a href="https://www.hudl.com/profile/10605311/Alexa-Garza"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image11}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
              <h7>Alexandra Garza</h7>
                <h6>Atacking Mid</h6>
                <h6>Nikki Rowe HS</h6>
                <h6>3.8</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:garzaam1@icloud.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <a href="https://www.hudl.com/profile/10492737/Alisyn-Welebob"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image13}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
              <h7>Alisyn Welebob</h7>
                <h6>Center Back</h6>
                <h6>Stony Point HS</h6>
                <h6>5.3 (weighted) / 3.8 (unweighted)</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:aliwelebob@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <img
                src={image15}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <h7>Sophie Baca</h7>
                <h6>Center Mid, Forward, Wing</h6>
                <h6>Vandegrift HS</h6>
                <h6>4.8 (weighted) / 3.7 (unweighted)</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:sophiebaca1@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <img
                src={image16}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <h7>Sarah Westmoreland</h7>
                <h6>Wing, Midfield</h6>
                <h6>Georgetown HS</h6>
                <h6>5.23 (weighted) / 4.0 (unweighted)</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:sarah.h.westmoreland@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <img
                src={image20}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <h7>Avery Stansbury</h7>
                <h6>Outside Back, Center Back, Holding Mid, Wing</h6>
                <h6>Weiss HS</h6>
                <h6>3.33</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:stansbury.amy@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <a href="https://www.ncsasports.org/womens-soccer-recruiting/texas/austin/premier-high-school-of-austin/kylie-stevenson1"
                target="_blank" rel="noopener noreferrer">
              <img
                src={image21}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              </a>
              <h7>Kylie Stevenson</h7>
                <h6>Attacking Mid, Forward</h6>
                <h6>Premier HS</h6>
                <h6>3.15</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:kmstevenson04@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <img
                src={image22}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <h7>Karime Maldonado</h7>
                <h6>Forward, Left Wing, Right Wing</h6>
                <h6>Hutto HS</h6>
                <h6>3.7</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:juan.maldonado.jmjr@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <img
                src={image23}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <h7>Madison Jacobs</h7>
                <h6>Defender</h6>
                <h6>Hutto HS</h6>
                <h6>3.8</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:ms1jacobs@msn.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
            <GridItem xs={12} sm={2}>
              <img
                src={image24}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
              <h7>Allisyn Carter</h7>
                <h6>Center Back</h6>
                <h6>Elgin HS</h6>
                <h6>3.5</h6>
                <h6>Contact Me &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:AllisynCarter22@gmail.com"><img src={email} alt="..." style={{width:'40px'}} /></a></h6>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
