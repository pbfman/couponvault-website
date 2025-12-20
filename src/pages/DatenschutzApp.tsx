import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const DatenschutzApp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #1C1B1F 0%, #2B2930 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <IconButton
          onClick={() => navigate('/')}
          sx={{
            color: '#D0BCFF',
            mb: 2,
            '&:hover': {
              background: 'rgba(208, 188, 255, 0.1)',
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
          Datenschutzerklärung (App) / Privacy Policy (App)
        </Typography>
        <Typography variant="caption" sx={{ color: 'rgba(230, 225, 229, 0.5)', mb: 4, display: 'block' }}>
          Zuletzt aktualisiert: 20.12.2025
        </Typography>

        <Box sx={{ mb: 6, color: 'text.secondary' }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'white', mt: 2 }}>
            Datenschutzerklärung für die CouponVault App
          </Typography>

          <Typography sx={{ marginBottom: '24px', fontSize: '1.1em', lineHeight: 1.8 }}>
            🔒 Platzhalter für die Datenschutzerklärung der App.
          </Typography>

          <Typography sx={{ marginBottom: '16px', color: 'rgba(230, 225, 229, 0.7)' }}>
            Die vollständige und rechtlich verbindliche Datenschutzerklärung für die CouponVault App wird in Kürze verfügbar sein.
          </Typography>
        </Box>

        {/* English Section */}
        <Box sx={{ color: 'text.secondary', pt: 4, borderTop: '1px solid rgba(208, 188, 255, 0.2)' }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'white', mt: 4 }}>
            Privacy Policy for the CouponVault App
          </Typography>

          <Typography sx={{ marginBottom: '24px', fontSize: '1.1em', lineHeight: 1.8 }}>
            🔒 Placeholder for the App Privacy Policy.
          </Typography>

          <Typography sx={{ marginBottom: '16px', color: 'rgba(230, 225, 229, 0.7)' }}>
            The complete and legally binding Privacy Policy for the CouponVault App will be available shortly.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default DatenschutzApp;
