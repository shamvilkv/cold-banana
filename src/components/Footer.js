import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Grid container sx={{ mt: 15 }} display="flex">
      <Grid
        xs={4}
        sx={{
          pr: 2,
          backgroundImage: `url(${"/assets/Vector.svg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ p: 5 }}>
          <Typography
            sx={{
              mt: 10,
              color: "white",
              fontWeight: 700,
              fontSize: "20px",
              mb: 2,
            }}
          >
            CHILLED GRAPE
          </Typography>
          <Typography sx={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet.
          </Typography>
        </Box>
      </Grid>
      <Grid xs={2}>
        <Stack spacing={2} sx={{ ml: 2 }}>
          <Typography
            sx={{
              backgroundcolor: "primary",
              backgroundImage:
                "linear-gradient(90.71deg, #73E0A9 0%, #5B68DF 100%)",
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 500,
              mt: 10,
            }}
          >
            Company
          </Typography>
          <Typography>About</Typography>
          <Typography>Careers</Typography>
          <Typography>Our work</Typography>
          <Typography>Contact</Typography>
        </Stack>
      </Grid>

      <Grid xs={2}>
        <Stack spacing={2}>
          <Typography
            sx={{
              backgroundcolor: "primary",
              backgroundImage:
                "linear-gradient(90.71deg, #73E0A9 0%, #5B68DF 100%)",
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 500,
              mt: 10,
            }}
          >
            Products
          </Typography>
          <Typography>About</Typography>
          <Typography>Careers</Typography>
          <Typography>Our work</Typography>
          <Typography>Contact</Typography>
        </Stack>
      </Grid>

      <Grid xs={4}>
        <Stack spacing={2}>
          <Typography
            sx={{
              backgroundcolor: "primary",
              backgroundImage:
                "linear-gradient(90.71deg, #73E0A9 0%, #5B68DF 100%)",
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 500,
              mt: 10,
            }}
          >
            Follow us
          </Typography>
          <Stack direction={"row"} spacing={4}>
            <Box
              component={"img"}
              src="/assets/Group 26.svg"
              width={45}
              height={45}
            />
            <Box
              component={"img"}
              src="/assets/Group 27.svg"
              width={45}
              height={45}
            />
            <Box
              component={"img"}
              src="/assets/Group 28.svg"
              width={45}
              height={45}
            />
          </Stack>
          <Stack direction={"row"} spacing={4}>
            <Box
              component={"img"}
              src="/assets/Group 29.svg"
              width={45}
              height={45}
            />
            <Box
              component={"img"}
              src="/assets/Group 30.svg"
              width={45}
              height={45}
            />
            <Box
              component={"img"}
              src="/assets/Group 31.svg"
              width={45}
              height={45}
            />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
