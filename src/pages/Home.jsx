import React, { useEffect } from 'react';
import { Typography, Container, Box, Card, CardMedia, CardContent, Grid, Slider, Slide, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import boutiqueImage1 from '../images/1.webp';
import boutiqueImage2 from '../images/2.webp';
import boutiqueImage3 from '../images/3.webp';
import boutiqueImage4 from '../images/4.webp';
import boutiqueImage5 from '../images/5.webp';
import boutiqueImage6 from '../images/6.webp';
import boutiqueImage7 from '../images/1.webp';
import boutiqueImage8 from '../images/2.webp';
import boutiqueImage9 from '../images/3.webp';
import boutiqueImage10 from '../images/4.webp';
import boutiqueImage11 from '../images/5.webp';
import boutiqueImage12 from '../images/6.webp';

import SlidingImages from '../components/SlidingImages';


import LV from "../images/lv.png"
import Zara from "../images/zara.png"
import Adidas from "../images/adidas.png"
import Burberry from "../images/br.png"
import HM from "../images/hm.png"
import Chanel from "../images/ch.png"
import Puma from "../images/puma.png"
import Prada from "../images/p.png"
import Mango from "../images/m.png"
import NorthFace from "../images/nn.png"
import SuperDry from "../images/ss.png"
import Versace from "../images/v.png"
import Levis from "../images/levis.png"
import BrandGroup from '../components/BrandGroup';
import Footer from '../components/Footer';

const Home = () => {
  const boutiqueImages = [boutiqueImage1, boutiqueImage2, boutiqueImage3, boutiqueImage4, boutiqueImage5, boutiqueImage6,boutiqueImage7,boutiqueImage8,
    boutiqueImage9,boutiqueImage10,boutiqueImage11,boutiqueImage12];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const brands = [
    { name: 'LV', image: LV },
    { name: 'Zara', image: Zara },
    { name: 'Adidas', image: Adidas },
    { name: 'Burberry', image: Burberry },
    { name: 'HM', image: HM },
    { name: 'Chanel', image: Chanel },
    { name: 'Puma', image: Puma },
    { name: 'Prada', image: Prada },
    { name: 'Mango', image: Mango },
    { name: 'North Face', image: NorthFace },
    { name: 'SuperDry', image: SuperDry },
    { name: 'Versace', image: Versace },
    { name: 'Levis', image: Levis },
  ];
  
  

  const handlePreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? boutiqueImages.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === boutiqueImages.length - 1 ? 0 : prevIndex + 1));
  };
  useEffect(() => {
    document.title = 'Home'; // Set the title to "Login" when the component mounts
  }, []);

  return (
    <>
    <Container>
              <SlidingImages images={boutiqueImages} />
      <Box my={3}>
        <Typography mb={1} variant="h4" component="h1" align="center">
          Premium Boutiques
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {boutiqueImages.map((image, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia component="img" height="250" image={image} alt={`Boutique ${index + 1}`} />
                <CardContent>
                  <Typography variant="subtitle1" component="div" align="center">
                    Boutique {index + 1}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
   
    <BrandGroup brandData={brands} />
    </Container>
   
   
    <Footer/>
          </>
  );
};

export default Home;
