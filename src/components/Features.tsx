import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import ShareIcon from '@mui/icons-material/Share';
import FilterListIcon from '@mui/icons-material/FilterList';
import EmailIcon from '@mui/icons-material/Email';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import SecurityIcon from '@mui/icons-material/Security';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <CameraAltIcon sx={{ fontSize: 40 }} />,
      title: t('featureAIOCR'),
      description: t('featureAIOCRDesc'),
      color: '#FF6B6B',
    },
    {
      icon: <NotificationsActiveIcon sx={{ fontSize: 40 }} />,
      title: t('featureReminders'),
      description: t('featureRemindersDesc'),
      color: '#FFE66D',
    },
    {
      icon: <QrCodeScannerIcon sx={{ fontSize: 40 }} />,
      title: t('featureBarcode'),
      description: t('featureBarcodeDesc'),
      color: '#95E1D3',
    },
    {
      icon: <ShareIcon sx={{ fontSize: 40 }} />,
      title: t('featureSharing'),
      description: t('featureSharingDesc'),
      color: '#DDA0DD',
    },
    {
      icon: <FilterListIcon sx={{ fontSize: 40 }} />,
      title: t('featureOrganization'),
      description: t('featureOrganizationDesc'),
      color: '#87CEEB',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: t('featureEmail'),
      description: t('featureEmailDesc'),
      color: '#F0A500',
    },
    {
      icon: <CloudSyncIcon sx={{ fontSize: 40 }} />,
      title: t('featureCloudSync'),
      description: t('featureCloudSyncDesc'),
      color: '#7B68EE',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: t('featurePrivacy'),
      description: t('featurePrivacyDesc'),
      color: '#00D084',
    },
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      component="section"
      id="features"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(103, 80, 164, 0.15) 0%, transparent 70%)',
          top: '50%',
          left: -200,
          transform: 'translateY(-50%)',
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
            sx={{
              textAlign: "center",
              mb: 2,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #D0BCFF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
            {t('powerfulFeatures')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              mb: 8,
              color: 'rgba(230, 225, 229, 0.7)',
              maxWidth: 600,
              mx: 'auto'
            }}>
            {t('featuresSubtitle')}
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid
              key={feature.title}
              size={{
                xs: 12,
                sm: 6,
                md: 3
              }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(43, 41, 48, 0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(208, 188, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      border: `1px solid ${feature.color}40`,
                      boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px ${feature.color}20`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: 3,
                        background: `${feature.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        color: feature.color,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 1.5,
                        fontWeight: 600,
                        color: 'white',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(230, 225, 229, 0.6)',
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
