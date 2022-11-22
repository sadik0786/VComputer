import * as React from "react";
import {Box, Grid, Typography } from "@mui/material";
import {theme} from "../theme";

function About() {
  return (
    <>
      <Box
        id="divAbout"
        sx={{
          py: 3,
          backgroundColor: theme.palette.primary.main,
          width: "100%",
          height: "350px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="space-evenly"
        >
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h4" textAlign="center">
              About Us
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default About;
