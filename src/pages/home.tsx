import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerComponent from "../components/drawer";
import React from "react";
import { listPages } from "../consts/pages";
import Pdv from "./pdv";
import Products from "./products/products";
import Report from "./report";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}
function Home(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selectedPage, setSelectedPage] = React.useState(listPages[0].id);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handlePage = (page: string) => {
    const pageId = listPages.findIndex(
      (item: { id: string; name: string }) => item.id === page
    );
    setSelectedPage(listPages[pageId].id);
    handleDrawerClose();
  };

  const renderSelectedPage = () => {
    if (selectedPage === "pdv") {
      return <Pdv />;
    } else if (selectedPage === "products") {
      return <Products />;
    } else {
      return <Report />;
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: mobileOpen ? `calc(100% - ${drawerWidth}px)` : `100%` },
          ml: { sm: mobileOpen ? `${drawerWidth}px` : "0px" },
        }}
      >
        <div style={{ paddingInline: 16 }}>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Paper Freitas
            </Typography>
          </Toolbar>
        </div>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <DrawerComponent onHandlePage={handlePage} />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {renderSelectedPage()}
      </Box>
    </Box>
  );
}

export default Home;
