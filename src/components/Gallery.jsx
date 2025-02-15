import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

import GalleryThree from "../assets/mazar.jpeg";
import GalleryFour from "../assets/gallery-4.jpg";
import GallerySeven from "../assets/gallery-7.jpg";
import GalleryEight from "../assets/gallery-8.jpg";
import GalleryNine from "../assets/gallery-9.jpg";
import GalleryTen from "../assets/gallery-10.jpg";
import GalleryEleven from "../assets/gallery-11.jpg";

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
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Box id="gallery" p={{ base: "18px 0", lg: "36px 0" }}>
      <Box className="container">
        <Heading {...css.title}>Journey in Afganistan</Heading>
        <Slider {...settings}>
          <Box>
            <Image {...css.image} src={GalleryThree} alt="GalleryThree" />
          </Box>
          <Box>
            <Image {...css.image} src={GalleryFour} alt="GalleryOne" />
          </Box>
          <Box>
            <Image {...css.image} src={GallerySeven} alt="GalleryTwo" />
          </Box>
          <Box>
            <Image {...css.image} src={GalleryEight} alt="GalleryTwo" />
          </Box>
          <Box>
            <Image {...css.image} src={GalleryNine} alt="GalleryTwo" />
          </Box>
          <Box>
            <Image {...css.image} src={GalleryTen} alt="GalleryTwo" />
          </Box>
          <Box>
            <Image {...css.image} src={GalleryEleven} alt="GalleryTwo" />
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}

export default Gallery;

const css = {
  title: {
    fontSize: {
      base: "32px",
      lg: "50px",
    },
    lineHeight: {
      base: "45px",
      lg: "60px",
    },
    fontWeight: "500",
    textAlign: "center",
    color: "#112347",
    marginBottom: "36px",
  },
  image: {
    width: {
      base: "97%",
      lg: "95%",
    },
    height: {
      base: "200px",
      lg: "350px",
    },
    objectFit: "cover",
    borderRadius: "8px",
  },
};
