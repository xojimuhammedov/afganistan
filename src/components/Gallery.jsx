import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

import GalleryOne from "../assets/kabul.jpg";
import GalleryTwo from "../assets/bayman.jpg";
import GalleryThree from "../assets/mazar.jpeg";

function Gallery() {
  var settings = {
    speed: 6000,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Box id="gallery" p={"36px 0"}>
      <Box className="container">
        <Heading {...css.title}>Journey in Afganistan</Heading>
        <Slider {...settings}>
          <Box>
            <Image {...css.image} src={GalleryOne} alt="GalleryOne" />
          </Box>
          <Box>
            <Image {...css.image} src={GalleryTwo} alt="GalleryTwo" />
          </Box>
          <Box>
            <Image {...css.image} src={GalleryThree} alt="GalleryThree" />
          </Box>
          <Box>
            <Image {...css.image} src={GalleryOne} alt="GalleryOne" />
          </Box>
          <Box>
            <Image {...css.image} src={GalleryTwo} alt="GalleryTwo" />
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}

export default Gallery;

const css = {
  title: {
    fontSize: "50px",
    lineHeight: "60px",
    fontWeight: "500",
    textAlign: "center",
    color: "#112347",
    marginBottom: "36px",
  },
  image: {
    width: "95%",
    height: "350px",
    objectFit: "cover",
    borderRadius: "8px",
  },
};
