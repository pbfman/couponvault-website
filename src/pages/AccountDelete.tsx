import React from 'react';
import { Box, Container, Typography, IconButton, Paper, Alert } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const steps = [
  { icon: LoginIcon, stepKey: 'accountDeleteStep1' },
  { icon: SettingsIcon, stepKey: 'accountDeleteStep2' },
  { icon: ManageAccountsIcon, stepKey: 'accountDeleteStep3' },
  { icon: DeleteForeverIcon, stepKey: 'accountDeleteStep4' },
  { icon: CheckCircleIcon, stepKey: 'accountDeleteStep5' },
];

const AccountDelete: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

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
          {t('accountDeleteTitle')}
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(230, 225, 229, 0.7)', mb: 5 }}>
          {t('accountDeleteSubtitle')}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
          {steps.map(({ icon: Icon, stepKey }, index) => (
            <Paper
              key={stepKey}
              sx={{
                p: 3,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(208, 188, 255, 0.15)',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2.5,
              }}
            >
              {/* Step number badge */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(208, 188, 255, 0.15)',
                  border: '2px solid #D0BCFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Typography sx={{ color: '#D0BCFF', fontWeight: 'bold', fontSize: '1rem' }}>
                  {index + 1}
                </Typography>
              </Box>

              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <Icon sx={{ color: '#D0BCFF', fontSize: '1.2rem' }} />
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    {t(`${stepKey}Title`)}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'rgba(230, 225, 229, 0.7)' }}>
                  {t(`${stepKey}Desc`)}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Warning */}
        <Alert
          severity="warning"
          sx={{
            mb: 4,
            background: 'rgba(255, 152, 0, 0.1)',
            border: '1px solid rgba(255, 152, 0, 0.3)',
            borderRadius: 3,
            color: 'rgba(230, 225, 229, 0.9)',
            '& .MuiAlert-icon': { color: '#FF9800' },
          }}
        >
          {t('accountDeleteWarning')}
        </Alert>

        {/* Alternative contact */}
        <Paper
          sx={{
            p: 3,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 4,
          }}
        >
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, mb: 1 }}>
            {t('accountDeleteAlternativeTitle')}
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(230, 225, 229, 0.7)' }}>
            {t('accountDeleteAlternativeDesc')}{' '}
            <Box
              component="a"
              href="mailto:patrick@broesamle.dev"
              sx={{ color: '#D0BCFF', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
            >
              patrick@broesamle.dev
            </Box>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default AccountDelete;
