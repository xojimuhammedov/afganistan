import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

import AboutImageOne from "../assets/about.jpg";

function About() {
  return (
    <Box id="about" p={"36px 0"}>
      <Box className="container">
        <Flex {...css.list}>
          <Box>
            <Heading {...css.title}>
              We're Afghanistan's top adventure travel company!
            </Heading>
            <Text {...css.text}>
              We are the top adventure travel company! Whether you're dreaming
              of a romantic getaway filled with magical moments, planning a
              serene and culturally rich family trip, or embarking on an
              exciting solo journey to uncover the world's wonders, Afghanistan
              offers an unparalleled destination that brings all your travel
              dreams to life. With its mysterious mountains, ancient cities
              steeped in history, and warm, welcoming people, Afghanistan is a
              land where your wildest aspirations turn into reality. Our
              experienced travel experts are dedicated to crafting bespoke
              itineraries that not only meet but far exceed your expectations.
            </Text>
          </Box>
          <Image {...css.image} src={AboutImageOne} alt="AboutImageOne" />
        </Flex>
      </Box>
    </Box>
  );
}

export default About;

const css = {
  title: {
    color: "#112347",
    fontSize: {
      base: "32px",
      md: "42px",
    },
    lineHeight: {
      base: "40px",
      md: "58px",
    },
    fontWeight: "500",
    width: {
      base: "100%",
      lg: "680px",
    },
    textTransform: "capitalize",
  },
  text: {
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "400",
    width: {
      base: "100%",
      lg: "600px",
    },
    marginTop: "18px",
  },
  image: {
    objectFit: "cover",
    width: "620px",
    borderRadius: "8px",
  },
  list: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: {
      base: "column-reverse",
      lg: "row",
    },
  },
};
