import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import LogoIcon from "../assets/logo.png";
import { Link as Alink } from "react-router-dom";

function Navbar() {
  return (
    <Box bg={"#112347"} p={"12px 0"}>
      <Box className="container">
        <Flex {...css.list}>
          <Alink to="/">
            <Image {...css.image} src={LogoIcon} alt="LogoIcon" />
          </Alink>
          <Flex alignItems={"center"} gap={"36px"}>
            <Alink to="/">
              <Text {...css.link}>Home</Text>
            </Alink>
            <Link {...css.link} href="about">
              About Us
            </Link>
            <Link {...css.link} href="#destination">
              Tour
            </Link>
            <Link href="#gallery" {...css.link}>
              Gallery
            </Link>
            <Link href="#contact" {...css.link}>
              Contact
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  image: {
    width: {
      base: "120px",
      lg: "120px",
    },
    height: "90px",
    objectFit: "cover",
  },
  link: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    color: "#fff",
    transition: "0.3s",
    display: {
      base: "none",
      lg: "block",
    },

    _hover: {
      textDecoration: "none",
    },
  },
  list: {
    alignItems: "center",
    justifyContent: "space-between",
  },
};
