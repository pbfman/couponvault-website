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
import { Link as RouterLink } from 'react-router-dom';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterLink {
  label: string;
  href: string;
  isRoute?: boolean;
}

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, FooterLink[]> = {
    [t('footerProduct')]: [
      { label: t('navFeatures'), href: '#features' },
      { label: t('navHowItWorks'), href: '#how-it-works' },
      { label: t('navGamification'), href: '#gamification' },
      { label: t('navDownload'), href: '#download' },
    ],
    [t('footerLegal')]: [
      { label: t('footerPrivacy'), href: '/datenschutz-web', isRoute: true },
      { label: t('footerPrivacyApp'), href: '/datenschutz-app', isRoute: true },
      { label: t('footerImprint'), href: '/impressum', isRoute: true },
      { label: t('footerTerms'), href: '/agb', isRoute: true },
      { label: t('footerWithdrawal'), href: '/widerruf', isRoute: true },
      { label: t('footerLicenses'), href: '/lizenzen', isRoute: true },
    ],
    [t('footerSupport')]: [
      { label: t('footerFAQ'), href: '#' },
      { label: t('footerContact'), href: 'mailto:support@coupontresor.de' },
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
          <Grid
            size={{
              xs: 12,
              md: 4
            }}>
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
                CouponTresor
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
                href="https://github.com/pbfman"
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
                href="https://broesamle.dev/"
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
                <LanguageIcon />
              </IconButton>
              <IconButton
                href="mailto:support@coupontresor.de"
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
            <Grid
              key={category}
              size={{
                xs: 6,
                sm: 4,
                md: 2.5
              }}>
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
                  link.isRoute ? (
                    <Link
                      key={link.label}
                      component={RouterLink}
                      to={link.href}
                      sx={{
                        color: 'rgba(230, 225, 229, 0.6)',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: '#D0BCFF',
                          cursor: 'pointer',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ) : (
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
                          cursor: 'pointer',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  )
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
© {currentYear} CouponTresor. {t('footerRights')}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(230, 225, 229, 0.5)', textAlign: 'center' }}
          >
            {t('footerMadeWith')}
          </Typography>
          <Link 
            href="https://logo.dev" 
            target="_blank" 
            rel="noopener"
            sx={{ 
              color: 'rgba(230, 225, 229, 0.5)', 
              textDecoration: 'none',
              fontSize: '0.875rem',
              '&:hover': { color: '#D0BCFF' }
            }}
          >
            Logos provided by Logo.dev
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
