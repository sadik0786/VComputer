import * as React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function ProductItem(props) {
  return (
    <>
      <Box>
        <Card sx={{ maxWidth: 350, margin: "0px auto" }}>
          <CardMedia
            component="img"
            height="250"
            image={props.itemImg}
            alt={props.itemName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.itemName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.itemDescription}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
export default ProductItem;
