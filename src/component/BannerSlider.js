import * as React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} customNext`}
      style={{
        ...style,
        width: 48,
        height: 15,
        display: "block",
        right: "0",
        top: "50%",
        bottom: -40,
        zIndex: 1,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 0,
        background: "#fff",
        height: "25px",
        width: "25px",
      }}
    >
      <ArrowForwardIcon color="primary" />
      {/* <img
        // src={ImageUrl.ic_carousol_next}
        src={<ArrowForwardIcon />}
        width={48}
        height={32}
        alt="ic_carousol_next"
      /> */}
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} customPrev`}
      style={{
        ...style,
        width: 48,
        height: 15,
        display: "block",
        left: "0",
        top: "50%",
        bottom: -40,
        zIndex: 1,
        borderBottomRightRadius: 0,
        borderBottomRightRadius: 6,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 6,
        background: "#fff",
        height: "25px",
        width: "25px",
      }}
    >
      <ArrowBackIcon color="primary" />
      {/* <img
        // src={ImageUrl.ic_carousol_prev}
        src={<ArrowBackIcon />}
        width={48}
        height={32}
        alt="ic_carousol_prev"
      /> */}
    </div>
  );
};
function BannerSlider() {
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <>
      <Box className="fffff" sx={{ mb: 5, mt: 7 }}>
        <Slider {...settings} sx={{mt:5,}}>
          <Box>
            <img
              src="https://www.avgninfotech.com/images/laptop/29.jpg"
              width="100%"
              height="380px"
            />
          </Box>
          <Box>
            <img
              src="https://cdn.w600.comps.canstockphoto.com/collection-of-computer-components-pc-clipart-vector_csp80796555.jpg"
              width="100%"
              height="380px"
            />
          </Box>

          <Box>
              <img src="https://3.imimg.com/data3/LP/JS/MY-4197492/laptop-any-spare-parts-any-brand-500x500.jpg" width="100%" height="380px" />
          </Box>
        </Slider>
      </Box>
    </>
  );
}
export default BannerSlider;
