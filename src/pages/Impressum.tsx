import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Impressum: React.FC = () => {
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

        <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 4 }}>
          Impressum / Legal Notice
        </Typography>

        {/* German Section */}
        <Box sx={{ mb: 6, color: 'text.secondary' }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'white', mt: 2 }}>
            Angaben gemäß § 5 TMG
          </Typography>
          <Typography sx={{
            marginBottom: "16px"
          }}>
            Patrick Brösamle<br />
            Blumenstr. 91<br />
            01307 Dresden
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: 'white', mt: 4 }}>
            Kontakt
          </Typography>
          <Typography sx={{
            marginBottom: "16px"
          }}>
            E-Mail: <Link href="mailto:patrick@broesamle.dev" sx={{ color: '#D0BCFF' }}>patrick@broesamle.dev</Link>
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: 'white', mt: 4 }}>
            Haftungsausschluss (Disclaimer)
          </Typography>
          
          <Typography variant="h6" sx={{ color: 'white', mt: 3, fontWeight: 'bold' }}>
            Haftung für Links
          </Typography>
          <Typography sx={{
            marginBottom: "16px"
          }}>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Impressum;
