import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Rating,
  Grid,
} from "@mui/material";

import boutiqueImage1 from "../images/1.webp";
import boutiqueImage2 from "../images/2.webp";
import boutiqueImage3 from "../images/3.webp";
import boutiqueImage4 from "../images/4.webp";
import boutiqueImage5 from "../images/5.webp";
import boutiqueImage6 from "../images/6.webp";
import boutiqueImage7 from "../images/1.webp";
import boutiqueImage8 from "../images/2.webp";
import boutiqueImage9 from "../images/3.webp";
import boutiqueImage10 from "../images/4.webp";
import boutiqueImage11 from "../images/5.webp";
import boutiqueImage12 from "../images/6.webp";

import {add} from "../store/cartSlice"
import { useDispatch } from "react-redux";


const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$9.99",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ipsum id eros condimentum varius.",
    image: boutiqueImage1,
  },
  {
    id: 2,
    name: "Product 2",
    price: "$19.99",
    rating: 3.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ipsum id eros condimentum varius.",
    image: boutiqueImage2,
  },
  {
    id: 3,
    name: "Product 3",
    price: "$14.99",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ipsum id eros condimentum varius.",
    image: boutiqueImage3,
  },
  {
    id: 4,
    name: "Product 4",
    price: "$12.99",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ipsum id eros condimentum varius.",
    image: boutiqueImage4,
  },
  {
    id: 5,
    name: "Product 5",
    price: "$8.99",
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ipsum id eros condimentum varius.",
    image: boutiqueImage5,
  },
  {
    id: 6,
    name: "Product 6",
    price: "$24.99",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ipsum id eros condimentum varius.",
    image: boutiqueImage6,
  },
  {
    id: 7,
    name: "Product 7",
    price: "$24.99",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ipsum id eros condimentum varius.",
    image: boutiqueImage7,
  },
  {
    id: 8,
    name: "Product 8",
    price: "$24.99",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ipsum id eros condimentum varius.",
    image: boutiqueImage8,
  },
  {
    id: 9,
    name: "Product 9",
    price: "$24.99",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ipsum id eros condimentum varius.",
    image: boutiqueImage9,
  },
  {
    id: 10,
    name: "Product 10",
    price: "$24.99",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ipsum id eros condimentum varius.",
    image: boutiqueImage10,
  },
  {
    id: 11,
    name: "Product 11",
    price: "$24.99",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ipsum id eros condimentum varius.",
    image: boutiqueImage11,
  },
  {
    id: 12,
    name: "Product 12",
    price: "$24.99",
    rating: 4.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis ipsum id eros condimentum varius.",
    image: boutiqueImage12,
  },
];

const Product = () => {

  const [cartItems, setCartItems] = useState([]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(add(product)); // Dispatch the 'add' action with the product payload
  };

  useEffect(() => {
    document.title = 'Products'; // Set the title to "Login" when the component mounts
  }, []);
  return (
    <>
      <Typography variant="h2">Products</Typography>{" "}
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        {/* <Typography variant="h2">Products</Typography> */}
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: "100%" }}>
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "75%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    gutterBottom
                  >
                    Price: {product.price}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Rating
                      name="product-rating"
                      value={product.rating}
                      precision={0.5}
                      readOnly
                    />
                    <Typography variant="body2" color="textSecondary" ml={1}>
                      ({product.rating})
                    </Typography>
                  </Box>
                  <Typography variant="body2">{product.description}</Typography>
                </CardContent>
                <CardActions>
                <Button size="small" onClick={() => handleAddToCart(product)}>                  
                    Add to Cart
                  </Button>
                  <Button size="small">Buy Now</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Product;
