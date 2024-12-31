import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

import TourImage from "../assets/tour.avif";

import BendAmir from "../assets/b-amir.jpg";
import NationalPark from "../assets/national-park.jpg";

function Tour() {
  return (
    <Box id="destination" p={"36px 0"}>
      <Box className="container">
        <Flex {...css.list}>
          <Heading {...css.title}>
            Browse our selection of carefully curated travel packages
          </Heading>
          <Text {...css.text}>
            Discover a collection of expertly designed packages, combining
            adventure, culture, and stunning landscapes, each promising a
            journey to remember.
          </Text>
        </Flex>
        <SimpleGrid
          gap={"32px"}
          mt={"32px"}
          columns={{ base: 1, sm: 2, lg: 3 }}>
          <Box>
            <Image {...css.image} src={BendAmir} alt="TourImage" />
            <Heading {...css.name}>Band-e Amir National Park</Heading>
            <Text {...css.texts}>
              Visitors to Afghanistan have long marvelled at the country's
              natural beauty.
            </Text>
          </Box>
          <Box>
            <Image {...css.image} src={NationalPark} alt="NationalPark" />
            <Heading {...css.name}>Wakhan National Park</Heading>
            <Text {...css.texts}>
              Officially recognised as a national park in 2014, the Wakhan
              National Park is only the second of its kind in Afghanistan.
            </Text>
          </Box>
          <Box>
            <Image {...css.image} src={TourImage} alt="TourImage" />
            <Heading {...css.name}>Omprehensive Travel Support</Heading>
            <Text {...css.texts}>
              24/7 customer service to assist you before, during, and after your
              trip and it is really amazing
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Tour;

const css = {
  list: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: {
      base: "column",
      lg: "row",
    },
  },
  title: {
    fontSize: {
      base: "30px",
      md: "50px",
    },
    lineHeight: {
      base: "45px",
      md: "60px",
    },
    fontWeight: "500",
    color: "#112347",
  },
  text: {
    fontSize: "16px",
    lineHeight: "25px",
    color: "#a2a2a2",
    width:{
      base: "100%",
      lg: "600px",
    },
  },
  name: {
    fontSize: "24px",
    lineHeight: "30px",
    fontWeight: "500",
    color: "#112347",
    marginTop: "24px",
  },
  texts: {
    fontSize: "14px",
    lineHeight: "25px",
    color: "#a2a2a2",
    marginTop: "12px",
  },
  image: {
    borderRadius: "12px",
    height: "450px",
    objectFit: "cover",
    width: "100%",
  },
};
