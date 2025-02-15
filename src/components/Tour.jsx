import { Box, Flex, Heading, Image, SimpleGrid, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const BASE_URL = "https://test.al-muamalat.uz/files/";

function Tour() {
  const [tour, setTour] = useState([]);

  useEffect(() => {
    axios
      .get("https://test.al-muamalat.uz/api/blog-destination")
      .then((res) => setTour(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box id="destination" p={"36px 0"}>
      <Box className="container">
        <Flex {...css.list}>
          <Heading {...css.title}>
            Browse our selection of carefully curated travel packages
          </Heading>
          <Text {...css.text}>
            Discover a collection of expertly designed packages, combining
            adventure, culture, and stunning landscapes, each promising a
            journey to remember.
          </Text>
        </Flex>
        <SimpleGrid
          gap={"32px"}
          mt={"32px"}
          columns={{ base: 1, sm: 2, lg: 3 }}>
          {tour?.data?.map((item, index) => (
            <Box key={index}>
              <Image
                {...css.image}
                src={`${BASE_URL}/${item?.images?.[0]?.url?.replace(
                  "uploads/",
                  ""
                )}`}
                alt="TourImage"
              />
              <Heading {...css.name}>{item?.title}</Heading>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to={`/tour/${item?.id}`}>
                <Button {...css.button}>Learn More</Button>
              </Link>
              {/* <Link
                onClick={() => window.scrollTo(0, 0)}
                to={`/tour/${item?.id}`}>
                Learn More
              </Link> */}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Tour;

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
      base: "45px",
      md: "60px",
    },
    fontWeight: "500",
    color: "#112347",
  },
  text: {
    fontSize: "16px",
    lineHeight: "25px",
    color: "#a2a2a2",
    width: {
      base: "100%",
      lg: "600px",
    },
  },
  name: {
    fontSize: "24px",
    lineHeight: "30px",
    fontWeight: "500",
    color: "#112347",
    marginTop: "24px",
  },
  texts: {
    fontSize: "14px",
    lineHeight: "25px",
    color: "#a2a2a2",
    marginTop: "12px",
  },
  image: {
    borderRadius: "12px",
    height: "450px",
    objectFit: "cover",
    width: "100%",
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
    borderRadius:"20px",

    _hover: {
      backgroundColor: "#0f2248",
    },
  },
};
