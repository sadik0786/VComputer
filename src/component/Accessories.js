import * as React from "react";
import { Box, Grid } from "@mui/material";
import ProductItem from "./ProductItem";

function Accessories() {
  return (
    <>
      <Box
        sx={{
          py: 3,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={3}
          display="flex"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={6} md={4}>
            <ProductItem
              itemImg="https://images.unsplash.com/photo-1541363111435-5c1b7d867904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              itemName="Item 1"
              itemDescription="Lorem Ipmus ranging across all continents except Antarctica  ranging across all continents except Antarctica  ranging across all continents except Antarctica"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductItem
              itemImg="https://images.unsplash.com/photo-1541363111435-5c1b7d867904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              itemName="Item 2"
              itemDescription="Lorem Ipmus ranging across all continents except Antarctica  ranging across all continents except Antarctica  ranging across all continents except Antarctica"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductItem
              itemImg="https://images.unsplash.com/photo-1541363111435-5c1b7d867904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              itemName="Item 3"
              itemDescription="Lorem Ipmus ranging across all continents except Antarctica  ranging across all continents except Antarctica  ranging across all continents except Antarctica"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductItem
              itemImg="https://images.unsplash.com/photo-1541363111435-5c1b7d867904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              itemName="Item 4"
              itemDescription="Lorem Ipmus ranging across all continents except Antarctica  ranging across all continents except Antarctica  ranging across all continents except Antarctica"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductItem
              itemImg="https://images.unsplash.com/photo-1541363111435-5c1b7d867904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              itemName="Item 5"
              itemDescription="Lorem Ipmus ranging across all continents except Antarctica  ranging across all continents except Antarctica  ranging across all continents except Antarctica"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductItem
              itemImg="https://images.unsplash.com/photo-1541363111435-5c1b7d867904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              itemName="Item 6"
              itemDescription="Lorem Ipmus ranging across all continents except Antarctica  ranging across all continents except Antarctica  ranging across all continents except Antarctica"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Accessories;
