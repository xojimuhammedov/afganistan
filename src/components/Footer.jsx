import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import React from "react";
import TelegramIcon from "../assets/tg.svg";
import InstagramIcon from "../assets/instagram.svg";

function Footer() {
  return (
    <Box {...css.footer}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column-reverse", lg: "row" }}
          gap={"18px"}
          justify={"space-between"}
          align={"center"}>
          <Flex direction={"column"} align={"center"}>
            <Heading {...css.name}>Social media</Heading>
            <Flex mt={"12px"} gap={"12px"} align={"center"}>
              <Link
                href="https://www.instagram.com/whiterivertour/?next=%2Fdirect%2Finbox%2F#"
                target="_blank">
                <Image src={InstagramIcon} />
              </Link>
              <Link href="https://t.me/Ramziddin_wrt" target="_blank">
                <Image src={TelegramIcon} />
              </Link>
            </Flex>
          </Flex>
          <Flex gap={"18px"}>
            <Link {...css.links} href="/">
              Home
            </Link>
            <Link {...css.links} href="/">
              About Us
            </Link>
            <Link {...css.links} href="#destination">
              Tour
            </Link>
            <Link {...css.links} href="#gallery">
              Gallery
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  footer: {
    padding: {
      base: "18px 0",
      lg: "36px 0",
    },
    backgroundColor: "#112347",
  },
  name: {
    color: "#fff",
    fontSize: "18px",
    lineHeight: "25px",
    fontWeight: "500",
    textTransform: "capitalize",
    marginTop: "18px",
  },
  links: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    marginTop: "12px",
    transition: "0.3s",
    textAlign: "center",
    _hover: {
      textDecoration: "none",
      color: "#27ac5e",
    },
  },
};
