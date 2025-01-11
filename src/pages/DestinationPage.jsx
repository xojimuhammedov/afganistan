import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { BASE_URL } from "../data";
import axios from "axios";

export const BASE_URL = "https://test.al-muamalat.uz/files/";

function DestinationPage() {
  const { id } = useParams();
  const [tour, setTour] = useState([]);

  useEffect(() => {
    axios
      .get(`https://test.al-muamalat.uz/api/tour-destination`)
      .then((res) => setTour(res.data.data.find((item) => item?.id === id)))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Box p={"36px 0"}>
      <Box className="container">
        <Image
          {...css.image}
          src={`${BASE_URL}/${tour?.images?.[0]?.url?.replace("uploads/", "")}`}
          alt="TourImage"
        />
        <Heading {...css.title}>{tour?.title}</Heading>
        <Text
          {...css.text}
          dangerouslySetInnerHTML={{ __html: tour?.description }}
        />
        <Flex
          ml={{ base: "0", lg: "36px" }}
          mt={"24px"}
          align={{ base: "baseline", lg: "center" }}
          flexDirection={{ base: "column", lg: "row" }}
          gap={"24px"}>
          <Link {...css.link} href="https://t.me/Ramziddin_wrt" target="_blank">
            Contact for Telegram
          </Link>
          <Link {...css.link} target="_blank" href="tel:+998993087865">
            Contact for Phone
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default DestinationPage;

const css = {
  image: {
    w: "100%",
    h: {
      base: "300px",
      lg: "700px",
    },
    borderRadius: "8px",
    objectFit: "cover",
  },
  title: {
    mt: "24px",
    color: "#171717",
    fontSize: "32px",
    lineHeight: "42px",
    paddingLeft: {
      base: "0",
      lg: "36px",
    },
  },
  text: {
    mt: "12px",
    color: "#525252",
    fontSize: "16px",
    lineHeight: "24px",
    width: {
      base: "100%",
      lg: "850px",
    },
    paddingLeft: {
      base: "0",
      lg: "36px",
    },
  },
  link: {
    padding: "12px 24px",
    background: "#112347",
    color: "#fff",
    borderRadius: "12px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    transition: "0.3s",
    _hover: {
      textDecoration: "none",
    },
  },
};
