import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <Box
      bgcolor="#f5f5f5"

      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
      height='400px'
      mt={2}
    >
      <Box display="flex" alignItems="center" justifyContent="center" gap={2} mb={10}>
        <Typography variant="subtitle1" component="p" textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }}>
          2 Lakhs +
        </Typography>
        <Typography variant="subtitle1" component="p" textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }}>
          Unique Products
        </Typography>
        <Typography variant="subtitle1" component="p" textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }}>
          5800 Brands
        </Typography>
        <Typography variant="subtitle1" component="p" textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }}>
          7.5 Million
        </Typography>
        <Typography variant="subtitle1" component="p" textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }}>
          Registered Users
        </Typography>
        <Typography variant="subtitle1" component="p" textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }}>
        Easy Return, Replacement & Exchange Policy
      </Typography>
      <Typography variant="subtitle1" component="p" textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }}>
        <span style={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }}>Free Shipping Available</span> above ₹ 699*
      </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start" mb={4} ml={2} width="100%">
  <Typography variant="subtitle1" component="p" textAlign="center" sx={{ marginBottom: '8px' }}>
    Categories:
  </Typography>
  <Typography variant="subtitle1" component="p" textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' }, marginBottom: '8px' }}>
    Men
  </Typography>
  <Typography variant="subtitle1" component="p" textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' }, marginBottom: '8px' }}>
    Women
  </Typography>
  <Typography variant="subtitle1" component="p" textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' }, marginBottom: '8px' }}>
    Kids
  </Typography>
</Box>

      <Box display="flex" flexDirection="center" justifyContent="center" gap={2} mb={4}>
        <Typography variant="subtitle1" component="p" textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }}>
          Brand 1
        </Typography>
        <Typography variant="subtitle1" component="p" textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }}>
          Brand 2
        </Typography>
        <Typography variant="subtitle1" component="p" textAlign="center" sx={{ cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }}>
          Brand 3
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="flex-end" gap={2} mr={2}>
        <InstagramIcon sx={{ fontSize: 24, cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }} />
        <FacebookIcon sx={{ fontSize: 24, cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }} />
        <YouTubeIcon sx={{ fontSize: 24, cursor: 'pointer', '&:hover': { color: '#8DB3E2' } }} />
      </Box>
     
    </Box>
  );
};

export default Footer;
