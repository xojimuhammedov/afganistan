import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Contact() {
  return (
    <Box id="contact" bg={"#F5F5F5"} p={"36px 0"}>
      <Box className="container">
        <Heading {...css.title}>Contact Us</Heading>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          justify={"space-between"}
          align={"center"}
          mt={"36px"}>
          <Box {...css.left}>
            <Heading {...css.name}>Contact Information</Heading>
            <Text {...css.text}>Say something to start a live chat!</Text>
            <Link {...css.link} target="_blank" href="tel+998993087865">
            +998 99 308 78 65
            </Link>
            <Link
              {...css.link}
              href="mailto:info@visitafganistan.uz"
              target="_blank">
              info@visitafganistan.uz
            </Link>
            {/* <Link
              target="_blank"
              href={"https://maps.app.goo.gl/SWr6Dqkd9X9S79iz6"}
              {...css.link}>
              Uzbekistan, Tashkent city, Mirabad district, Chimkent street 7
            </Link> */}
          </Box>
          <Box {...css.right}>
            <SimpleGrid gap={"16px"} columns={{ base: 1, lg: 2 }}>
              <input
                className="form-input"
                placeholder="First Name"
                type="text"
              />
              <input
                className="form-input"
                placeholder="Last Name"
                type="text"
              />
            </SimpleGrid>
            <SimpleGrid
              gap={"16px"}
              m={{ base: "16px 0", lg: "36px 0" }}
              columns={{ base: 1, lg: 2 }}>
              <input className="form-input" placeholder="Email" type="email" />
              <input
                className="form-input"
                placeholder="Phone Number"
                type="number"
              />
            </SimpleGrid>
            <textarea
              className="form-textarea"
              placeholder="Write your message"
            />
            <Button {...css.button}>Submit</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Contact;

const css = {
  title: {
    fontSize: {
      base: "35px",
      lg: "50px",
    },
    lineHeight: {
      base: "45px",
      lg: "60px",
    },
    fontWeight: "500",
    textAlign: "center",
    color: "#112347",
  },
  link: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    display: "block",
    margin: "32px 0",
    transition: "0.3s",

    _hover: {
      textDecoration: "none",
    },
  },
  left: {
    borderRadius: "10px",
    backgroundColor: "#011D2B",
    padding: {
      base: "10px",
      lg: "30px",
    },
    width: {
      base: "100%",
      lg: "450px",
    },
    height: {
      base: "100%",
      lg: "500px",
    },
  },
  name: {
    color: "#fff",
    fontSize: "24px",
    lineHeight: "30px",
    fontWeight: "500",
    marginBottom: "12px",
    paddingTop: "24px",
  },
  text: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "25px",
    marginBottom: "120px",
  },
  right: {
    borderRadius: "10px",
    backgroundColor: "#fff",
    padding: {
      base: "10px",
      lg: "20px",
    },
    width: {
      base: "100%",
      lg: "700px",
    },
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: "8px",
    width: "100%",
    height: "45px",

    _focus: {
      outline: "none",
      borderWidth: "1px",
    },
  },
  button: {
    width: "100%",
    backgroundColor: "#112347",
    color: "#fff",
    marginTop: "24px",
    height: "45px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    transition: "0.3s",

    _hover: {
      backgroundColor: "#011D2B",
    },
  },
  textarea: {
    backgroundColor: "#F5F5F5",
    borderRadius: "8px",
    width: "100%",
    height: "150px",
    resize: "none",
  },
};
