import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLanguage, Language } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageChange = (_: React.MouseEvent<HTMLElement>, newLang: Language | null) => {
    if (newLang) {
      setLanguage(newLang);
    }
  };

  const navItems = [
    { label: t('navFeatures'), href: '#features' },
    { label: t('navHowItWorks'), href: '#how-it-works' },
    { label: t('navGamification'), href: '#gamification' },
    { label: t('navDeveloper'), href: '#about-developer' },
    { label: t('navDownload'), href: '#download' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: trigger
            ? 'rgba(28, 27, 31, 0.9)'
            : 'transparent',
          backdropFilter: trigger ? 'blur(20px)' : 'none',
          boxShadow: trigger ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                component="img"
                src="/icon.png"
                alt="CouponTresor"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                }}
              />
              <Typography
                variant="h6"
                component="a"
                href="#"
                sx={{
                  fontWeight: 700,
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.5rem',
                }}
              >
                CouponTresor
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: '#D0BCFF',
                      background: 'rgba(208, 188, 255, 0.1)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              
              {/* Language Switcher */}
              <ToggleButtonGroup
                value={language}
                exclusive
                onChange={handleLanguageChange}
                size="small"
                sx={{
                  ml: 1,
                  '& .MuiToggleButton-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    borderColor: 'rgba(208, 188, 255, 0.3)',
                    px: 1.5,
                    py: 0.5,
                    fontSize: '0.85rem',
                    '&.Mui-selected': {
                      color: '#D0BCFF',
                      background: 'rgba(208, 188, 255, 0.15)',
                      borderColor: 'rgba(208, 188, 255, 0.5)',
                    },
                    '&:hover': {
                      background: 'rgba(208, 188, 255, 0.1)',
                    },
                  },
                }}
              >
                <ToggleButton value="de">DE</ToggleButton>
                <ToggleButton value="en">EN</ToggleButton>
              </ToggleButtonGroup>

              <Button
                variant="contained"
                href="#download"
                sx={{
                  background: 'linear-gradient(135deg, #6750A4, #D0BCFF)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #7B61B8, #E0D0FF)',
                  },
                }}
              >
                {t('getApp')}
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              {/* Mobile Language Switcher */}
              <ToggleButtonGroup
                value={language}
                exclusive
                onChange={handleLanguageChange}
                size="small"
                sx={{
                  '& .MuiToggleButton-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    borderColor: 'rgba(208, 188, 255, 0.3)',
                    px: 1,
                    py: 0.3,
                    fontSize: '0.75rem',
                    '&.Mui-selected': {
                      color: '#D0BCFF',
                      background: 'rgba(208, 188, 255, 0.15)',
                    },
                  },
                }}
              >
                <ToggleButton value="de">DE</ToggleButton>
                <ToggleButton value="en">EN</ToggleButton>
              </ToggleButtonGroup>
              
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: 300,
            background: 'rgba(28, 27, 31, 0.95)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: 'white', mb: 2 }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.label}
                component="a"
                href={item.href}
                onClick={handleDrawerToggle}
                sx={{
                  color: 'white',
                  '&:hover': {
                    background: 'rgba(208, 188, 255, 0.1)',
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
          <Button
            fullWidth
            variant="contained"
            href="#download"
            onClick={handleDrawerToggle}
            sx={{
              mt: 2,
              background: 'linear-gradient(135deg, #6750A4, #D0BCFF)',
            }}
          >
            {t('getApp')}
          </Button>
        </Box>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
};

export default Navbar;
