import * as React from "react";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { AppBar, Button, styled } from "@mui/material";

const HomeAppBar = () => {
  const StyledButton = styled(Button)({
    paddingRight: "40px",
    paddingLeft: "40px",
    background: "linear-gradient(90deg, #73E0A9 0%, #5B68DF 100%)",
    color: "white",
    fontWeight: 600,
    border: "none",
  });

  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
      elevation={0}
      sx={{ p: 3 }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, fontSize: "30px", fontWeight: 700 }}
        >
          CHILLED GRAPE
        </Typography>
        <nav
          style={{
            fontWeight: 600,
            fontSize: "16px",
            textDecoration: "none",
          }}
        >
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Home
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            About
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Blog
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Pricing
          </Link>
        </nav>
        <StyledButton
          variant="outlined"
          sx={{
            fontSize: "16px",
            marginLeft: "20px",
          }}
        >
          Login
        </StyledButton>
      </Toolbar>
    </AppBar>
  );
};

export default HomeAppBar;
