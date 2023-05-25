import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Badge, useMediaQuery, useTheme } from '@mui/material';
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import Logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const items=useSelector((state)=>state.cart)
  const cartItemsLength = items.length;
  return (
    <AppBar
      position="static"
      sx={{
        height: 74,
        backgroundColor: 'white',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
       
      }}
    >
      <Toolbar
         sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            padding: isMobile ? '10px' : '0',
            flexWrap: 'wrap',
          }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: isMobile ? '10px' : '27px',
            marginRight: isMobile ? '0' : '20px', // Add margin to the right
            marginTop: isMobile ? '10px' : '2px', // Add margin to the top
          }}
        >
         <Link to="/"> <img
            src={Logo}
            alt="Firstcry Logo"
            style={{
              width: isMobile ? '70px' : '100px',
            //   height: 'auto',
              marginRight: '33px',
              marginBottom: isMobile ? '10px' : '-15px',
            }}
          /></Link>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              width: isMobile ? '50%' : '400px',
              maxWidth: '350px',
              marginRight: isMobile ? '0' : '20px', // Add margin to the right
              marginBottom: isMobile ? '10px' : '-15px',
            }}
          >
            <InputBase
              placeholder={isMobile?'Search Online':'Search for a Category, Brand or Product'}
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                ml: isMobile ? '10px' : '0',
                p: '5px 5px',
                height: '30px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                border: '1px solid lightgray',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                fontSize: isMobile ? '14px' : '16px',
              }}
            />
            <IconButton sx={{ p: '10px', position: 'absolute', right: 5, color: 'red' }}>
              <SearchIcon fontSize={isMobile ? 'small' : 'default'} />
            </IconButton>
          </div>
        </div>

        <Link to="/cart">
        <IconButton sx={{ mt: isMobile ? 3 : 0 }}>
  <Badge badgeContent={cartItemsLength} color="secondary">
    <ShoppingCartIcon fontSize={isMobile ? 'small' : 'default'} />
  </Badge>
</IconButton>
        </Link>


      </Toolbar>
    </AppBar>
  );
};

export default Header;
