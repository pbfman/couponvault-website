import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  CircularProgress,
  Stack,
  Alert
} from '@mui/material';
import Grid from '@mui/material/Grid';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ConstructionIcon from '@mui/icons-material/Construction';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

interface RoadmapFeature {
  id: number;
  title: string;
  description: string;
  votes: number;
  status: string;
}

const Roadmap: React.FC = () => {
  const { t } = useLanguage();
  const [features, setFeatures] = useState<RoadmapFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [votedIds, setVotedIds] = useState<number[]>([]); // Track locally for session visual feedback
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Fetch Features on Load
  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      setLoading(true);
      // In development fallback to empty or mock if PHP not running, 
      // but in prod this will hit the API.
      const response = await fetch('/api/roadmap-api.php?action=get');
      
      if (!response.ok) {
          // If 404/500 (e.g. local dev without PHP), handle gracefully or mock
          if (import.meta.env.DEV && response.status === 404) {
              console.warn("API not found in dev, using mock data.");
              const mockData = [
                  { id: 1, title: 'Dunkelmodus Option', description: 'Manuelles Umschalten zwischen Hell/Dunkel', votes: 120, status: 'planned' },
                  { id: 2, title: 'Mehr Sortieroptionen', description: 'Sortieren nach Laden oder Datum', votes: 85, status: 'in-progress' },
                  { id: 3, title: 'Freunde einladen', description: 'Referral-System für Bonuspunkte', votes: 45, status: 'planned' }
              ];
              setFeatures(mockData.sort((a, b) => b.votes - a.votes));
              setLoading(false);
              return;
          }
          throw new Error('Fehler beim Laden der Roadmap.');
      }

      const data = await response.json();
      if (data.features) {
        setFeatures(data.features);
      } else {
         setFeatures([]);
      }
    } catch (err) {
      console.error(err);
      setError(t('roadmapErrorLoad'));
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (id: number) => {
    if (votedIds.includes(id)) return;

    // Optimistic Update
    const previousFeatures = [...features];
    setFeatures(prev => prev.map(f => 
      f.id === id ? { ...f, votes: Number(f.votes) + 1 } : f
    ).sort((a, b) => b.votes - a.votes)); // Re-sort immediately

    setVotedIds(prev => [...prev, id]);

    try {
      const response = await fetch('/api/roadmap-api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ action: 'vote', id })
      });

      if (!response.ok) {
        throw new Error('Vote failed');
      }
    } catch (err) {
      // Revert on error
      console.error("Voting error", err);
      setFeatures(previousFeatures);
      setVotedIds(prev => prev.filter(vid => vid !== id));
      // Optionally show snackbar error
    }
  };

  // Status colors helper
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'done': return '#4CAF50'; // Green
      case 'in-progress': return '#FF9800'; // Orange
      case 'planned': return '#2196F3'; // Blue
      default: return '#9E9E9E'; // Grey
    }
  };

  const getStatusLabel = (status: string) => {
     switch (status.toLowerCase()) {
        case 'done': return t('roadmapStatusDone');
        case 'in-progress': return t('roadmapStatusInProgress');
        case 'planned': return t('roadmapStatusPlanned');
        default: return status;
     }
  };

  return (
    <Box
      component="section"
      id="roadmap"
      sx={{
        py: { xs: 8, md: 15 },
        background: '#1C1B1F', // Match standard dark background
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            <Stack spacing={2} sx={{ mb: 6, alignItems: 'center', textAlign: 'center' }}>
                <Chip 
                    label={t('roadmapChip')} 
                    icon={<ConstructionIcon sx={{ fontSize: 16 }} />} 
                    sx={{ 
                        background: 'rgba(208, 188, 255, 0.1)', 
                        color: '#D0BCFF', 
                        border: '1px solid rgba(208, 188, 255, 0.2)' 
                    }} 
                />
                <Typography variant="h2" sx={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #D0BCFF 100%)', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {t('roadmapTitle')}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600 }}>
                    {t('roadmapSubtitle')}
                </Typography>
            </Stack>

            {error && (
                <Alert severity="error" sx={{ mb: 4, bgcolor: 'rgba(242, 184, 181, 0.1)', color: '#F2B8B5' }}>
                    {error}
                </Alert>
            )}

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
                    <CircularProgress sx={{ color: '#D0BCFF' }} />
                </Box>
            ) : (
                <Grid container spacing={3}>
                    <AnimatePresence>
                        {features.map((feature) => (
                            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={feature.id}>
                                <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                                    <Card sx={{ 
                                        height: '100%', 
                                        display: 'flex', 
                                        flexDirection: 'column',
                                        background: '#2B2930', 
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        transition: 'transform 0.2s',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
                                        }
                                    }}>
                                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                                <Chip 
                                                    label={getStatusLabel(feature.status)} 
                                                    size="small" 
                                                    sx={{ 
                                                        bgcolor: `${getStatusColor(feature.status)}20`, 
                                                        color: getStatusColor(feature.status),
                                                        fontWeight: 600,
                                                        border: `1px solid ${getStatusColor(feature.status)}40`
                                                    }} 
                                                />
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#D0BCFF' }}>
                                                    <Typography variant="h6" fontWeight="bold">
                                                        {feature.votes}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            
                                            <Typography variant="h6" gutterBottom color="text.primary">
                                                {feature.title}
                                            </Typography>
                                            
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                                {feature.description}
                                            </Typography>

                                            <Box sx={{ mt: 'auto' }}>
                                                <Button
                                                    fullWidth
                                                    variant={votedIds.includes(feature.id) ? "contained" : "outlined"}
                                                    startIcon={votedIds.includes(feature.id) ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                                                    onClick={() => handleVote(feature.id)}
                                                    disabled={votedIds.includes(feature.id)}
                                                    sx={{
                                                        borderRadius: 8,
                                                        py: 1,
                                                        borderColor: '#49454F',
                                                        color: votedIds.includes(feature.id) ? '#381E72' : '#D0BCFF',
                                                        bgcolor: votedIds.includes(feature.id) ? '#D0BCFF' : 'transparent',
                                                        '&:hover': {
                                                            borderColor: '#D0BCFF',
                                                            bgcolor: votedIds.includes(feature.id) ? '#D0BCFF' : 'rgba(208, 188, 255, 0.08)'
                                                        },
                                                        '&.Mui-disabled': {
                                                            bgcolor: 'rgba(208, 188, 255, 0.1)',
                                                            color: 'rgba(230, 225, 229, 0.38)',
                                                            borderColor: 'transparent'
                                                        }
                                                    }}
                                                >
                                                    {votedIds.includes(feature.id) ? t('roadmapVoted') : t('roadmapVote')}
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </AnimatePresence>
                </Grid>
            )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Roadmap;
