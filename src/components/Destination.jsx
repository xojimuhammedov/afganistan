import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

import AmirImage from "../assets/amir.jpg";
import BamyanImage from "../assets/bamyan.jpg";
import HeratImage from "../assets/herat.jpg";

function Destination() {
  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Flex {...css.list}>
          <Heading {...css.title}>
            A seamless blend of adventure, culture, and natural wonders
          </Heading>
          <Text {...css.text}>
            Explore a blend of adventure, rich culture, and breathtaking
            landscapes across our diverse destinations, where every journey
            promises unforgettable memories
          </Text>
        </Flex>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          mt={"48px"}
          gap={"24px"}
          justifyContent={"space-between"}>
          <Box w={{ base: "100%", lg: "46%" }}>
            <Image src={AmirImage} {...css.image} />
            <Heading {...css.name}>Band-e-Amir National Park</Heading>
          </Box>
          <Flex
            gap={"24px"}
            w={{ base: "100%", lg: "54%" }}
            flexDirection={"column"}>
            <Box width={"100%"}>
              <Image src={BamyanImage} {...css.images} />
              <Heading {...css.name}>Bamiyan Valley</Heading>
            </Box>
            <Box width={"100%"}>
              <Image src={HeratImage} {...css.images} />
              <Heading {...css.name}>Herat City</Heading>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Destination;

const css = {
  list: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "50px",
    lineHeight: "60px",
    fontWeight: "500",
    color: "#112347",
    width: "800px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "25px",
    color: "#a2a2a2",
    width: "420px",
  },
  image: {
    width: "100%",
    height: {
      base: "350px",
      lg: "575px",
    },
    objectFit: "cover",
    borderRadius: "8px",
  },
  name: {
    fontSize: "22px",
    lineHeight: "30px",
    fontWeight: "500",
    color: "#112347",
    marginTop: "20px",
  },
  texts: {
    fontSize: "14px",
    lineHeight: "25px",
    color: "#a2a2a2",
    width: "100%",
  },
  images: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px",
  },
};
