import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Badge } from '@mui/material';
import { MenuOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const items=useSelector((state)=>state.cart)
  const cartItemsLength = items.length;

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  const renderMenuItems = () => (
    <>
    
    <List style={isMobile ? { flexDirection: 'column' } : { display: 'flex' ,color:'black',fontWeight:400}}>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/products">
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button component={Link} to="/boys">
        <ListItemText primaryTypographyProps={{ noWrap: true }} primary="Boy Fashion" />
      </ListItem>
      <ListItem button component={Link} to="/girls">
        <ListItemText primaryTypographyProps={{ noWrap: true }} primary="Girl Fashion" />
      </ListItem>
      <ListItem button component={Link} to="/footwear">
        <ListItemText primary="Footwear" />
      </ListItem>
      <ListItem button component={Link} to="/toys">
        <ListItemText primary="Toys" />
      </ListItem>
      <ListItem button component={Link} to="/bath">
        <ListItemText primary="Bath" />
      </ListItem>
      <ListItem button component={Link} to="/categories">
        <ListItemText primary="Categories" />
      </ListItem>
      <ListItem button component={Link} to="/cart">
        <ListItemText primary="Cart" /> 
      </ListItem>
    </List>
    <ListItem component={Link} to="/cart">
    <div style={{ display: 'flex', alignItems: 'center', flex: 'flex-end', marginLeft: 'auto' }}>
  <IconButton sx={{ mt: isMobile ? 3 : 0 }}>
    <Badge badgeContent={cartItemsLength} color="secondary">
      <ShoppingCartOutlined fontSize={isMobile ? 'small' : 'default'} />
    </Badge>
  </IconButton>
</div>
    </ListItem>

    </>
  );

  const renderDrawer = () => (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <div
        style={{ width: 250 ,backgroundColor:'yellow'}}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        {renderMenuItems()}
      </div>
    </Drawer>
  );

  return (
    <AppBar position="static" style={{backgroundColor:'yellow'}}>
      <Toolbar>
        {isMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuOutlined />
          </IconButton>
        ) : (
          renderMenuItems()
        )}
       
        {renderDrawer()}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
