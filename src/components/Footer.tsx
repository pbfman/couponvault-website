import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
  Divider,
} from '@mui/material';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    [t('footerProduct')]: [
      { label: t('navFeatures'), href: '#features' },
      { label: t('navHowItWorks'), href: '#how-it-works' },
      { label: t('navGamification'), href: '#gamification' },
      { label: t('navDownload'), href: '#download' },
    ],
    [t('footerLegal')]: [
      { label: t('footerPrivacy'), href: '#' },
      { label: t('footerTerms'), href: '#' },
      { label: t('footerImprint'), href: '#' },
    ],
    [t('footerSupport')]: [
      { label: t('footerFAQ'), href: '#' },
      { label: t('footerContact'), href: 'mailto:support@couponvault.de' },
      { label: t('footerBugReport'), href: '#' },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 8,
        background: 'linear-gradient(180deg, #1C1B1F 0%, #0F0E11 100%)',
        borderTop: '1px solid rgba(208, 188, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <LocalActivityIcon
                sx={{
                  fontSize: 32,
                  color: '#D0BCFF',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: 'white',
                }}
              >
                CouponVault
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(230, 225, 229, 0.6)',
                mb: 3,
                maxWidth: 300,
              }}
            >
              {t('footerDescription')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'rgba(230, 225, 229, 0.6)',
                  '&:hover': {
                    color: '#D0BCFF',
                    background: 'rgba(208, 188, 255, 0.1)',
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="mailto:support@couponvault.de"
                sx={{
                  color: 'rgba(230, 225, 229, 0.6)',
                  '&:hover': {
                    color: '#D0BCFF',
                    background: 'rgba(208, 188, 255, 0.1)',
                  },
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={6} sm={4} md={2.5} key={category}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                {category}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    sx={{
                      color: 'rgba(230, 225, 229, 0.6)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#D0BCFF',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider
          sx={{
            my: 4,
            borderColor: 'rgba(208, 188, 255, 0.1)',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: 'rgba(230, 225, 229, 0.5)' }}
          >
            © {currentYear} CouponVault. {t('footerRights')}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(230, 225, 229, 0.5)' }}
          >
            {t('footerMadeWith')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
