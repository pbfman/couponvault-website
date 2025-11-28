import React from 'react';
import { Box, Container, Typography, Chip } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useLanguage } from '../contexts/LanguageContext';

const DevelopmentBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, rgba(255, 152, 0, 0.15), rgba(255, 193, 7, 0.1))',
        borderBottom: '1px solid rgba(255, 152, 0, 0.3)',
        py: 1.5,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Chip
            icon={<ConstructionIcon />}
            label={t('inDevelopment')}
            sx={{
              background: 'rgba(255, 152, 0, 0.2)',
              color: '#FFB74D',
              border: '1px solid rgba(255, 152, 0, 0.4)',
              fontWeight: 600,
              '& .MuiChip-icon': {
                color: '#FFB74D',
              },
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 183, 77, 0.9)',
              textAlign: 'center',
            }}
          >
            {t('inDevelopmentDesc')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default DevelopmentBanner;
