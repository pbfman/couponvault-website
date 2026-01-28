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
  title_de: string;
  title_en: string;
  description_de: string;
  description_en: string;
  votes: number;
  status_de: string;
  status_en: string;
}

const Roadmap: React.FC = () => {
  const { t, language } = useLanguage();
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
          if (import.meta.env.DEV && response.status === 404) {
              console.warn("API not found in dev, using mock data.");
              const mockData = [
                  { id: 1, title_de: 'Dunkelmodus Option', title_en: 'Dark Mode Option', description_de: 'Manuelles Umschalten zwischen Hell/Dunkel', description_en: 'Manual switch between light/dark', votes: 120, status_de: 'geplant', status_en: 'planned' },
                  { id: 2, title_de: 'Mehr Sortieroptionen', title_en: 'More Sorting Options', description_de: 'Sortieren nach Laden oder Datum', description_en: 'Sort by shop or date', votes: 85, status_de: 'in Arbeit', status_en: 'in-progress' },
                  { id: 3, title_de: 'Freunde einladen', title_en: 'Invite Friends', description_de: 'Referral-System für Bonuspunkte', description_en: 'Referral system for bonus points', votes: 45, status_de: 'geplant', status_en: 'planned' }
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
        const errorData = await response.json().catch(() => ({}));
        const errorMsg = errorData.error || `HTTP ${response.status}`;
        console.error(`Vote failed for feature ${id}:`, {
          status: response.status,
          statusText: response.statusText,
          error: errorMsg,
          fullResponse: errorData
        });
        throw new Error(`Vote failed: ${errorMsg}`);
      }

      const result = await response.json();
      console.log(`Vote successful for feature ${id}:`, result);
    } catch (err) {
      // Revert on error
      console.error("Voting error for feature", id, err);
      setFeatures(previousFeatures);
      setVotedIds(prev => prev.filter(vid => vid !== id));
      // Optionally show snackbar error
    }
  };

  // Status colors helper
  const getStatusColor = (status: string) => {
    const normalized = status.toLowerCase();
    if (normalized.includes('done') || normalized.includes('erledigt')) return '#4CAF50'; // Green
    if (normalized.includes('progress') || normalized.includes('arbeit')) return '#FF9800'; // Orange
    if (normalized.includes('planned') || normalized.includes('geplant')) return '#2196F3'; // Blue
    return '#9E9E9E'; // Grey
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
                        {features.map((feature) => {
                            const title = language === 'de' ? feature.title_de : feature.title_en;
                            const description = language === 'de' ? feature.description_de : feature.description_en;
                            const status = language === 'de' ? feature.status_de : feature.status_en;
                            return (
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
                                                    label={status} 
                                                    size="small" 
                                                    sx={{ 
                                                        bgcolor: `${getStatusColor(status)}20`, 
                                                        color: getStatusColor(status),
                                                        fontWeight: 600,
                                                        border: `1px solid ${getStatusColor(status)}40`
                                                    }} 
                                                />
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#D0BCFF' }}>
                                                    <Typography variant="h6" fontWeight="bold">
                                                        {feature.votes}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            
                                            <Typography variant="h6" gutterBottom color="text.primary">
                                                {title}
                                            </Typography>
                                            
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                                {description}
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
                            );
                        })}
                    </AnimatePresence>
                </Grid>
            )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Roadmap;
