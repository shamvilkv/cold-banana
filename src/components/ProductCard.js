import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProductCard({ item }) {
  const { product_name, price, image } = item;
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.15)",
        borderRadius: "30px",
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{
            objectFit: "cover",
            borderRadius: "30px",
            boxShadow: "0px 8px 20px 0px #00000040",
          }}
          component="img"
          src={image}
          width="300"
          height={"300"}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#212121", fontWeight: 700, fontSize: "20px" }}
          >
            {product_name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "#747474", fontWeight: 700, fontSize: "16px" }}
          >
            £{price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
