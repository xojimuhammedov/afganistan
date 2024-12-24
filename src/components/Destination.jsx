import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

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
        <Flex mt={"48px"} gap={"24px"} justifyContent={"space-between"}>
          <Box w={"46%"}>
            <Image
              src="https://framerusercontent.com/images/du2MtdKmr0ucxgivPhY6xDNDVw.jpg?scale-down-to=2048"
              {...css.image}
            />
            <Heading {...css.name}>Omprehensive Travel Support</Heading>
            <Text {...css.texts}>
              24/7 customer service to assist you before, during, and after your
              trip
            </Text>
          </Box>
          <Flex gap={"24px"} w={"54%"} flexDirection={"column"}>
            <Box width={"100%"}>
              <Image
                src="https://framerusercontent.com/images/tvEBoO2HjYBHf3ODZeFwBQTBM.jpg?scale-down-to=2048"
                {...css.images}
              />
              <Heading {...css.name}>Omprehensive Travel Support</Heading>
              <Text {...css.texts}>
                24/7 customer service to assist you before, during, and after
                your trip
              </Text>
            </Box>
            <Box width={"100%"}>
              <Image
                src="https://framerusercontent.com/images/Zci58zZDejSHWqVsd3zMkQgJco.jpg?scale-down-to=2048"
                {...css.images}
              />
              <Heading {...css.name}>Omprehensive Travel Support</Heading>
              <Text {...css.texts}>
                24/7 customer service to assist you before, during, and after
                your trip
              </Text>
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
    height: "600px",
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
