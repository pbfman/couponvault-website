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
import { useInView } from 'react-intersection-observer';
import AndroidIcon from '@mui/icons-material/Android';
import SecurityIcon from '@mui/icons-material/Security';
import UpdateIcon from '@mui/icons-material/Update';
import StarIcon from '@mui/icons-material/Star';
import { useLanguage } from '../contexts/LanguageContext';

const Download: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    { icon: <SecurityIcon />, text: t('downloadSecure') },
    { icon: <UpdateIcon />, text: t('downloadUpdates') },
    { icon: <StarIcon />, text: t('downloadFree') },
  ];

  return (
    <Box
      component="section"
      id="download"
      sx={{
        py: { xs: 10, md: 30 },
        background: 'linear-gradient(180deg, #1C1B1F 0%, #2B2930 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <Box
        sx={{
          position: 'absolute',
          width: 800,
          height: 800,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(103, 80, 164, 0.2) 0%, transparent 60%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(80px)',
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Grid container spacing={6} sx={{
            alignItems: "center"
          }}>
            <Grid
              size={{
                xs: 12,
                md: 6
              }}>
              <Chip
                icon={<AndroidIcon />}
                label={t('availableOnAndroid')}
                sx={{
                  mb: 3,
                  background: 'rgba(61, 220, 132, 0.15)',
                  color: '#3DDC84',
                  border: '1px solid rgba(61, 220, 132, 0.3)',
                  '& .MuiChip-icon': {
                    color: '#3DDC84',
                  },
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #D0BCFF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t('downloadTitle')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'rgba(230, 225, 229, 0.7)',
                  fontSize: '1.1rem',
                }}
              >
                {t('downloadSubtitle')}
              </Typography>

              {/* Features list */}
              <Box sx={{ mb: 4 }}>
                {features.map((item) => (
                  <Box
                    key={item.text}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        color: '#D0BCFF',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography sx={{ color: 'rgba(230, 225, 229, 0.8)' }}>
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Download Button */}
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<AndroidIcon />}
                  component="a"
                  href="https://play.google.com/store/apps/details?id=de.pbfman.couponvault"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: 'linear-gradient(135deg, #3DDC84, #00C853)',
                    color: '#fff',
                    fontSize: '1.2rem',
                    px: 5,
                    py: 2,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #00C853, #3DDC84)',
                    },
                  }}
                >
                  {t('getOnGooglePlay')}
                </Button>
              </Box>

              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  mt: 2,
                  color: 'rgba(230, 225, 229, 0.5)',
                }}
              >
                {t('requiresAndroid')}
              </Typography>
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 6
              }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  {/* Phone frame with real screenshot */}
                  <Box
                    sx={{
                      width: 280,
                      borderRadius: '36px',
                      border: '8px solid #49454F',
                      overflow: 'hidden',
                      boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(208, 188, 255, 0.1)',
                      position: 'relative',
                      lineHeight: 0,
                    }}
                  >
                    <img
                      src="/screen.png"
                      alt="CouponVault App Screenshot"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                      }}
                    />
                  </Box>

                  {/* Glow effect */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(103, 80, 164, 0.4) 0%, transparent 70%)',
                      bottom: -50,
                      right: -20,
                      filter: 'blur(40px)',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Download;
