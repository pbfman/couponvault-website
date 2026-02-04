import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { LanguageProvider } from './contexts/LanguageContext';
import { useEffect } from 'react';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
import AGBEmail from './pages/AGBEmail';
import Widerruf from './pages/Widerruf';
import DatenschutzApp from './pages/DatenschutzApp';
import LizenzenCompact from './pages/LizenzenCompact';
import './App.css';

// Material Design 3 inspired theme with CouponTresor colors
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6750A4',
      light: '#D0BCFF',
      dark: '#381E72',
    },
    secondary: {
      main: '#625B71',
      light: '#CCC2DC',
      dark: '#332D41',
    },
    background: {
      default: '#1C1B1F',
      paper: '#2B2930',
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FF9800',
    },
    error: {
      main: '#F2B8B5',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          textTransform: 'none',
          fontWeight: 500,
          padding: '12px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          backgroundImage: 'none',
        },
      },
    },
  },
});

// Komponente um Scroll-Position zu Reset bei Route-Änderungen
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz-web" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/agb-email" element={<AGBEmail />} />
        <Route path="/widerruf" element={<Widerruf />} />
        <Route path="/datenschutz-app" element={<DatenschutzApp />} />
        <Route path="/lizenzen" element={<LizenzenCompact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
