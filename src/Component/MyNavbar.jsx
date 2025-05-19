import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography, Box, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';

function MyNavbar() {
  const [anchorNav, setAnchorNav] = useState(null);

  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  return (
    <AppBar position='static' sx={{ bgcolor: 'white', boxShadow: 0,padding:0 }}>
      <Toolbar sx={{ width: '100%', maxWidth: '1400px', mx: 'auto',padding:0}}>
        {/* Logo ve Başlık */}
        <Typography
          variant='h6'
          component='div'
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            color: 'black',
            ml: 2,
            fontSize: { xs: '1rem', md: '1.5rem' } // Küçük ekranlarda yazı boyutu daha küçük
          }}
        >
          GAZİANTEP OTO KURTARMA
        </Typography>

        {/* Menü Butonları */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Button
            color='inherit'
            component={Link}
            to='/'
            sx={{
              mr: 2,
              color: 'black',
              fontSize: { xs: '0.8rem', md: '1rem' }, // Küçük ekranlarda yazı boyutu daha küçük
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.1)' },
              px: 1,
            }}
          >
            Anasayfa
          </Button>
          <Button
            color='inherit'
            component={Link}
            to='/HizmetBolgelerimiz'
            sx={{
              mr: 2,
              color: 'black',
              fontSize: { xs: '0.8rem', md: '1rem' }, // Küçük ekranlarda yazı boyutu daha küçük
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.1)' },
              px: 1,
            }}
          >
            Hizmet Bölgelerimiz
          </Button>
          <Button
            color='inherit'
            href='tel:05432071130'
            startIcon={<PhoneIcon />}
            sx={{
              color: 'black',
              fontSize: { xs: '0.8rem', md: '1rem' }, // Küçük ekranlarda yazı boyutu daha küçük
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.1)' },
              px: 1,
            }}
          >
            İletişim: 05432071130
          </Button>
        </Box>

        {/* Menü İkonu ve Menü */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size='large' edge='start' color='inherit' onClick={openMenu}>
            <MenuIcon sx={{ color: 'black', fontSize: { xs: '2rem', md: '2.5rem' } }} />
          </IconButton>
          <Menu
            anchorEl={anchorNav}
            open={Boolean(anchorNav)}
            onClose={closeMenu}
            sx={{ display: { xs: 'flex', md: 'none' }, mt: 2 }}
          >
            <MenuItem component={Link} to='/' onClick={closeMenu}>
              Anasayfa
            </MenuItem>
            <MenuItem component={Link} to='/HizmetBolgelerimiz' onClick={closeMenu}>
              Hizmet Bölgelerimiz
            </MenuItem>
            <MenuItem component='a' href='tel:05432071130' onClick={closeMenu}>
              <PhoneIcon sx={{ mr: 1, fontSize: { xs: '1.5rem', md: '2rem' } }} /> İletişim: 05432071130
            </MenuItem>
          </Menu>
        </Box>

        {/* Mobil Logo ve Buton */}
        <Typography
          variant='h7'
          component='div'
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            color: 'black',
            fontSize: { xs: '1rem', md: '1.5rem' } // Küçük ekranlarda yazı boyutu daha küçük
          }}
        >
          GAZIANTEP OTO KURTARMA
        </Typography>
        <Button
          color='inherit'
          href='tel:05432071130'
          startIcon={<PhoneIcon />}
          sx={{
            display: { xs: 'flex', md: 'none' },
            color: 'black',
            fontSize: { xs: '0.8rem', md: '1rem' }, // Küçük ekranlarda yazı boyutu daha küçük
            px: 2,
          }}
        >
          
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default MyNavbar;