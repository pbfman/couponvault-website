import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AndroidIcon from '@mui/icons-material/Android';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SecurityIcon from '@mui/icons-material/Security';
import UpdateIcon from '@mui/icons-material/Update';
import StarIcon from '@mui/icons-material/Star';
import ConstructionIcon from '@mui/icons-material/Construction';
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
        py: { xs: 10, md: 15 },
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

              {/* Download Button - Grayed out */}
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<AndroidIcon />}
                  disabled
                  sx={{
                    background: 'rgba(61, 220, 132, 0.3)',
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '1.2rem',
                    px: 5,
                    py: 2,
                    cursor: 'not-allowed',
                    '&.Mui-disabled': {
                      background: 'rgba(61, 220, 132, 0.2)',
                      color: 'rgba(255, 255, 255, 0.5)',
                    },
                  }}
                >
                  {t('getOnGooglePlay')}
                </Button>
                <Chip
                  icon={<ConstructionIcon sx={{ fontSize: 14 }} />}
                  label={t('comingSoon')}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: -12,
                    right: -12,
                    background: 'rgba(255, 152, 0, 0.9)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.7rem',
                    '& .MuiChip-icon': {
                      color: 'white',
                    },
                  }}
                />
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
                  {/* Phone mockup */}
                  <Card
                    sx={{
                      width: 280,
                      height: 560,
                      borderRadius: '24px',
                      background: 'linear-gradient(180deg, #2B2930 0%, #1C1B1F 100%)',
                      border: '8px solid #49454F',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(208, 188, 255, 0.1)',
                    }}
                  >
                    {/* Phone notch */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 80,
                        height: 24,
                        borderRadius: 12,
                        background: '#1C1B1F',
                        zIndex: 10,
                      }}
                    />

                    <CardContent sx={{ p: 3, pt: 5 }}>
                      {/* App header mockup */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          mb: 3,
                          mt: 2,
                        }}
                      >
                        <PhoneAndroidIcon sx={{ color: '#D0BCFF', fontSize: 24 }} />
                        <Typography
                          variant="h6"
                          sx={{ color: 'white', fontWeight: 600 }}
                        >
                          CouponVault
                        </Typography>
                      </Box>

                      {/* Mock coupon list */}
                      {[
                        { shop: 'Amazon', value: '20%', color: '#FF9900' },
                        { shop: 'MediaMarkt', value: '€50', color: '#DF0000' },
                        { shop: 'REWE', value: '10%', color: '#CC071E' },
                        { shop: 'Saturn', value: '15%', color: '#0064B1' },
                      ].map((coupon) => (
                        <Box
                          key={coupon.shop}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            p: 1.5,
                            mb: 1.5,
                            borderRadius: 2,
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderLeft: `3px solid ${coupon.color}`,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ color: 'white', fontWeight: 500 }}
                          >
                            {coupon.shop}
                          </Typography>
                          <Chip
                            label={coupon.value}
                            size="small"
                            sx={{
                              background: `${coupon.color}20`,
                              color: coupon.color,
                              fontWeight: 600,
                              height: 24,
                            }}
                          />
                        </Box>
                      ))}

                      {/* Add button mockup */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 30,
                          right: 20,
                          width: 56,
                          height: 56,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #6750A4, #D0BCFF)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 24px rgba(103, 80, 164, 0.4)',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 28,
                            color: 'white',
                            fontWeight: 300,
                          }}
                        >
                          +
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>

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
