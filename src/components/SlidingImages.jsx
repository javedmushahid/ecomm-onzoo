import React from 'react';
import { Box, Card, CardMedia, Grid, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const SlidingImages = ({ images, width }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box mt={1} position="relative" width={width}>
      <IconButton
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
        onClick={handlePreviousSlide}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
        onClick={handleNextSlide}
      >
        <ArrowForwardIos />
      </IconButton>
      <Grid container spacing={2} justifyContent="center">
        {images.map((image, index) => (
          <Grid item key={index}>
            <Card sx={{ display: index === currentIndex ? 'block' : 'none' }}>
              <CardMedia
                sx={{ mt: 2 }}
                component="img"
                height="450"
                image={image}
                alt={`Slide ${index + 1}`}
                style={{ objectFit: 'cover' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SlidingImages;
