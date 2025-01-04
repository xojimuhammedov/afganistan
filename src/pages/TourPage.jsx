import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { BASE_URL } from "../data";
import axios from "axios";

export const BASE_URL = "https://test.al-muamalat.uz/files/";

function TourPage() {
  const { id } = useParams();
  const [tour, setTour] = useState([]);

  useEffect(() => {
    axios
      .get(`https://test.al-muamalat.uz/api/blog-destination`)
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
      </Box>
    </Box>
  );
}

export default TourPage;

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
};
