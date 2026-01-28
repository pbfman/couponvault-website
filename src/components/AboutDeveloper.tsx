import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useLanguage } from '../contexts/LanguageContext';

const AboutDeveloper: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 10, md: 20 },
        background: 'linear-gradient(180deg, #1C1B1F 0%, #2B2930 50%, #1C1B1F 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(103, 80, 164, 0.15) 0%, transparent 70%)',
          top: '20%',
          right: -150,
          filter: 'blur(40px)',
        }}
      />
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              icon={<CodeIcon />}
              label={t('aboutDeveloperChip')}
              sx={{
                mb: 3,
                background: 'rgba(103, 80, 164, 0.15)',
                color: '#D0BCFF',
                border: '1px solid rgba(208, 188, 255, 0.3)',
                '& .MuiChip-icon': {
                  color: '#D0BCFF',
                },
              }}
            />
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #D0BCFF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('aboutTitle')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} sx={{
          alignItems: "center"
        }}>
          {/* Developer Photo & Intro */}
          <Grid
            size={{
              xs: 12,
              md: 5
            }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card
                sx={{
                  background: 'rgba(43, 41, 48, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(208, 188, 255, 0.15)',
                  textAlign: 'center',
                  p: 4,
                }}
              >
                <Avatar
                  src="/patrick.png"
                  alt="Patrick"
                  sx={{
                    width: 140,
                    height: 140,
                    mx: 'auto',
                    mb: 3,
                    border: '4px solid #6750A4',
                    boxShadow: '0 8px 32px rgba(103, 80, 164, 0.4)',
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: '#D0BCFF',
                    mb: 1,
                  }}
                >
                  {t('aboutHello')}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(230, 225, 229, 0.7)',
                    mb: 2,
                  }}
                >
                  {t('aboutRole')}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
                  <Chip
                    size="small"
                    label="React Native"
                    sx={{
                      background: 'rgba(97, 218, 251, 0.15)',
                      color: '#61DAFB',
                      border: '1px solid rgba(97, 218, 251, 0.3)',
                    }}
                  />
                  <Chip
                    size="small"
                    label="TypeScript"
                    sx={{
                      background: 'rgba(49, 120, 198, 0.15)',
                      color: '#3178C6',
                      border: '1px solid rgba(49, 120, 198, 0.3)',
                    }}
                  />
                  <Chip
                    size="small"
                    label="Expo"
                    sx={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  />
                </Box>
                
                <Box sx={{ mt: 3 }}>
                  <Link
                    href="https://broesamle.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#D0BCFF',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    broesamle.dev
                    <OpenInNewIcon fontSize="small" />
                  </Link>
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* Story */}
          <Grid
            size={{
              xs: 12,
              md: 7
            }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card
                sx={{
                  background: 'rgba(43, 41, 48, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(208, 188, 255, 0.15)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #6750A4, #D0BCFF)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <LightbulbIcon sx={{ fontSize: 28, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                      {t('aboutStoryTitle')}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(230, 225, 229, 0.8)',
                      lineHeight: 1.8,
                      mb: 3,
                    }}
                  >
                    {t('aboutStoryPart1')}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(230, 225, 229, 0.8)',
                      lineHeight: 1.8,
                      mb: 3,
                    }}
                  >
                    {t('aboutStoryPart2')}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      p: 2,
                      borderRadius: 2,
                      background: 'rgba(103, 80, 164, 0.15)',
                      border: '1px solid rgba(208, 188, 255, 0.2)',
                    }}
                  >
                    <FavoriteIcon sx={{ color: '#FF6B6B' }} />
                    <Typography
                      variant="body2"
                      sx={{ color: 'rgba(230, 225, 229, 0.9)', fontStyle: 'italic' }}
                    >
                      {t('aboutHope')}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutDeveloper;
