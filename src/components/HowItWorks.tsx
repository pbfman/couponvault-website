import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SavingsIcon from '@mui/icons-material/Savings';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: '01',
      icon: <CameraAltIcon sx={{ fontSize: 48 }} />,
      title: t('stepCapture'),
      description: t('stepCaptureDesc'),
    },
    {
      number: '02',
      icon: <AutoFixHighIcon sx={{ fontSize: 48 }} />,
      title: t('stepAIExtraction'),
      description: t('stepAIExtractionDesc'),
    },
    {
      number: '03',
      icon: <SaveAltIcon sx={{ fontSize: 48 }} />,
      title: t('stepOrganize'),
      description: t('stepOrganizeDesc'),
    },
    {
      number: '04',
      icon: <SavingsIcon sx={{ fontSize: 48 }} />,
      title: t('stepSave'),
      description: t('stepSaveDesc'),
    },
  ];

  return (
    <Box
      component="section"
      id="how-it-works"
      sx={{
        py: { xs: 10, md: 15 },
        background: 'linear-gradient(180deg, #1C1B1F 0%, #2B2930 50%, #1C1B1F 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(208, 188, 255, 0.1) 0%, transparent 70%)',
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
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              mb: 2,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #D0BCFF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('howItWorks')}
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              mb: 10,
              color: 'rgba(230, 225, 229, 0.7)',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            {t('howItWorksSubtitle')}
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={step.number}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    background: 'transparent',
                    position: 'relative',
                  }}
                >
                  {/* Step number */}
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '6rem',
                      fontWeight: 800,
                      color: 'rgba(103, 80, 164, 0.1)',
                      lineHeight: 1,
                      zIndex: 0,
                    }}
                  >
                    {step.number}
                  </Typography>

                  {/* Icon */}
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(103, 80, 164, 0.3), rgba(208, 188, 255, 0.1))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      position: 'relative',
                      zIndex: 1,
                      color: '#D0BCFF',
                      border: '2px solid rgba(208, 188, 255, 0.2)',
                    }}
                  >
                    {step.icon}
                  </Box>

                  {/* Content */}
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'white',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(230, 225, 229, 0.6)',
                      lineHeight: 1.7,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {step.description}
                  </Typography>

                  {/* Connector line (not for last item) */}
                  {index < steps.length - 1 && (
                    <Box
                      sx={{
                        display: { xs: 'none', md: 'block' },
                        position: 'absolute',
                        top: 60,
                        right: -40,
                        width: 80,
                        height: 2,
                        background: 'linear-gradient(90deg, #6750A4, transparent)',
                      }}
                    />
                  )}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
