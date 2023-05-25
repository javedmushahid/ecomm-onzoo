import React from 'react';
import { Chip, Grid, Avatar, Typography, Box } from '@mui/material';

const BrandGroup = ({ brandData }) => {
  return (
    <Box py={4} boxShadow={3} borderRadius={4}>
      <Typography variant="h5" component="h2" align="center" mb={2}>
        Brands
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {brandData.map((brand, index) => (
          <Grid item key={index} xs={2} lg={2}>
            <Chip
              avatar={<Avatar alt={brand.name} src={brand.image} />}
              label={brand.name}
              variant="outlined"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BrandGroup;
