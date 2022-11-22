import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, IconButton, Link, Typography, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import Logo from "../img/vcclogo.png";

function Footer() {
  return (
    <>
      <Box
        id="divFooter"
        component="main"
        textAlign="center"
        sx={{ p: 3, backgroundColor: "#eeeeee" }}
      >
        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-around"
          sx={{
            mb: 5,
            "@media (max-width: 600px)": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            {/* <img src={Logo} width={150} height={45} alt="LOGO" /> */}
            LOGO
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <CallIcon />
            <Typography>8268885789</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <WhatsAppIcon />
            <Typography>9792038071</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <EmailIcon />
            <Typography>jeams.jamalvaris@gmail.com</Typography>
          </Stack>
        </Stack>
        <Grid container spacing={5} textAlign="center">
          <Grid item xs={12} sm={12} md={12}>
            <Stack spacing={2} direction="row" justifyContent="center" mb={1}>
              <IconButton
                aria-label="facebook"
                sx={{
                  "&:hover, &.Mui-focusVisible": {
                    color: "#3b5998",
                  },
                }}
              >
                <Link
                  aria-label="facebook"
                  href="#"
                  target="_blank"
                  sx={{ color: "inherit", textDecoration: "none" }}
                >
                  <FacebookIcon fontSize="medium" />
                </Link>
              </IconButton>
              <IconButton
                aria-label="twitter"
                sx={{
                  "& :hover, & .Mui-focusVisible": {
                    color: "#00acee",
                  },
                }}
              >
                <Link
                  href="#"
                  target="_blank"
                  aria-label="twitter"
                  sx={{ color: "inherit", textDecoration: "none" }}
                >
                  <TwitterIcon fontSize="medium" />
                </Link>
              </IconButton>
              <IconButton
                aria-label="instagram"
                sx={{
                  "& :hover, & .Mui-focusVisible": {
                    color: "#fb3958",
                  },
                }}
              >
                <Link
                  href="#"
                  target="_blank"
                  aria-label="instagram"
                  sx={{ color: "inherit", textDecoration: "none" }}
                >
                  <InstagramIcon fontSize="medium" />
                </Link>
              </IconButton>
              <IconButton
                aria-label="youtube"
                sx={{
                  "& :hover, & .Mui-focusVisible": {
                    color: "#FF0000",
                  },
                }}
              >
                <Link
                  aria-label="youtube"
                  href="https://www.youtube.com/channel/UC64nNcrBrUkz2WAgUSLyYCA"
                  target="_blank"
                  sx={{ color: "inherit", textDecoration: "none" }}
                >
                  <YouTubeIcon fontSize="medium" />
                </Link>
              </IconButton>
              <IconButton
                aria-label="linkedin"
                sx={{
                  "& :hover,:focus": {
                    color: "#0e76a8",
                  },
                  borderRadius: "2px",
                }}
              >
                <Link
                  aria-label="linkedin"
                  href="#"
                  target="_blank"
                  sx={{ color: "inherit", textDecoration: "none" }}
                >
                  <LinkedInIcon fontSize="medium" />
                </Link>
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Footer;
