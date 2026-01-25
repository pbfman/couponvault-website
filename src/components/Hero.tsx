import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import AndroidIcon from '@mui/icons-material/Android';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CouponCard from './CouponCard';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Box
      component="section"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 40, md: 0 },
        pb: { xs: 4, md: 0 },
        mt: { xs: 0, md: '-80px' },
      }}
    >
      {/* Background gradient orbs */}
      <Box
        sx={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(103, 80, 164, 0.3) 0%, transparent 70%)',
          top: -200,
          right: -200,
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(208, 188, 255, 0.2) 0%, transparent 70%)',
          bottom: -100,
          left: -100,
          filter: 'blur(40px)',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} sx={{
          alignItems: "center"
        }}>
          <Grid
            size={{
              xs: 12,
              md: 6
            }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Chip
                icon={<AutoAwesomeIcon />}
                label={t('aiPoweredSavings')}
                sx={{
                  mb: 3,
                  background: 'rgba(208, 188, 255, 0.15)',
                  color: '#D0BCFF',
                  border: '1px solid rgba(208, 188, 255, 0.3)',
                  '& .MuiChip-icon': {
                    color: '#D0BCFF',
                  },
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #D0BCFF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                {t('heroTitle')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'rgba(230, 225, 229, 0.8)',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  maxWidth: 500,
                }}
              >
                {t('heroSubtitle')}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<AndroidIcon />}
                  href="#download"
                  sx={{
                    background: 'linear-gradient(135deg, #6750A4, #9A82DB)',
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #7B61B8, #B09AE8)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 40px rgba(103, 80, 164, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {t('downloadForAndroid')}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="#features"
                  sx={{
                    borderColor: '#D0BCFF',
                    color: '#D0BCFF',
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      borderColor: 'white',
                      color: 'white',
                      background: 'rgba(208, 188, 255, 0.1)',
                    },
                  }}
                >
                  {t('learnMore')}
                </Button>
              </Box>

              {/* Stats */}
              <Box sx={{ display: 'flex', gap: 4, mt: 6, flexWrap: 'wrap' }}>
                {[
                  { value: '100%', label: t('freeToUse') },
                  { value: 'AI', label: t('poweredOCR') },
                  { value: '0%', label: t('ads') },
                ].map((stat) => (
                  <Box key={stat.label}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: '#D0BCFF',
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'rgba(230, 225, 229, 0.6)' }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6
            }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                minHeight: 500,
              }}
            >
              {/* Floating coupon cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                }}
                className="floating"
              >
                <CouponCard
                  shop="Amazon"
                  value="20%"
                  code="SAVE20"
                  expiresIn="5 days"
                  color="#FF9900"
                  isOwn
                  visibility="public"
                  syncedToCloud
                  productName="Electronics & Accessories"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  position: 'absolute',
                  top: '30%',
                  right: '5%',
                }}
                className="floating"
              >
                <CouponCard
                  shop="MediaMarkt"
                  value="€50"
                  code="MM50OFF"
                  expiresIn="2 weeks"
                  color="#DF0000"
                  creatorName="Sarah Mueller"
                  creatorLevel={15}
                  creatorBadges={[
                    { name: 'verified', tier: 'gold', image: '' },
                    { name: 'trusted', tier: 'silver', image: '' },
                  ]}
                  confirmations={8}
                  reports={1}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  position: 'absolute',
                  bottom: '15%',
                  left: '20%',
                }}
                className="floating"
              >
                <CouponCard
                  shop="REWE"
                  value="10%"
                  code="REWE10"
                  expiresIn="1 month"
                  color="#CC071E"
                  isOwn
                  visibility="private"
                  syncedToCloud={false}
                />
              </motion.div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
