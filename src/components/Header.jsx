import { Box } from "@chakra-ui/react";
import React from "react";

import HeaderBanner from "../assets/header-banner.jpg";

function Header() {
  return (
    <Box {...css.header}>
      <Box className="container"></Box>
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
};
