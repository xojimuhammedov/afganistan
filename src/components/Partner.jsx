import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

import LogoOne from "../assets/agoda.png";
import LogoTwo from "../assets/airways.png";
import LogoThree from "../assets/funsun.png";
import LogoFour from "../assets/kompas.png";
import LogoFive from "../assets/rate.jpg";
import LogoSix from "../assets/trip.jpg";
import LogoSeven from "../assets/selfie.png";

function Partner() {
  return (
    <Box background={"#EFF8FF"} p={"36px 0"}>
      <Box className="container">
        <Heading {...css.title}>Our Partners</Heading>
        <SimpleGrid
          mt={"60px"}
          gap={"36px"}
          columns={{ base: 2, md: 3, lg: 4 }}>
          <Box {...css.item}>
            <Image {...css.image} src={LogoOne} alt="LogoOne" />
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={LogoTwo} alt="LogoTwo" />
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={LogoThree} alt="LogoThree" />
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={LogoFour} alt="LogoFour" />
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={LogoFive} alt="LogoFive" />
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={LogoSix} alt="LogoSix" />
          </Box>
          <Box {...css.item}>
            <Image {...css.image} src={LogoSeven} alt="LogoSeven" />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Partner;

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
  item: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    height: "130px",
    cursor: "pointer",
    transition: "0.3s",

    _hover: {
      transform: "scale(1.1)",
    },
  },
  image: {
    width: "90%",
    height: "100px",
    objectFit: "contain",
  },
};
