import { Box, Heading } from "@chakra-ui/react";
import React from "react";

import HeaderBanner from "../assets/header.jpg";

function Header() {
  return (
    <Box {...css.header}>
      <Box className="container">
        <Heading {...css.title}>
          Experience the Heart of Asia – Afghanistan Awaits
        </Heading>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  header: {
    backgroundImage: `url(${HeaderBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: {
      base: "400px",
      lg: "100vh",
    },
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    flexDirection: "column",
    textAlign: "center",
  },
  title: {
    fontSize: {
      base: "26px",
      lg: "4rem",
    },
    fontWeight: "bold",
    textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
    width: {
      base: "90%",
      lg: "55%",
    },
    margin: "auto",
  },
};
