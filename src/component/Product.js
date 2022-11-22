import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";

import TabListItem from "./FullWidthTabs";

function Product() {
  return (
    <>
      <Box sx={{ px: {
        xs:1,
        sm:1,
        md:5,
        lg:5,
      }, py: 3 }}  id="divProduct">
        <Typography variant="h4" textAlign="center">
          Product
        </Typography>
        <Box mt={3}>
          <TabListItem />
        </Box>
        
      </Box>
    </>
  );
}
export default Product;
