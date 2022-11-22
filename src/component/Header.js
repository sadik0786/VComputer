import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Logo from "../img/vcclogo.png";

const drawerWidth = 200;
const navItems = ["Home", "Product", "About", "Contact"];

export default function DrawerAppBar(props) {
 
  const { window1 } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const scrollToBottom = (value) => {
    // debugger;
    
    var prd = document.getElementById("div"+value);
   // alert(prd);
    if (prd !== undefined && prd !== null) {
      window.scrollTo({
        left: 0,
        top: prd.offsetTop - 55,
        behavior: "smooth",
      });
    }
    
  };
  useEffect(() => {}, []);
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <IconButton sx={{ p: 2 }}>
        <img src={Logo} width={80} alt="LOGO" />
        {/* LOGO */}
      </IconButton>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={item}
                onClick={() => {
                  scrollToBottom(item);
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window1 !== undefined ? () => window().document.body : undefined;

  return (
    <Box id="divHome"  sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#eeeeee",
          boxShadow: "0px 2px 5px 0px #d6d6d6",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#000" }} />
          </IconButton>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <IconButton
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                    "&.MuiIconButton-root:hover": {
                      backgroundColor: "unset",
                    },
                  },
                }}
              >
                <img src={Logo} width={150} height={40} alt="VCC LOGO" />
                {/* LOGO */}
              </IconButton>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={8}
              lg={8}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "#000",
                      fontWeight: 600,
                      "&:hover": {
                        color: "#E10700",
                        backgroundColor: "#0000000a",
                      },
                    }}
                    onClick={() => {
                      scrollToBottom(item);
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
