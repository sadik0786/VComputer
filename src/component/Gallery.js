import * as React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../theme";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1590521384899-b95398247890",
    title: "Work From Home",
    author: "Work From Home",
  },
];
function Gallery() {
  return (
    <>
      <Box
       
        sx={{
          py: 1,
          px:5,
          backgroundColor: theme.palette.secondary.main,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ImageList gap={30}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=400`}
                srcSet={`${item.img}?w=400`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar title={item.title} subtitle={item.author} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}
export default Gallery;
