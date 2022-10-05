import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

import { styled } from "@mui/material";
import ProductCard from "./components/ProductCard";
import HomeAppBar from "./components/AppBar";
import axios from "axios";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProducts] = useState([]);

  const [limit, setLimit] = useState(6);

  const getProducts = async () => {
    const res = await axios.get(
      "https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products"
    );

    setProducts(res.data[0]);
  };

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{
          ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
          },
        }}
      />
      <Box
        sx={{ backgroundImage: `url(${"/assets/Hero.svg"})`, height: "800px" }}
      >
        <HomeAppBar />
        <Container>
          <Box sx={{ my: 4, p: 20 }}>
            <Typography
              variant="h1"
              sx={{ fontWeight: 700, fontSize: "64px", mb: 2 }}
            >
              Lorem ipsum
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontWeight: 700, fontSize: "64px", mb: 2 }}
            >
              dolor sit amet.
            </Typography>
            <StyledButton
              variant="outlined"
              sx={{
                fontSize: "16px",
                textTransform: "capitalize",
              }}
            >
              Read More
            </StyledButton>
          </Box>

          <Grid container sx={{ mt: 30 }} display={"flex"} alignItems="center">
            <Grid item xs={7}>
              <Typography
                variant="h1"
                sx={{ fontWeight: 700, fontSize: "30px", mb: 2 }}
              >
                Lorem ipsum dolor sit amet.
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </Typography>
              <StyledButton
                variant="outlined"
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                  mt: 5,
                }}
              >
                Read More
              </StyledButton>
            </Grid>
            <Grid item xs={5}>
              <Box
                component="img"
                src="/assets/Image Blob.svg"
                sx={{ width: 600, height: 700 }}
              />
            </Grid>
          </Grid>

          <Grid container sx={{ mt: 20 }}>
            {products.map(
              (item, i) =>
                i < limit && (
                  <Grid key={item.id} item xs={4} sx={{ mb: 6 }}>
                    <ProductCard item={item} />
                  </Grid>
                )
            )}
          </Grid>
          <Grid container>
            <Grid item>
              <Button onClick={() => setLimit(products.length)} sx={{ pl: 0 }}>
                <Typography sx={{ color: "#5C6DDE", fontWeight: 600 }}>
                  Load More
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>

        <Footer />
      </Box>
    </React.Fragment>
  );
}

const StyledButton = styled(Button)({
  paddingRight: "40px",
  paddingLeft: "40px",
  background: "linear-gradient(90deg, #73E0A9 0%, #5B68DF 100%)",
  color: "white",
  fontWeight: 600,
  border: "none",
});
