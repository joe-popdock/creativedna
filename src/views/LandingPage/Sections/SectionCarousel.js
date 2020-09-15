import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
//import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/carousel1/1.jpg";
import image2 from "assets/img/carousel1/2.jpg";
import image3 from "assets/img/carousel1/3.jpg";
import image4 from "assets/img/carousel1/4.jpg";
import image5 from "assets/img/carousel1/5.jpg";
import image6 from "assets/img/carousel1/6.jpg";
import image7 from "assets/img/carousel1/7.jpg";
import image8 from "assets/img/carousel1/8.jpg";
import image9 from "assets/img/carousel1/9.jpg";
import image10 from "assets/img/carousel1/10.jpg";
import image11 from "assets/img/carousel1/11.jpg";
import image12 from "assets/img/carousel1/12.jpg";
import image13 from "assets/img/carousel1/13.jpg";
import image14 from "assets/img/carousel1/14.jpg";
//import image15 from "assets/img/carousel1/15.jpg";
//import image16 from "assets/img/carousel1/16.jpg";
//import image17 from "assets/img/carousel1/17.jpg";
//import image18 from "assets/img/carousel1/18.jpg";
//import image19 from "assets/img/carousel1/19.jpg";
//import image20 from "assets/img/carousel1/20.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="1" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image2} alt="2" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="3" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image4} alt="4" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image5} alt="5" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image6} alt="6" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image7} alt="7" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image8} alt="8" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image9} alt="9" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image10} alt="10" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image11} alt="11" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image12} alt="12" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image13} alt="13" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image14} alt="14" className="slick-image" />
                  <div className="slick-caption">
                    <h4>

                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
