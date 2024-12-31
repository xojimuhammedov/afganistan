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
              Despite Afghanistan’s volatile security situation, the country
              showcases a wealth of natural and architectural wonders which
              attract visitors both locally and internationally. Some famous
              sights include Bamiyan, Mazar-e-Sharif, Herat and Kabul. Other
              popular sites are Afghanistan’s two designated national parks;
              Band-e-Amir National Park and Wakhan National Park.
            </Text>
            <Text {...css.text}>
              Historically, Afghanistan has been a favorite tourist destination,
              and the industry reached its peak in the 1970s with over 90,000
              tourists visiting Afghanistan annually from different parts of the
              world. Today, according to Ministry of Information and Culture,
              around 20,000 foreign tourists visit Afghanistan annually.
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
