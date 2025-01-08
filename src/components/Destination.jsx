import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

export const BASE_URL = "https://test.al-muamalat.uz/files/";

function Destination() {
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    axios
      .get("https://test.al-muamalat.uz/api/tour-destination")
      .then((res) => setDestination(res.data))
      .catch((err) => console.log(err));
  }, []);
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
        <SimpleGrid
          mt={"48px"}
          gap={"24px"}
          columns={{ base: 1, sm: 2, lg: 3 }}>
          {destination?.data?.map((item, index) => (
            <Box key={index} {...css.item}>
              <Image
                src={`${BASE_URL}/${item?.images?.[0]?.url?.replace(
                  "uploads/",
                  ""
                )}`}
                {...css.image}
              />
              <Heading {...css.subname}>{item?.title}</Heading>
              <Text
                {...css.texts}
                dangerouslySetInnerHTML={{
                  __html: item?.description?.slice(0, 95),
                }}
              />

              <Link
                onClick={() => window.scrollTo(0, 0)}
                to={`/destination/${item?.id}`}>
                <Button {...css.button}>Learn More</Button>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Destination;

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
      base: "40px",
      md: "60px",
    },
    fontWeight: "500",
    color: "#112347",
    width: {
      base: "100%",
      lg: "800px",
    },
  },
  text: {
    fontSize: "16px",
    lineHeight: "25px",
    color: "#a2a2a2",
    width: {
      base: "100%",
      lg: "420px",
    },
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
    fontSize: "16px",
    lineHeight: "24px",
    color: "#525252",
    padding: "0 15px",
  },
  images: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  item: {
    borderRadius: "8px",
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 16px 0px",
    background: "#fff",
    width: "100%",
    paddingBottom: "24px",
  },
  subname: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: "600",
    color: "#171717",
    padding: "0 15px",
    margin: "10px 0",
    marginTop: "18px",
  },
  image: {
    borderRadius: "8px 8px 0 0",
    objectFit: "cover",
    width: "100%",
    height: "260px",
  },
  button: {
    backgroundColor: "#112347",
    color: "#fff",
    height: "45px",
    width: "90%",
    margin: "10px 15px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    marginTop: "20px",
    transition: "0.3s",

    _hover: {
      backgroundColor: "#0f2248",
    },
  },
};
