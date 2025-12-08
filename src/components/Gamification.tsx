import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedIcon from '@mui/icons-material/Verified';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useLanguage } from '../contexts/LanguageContext';

const Gamification: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const xpActions = [
    {
      action: t('xpAddPrivate'),
      xp: '+5 XP',
      description: t('xpAddPrivateDesc'),
      color: '#4ECDC4',
    },
    {
      action: t('xpSharePublic'),
      xp: '+50 XP',
      description: t('xpSharePublicDesc'),
      color: '#FFE66D',
    },
    {
      action: t('xpConfirmCoupon'),
      xp: '+25 XP',
      description: t('xpConfirmCouponDesc'),
      color: '#FF6B6B',
    },
    {
      action: t('xpReportInvalid'),
      xp: '+15 XP',
      description: t('xpReportInvalidDesc'),
      color: '#DDA0DD',
    },
  ];

  // Correct badge names from the actual app
  const badges = [
    { name: t('badgePrivateCouponCreator'), icon: <BookmarkIcon sx={{ fontSize: 16 }} /> },
    { name: t('badgePublicCouponSharer'), icon: <ShareIcon sx={{ fontSize: 16 }} /> },
    { name: t('badgeCouponValidator'), icon: <VerifiedIcon sx={{ fontSize: 16 }} /> },
    { name: t('badgeFriendConnector'), icon: <GroupIcon sx={{ fontSize: 16 }} /> },
    { name: t('badgeQualityController'), icon: '🚩' },
    { name: t('badgeTrustedContributor'), icon: <StarIcon sx={{ fontSize: 16 }} /> },
    { name: t('badgeXPMaster'), icon: <TrendingUpIcon sx={{ fontSize: 16 }} /> },
  ];

  return (
    <Box
      component="section"
      id="gamification"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <Box
        sx={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 230, 109, 0.1) 0%, transparent 70%)',
          top: -200,
          left: -200,
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(103, 80, 164, 0.15) 0%, transparent 70%)',
          bottom: -100,
          right: -100,
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
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              icon={<EmojiEventsIcon />}
              label={t('gamificationSystem')}
              sx={{
                mb: 3,
                background: 'rgba(255, 230, 109, 0.15)',
                color: '#FFE66D',
                border: '1px solid rgba(255, 230, 109, 0.3)',
                '& .MuiChip-icon': {
                  color: '#FFE66D',
                },
              }}
            />
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FFE66D 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('earnRewardsTitle')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(230, 225, 229, 0.7)',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              {t('earnRewardsSubtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* XP Earning Card */}
          <Grid
            size={{
              xs: 12,
              md: 6
            }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(43, 41, 48, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(208, 188, 255, 0.15)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
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
                      <TrendingUpIcon sx={{ fontSize: 28, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                      {t('earnXP')}
                    </Typography>
                  </Box>

                  {xpActions.map((item) => (
                    <Box
                      key={item.action}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 2,
                        mb: 2,
                        borderRadius: 3,
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(208, 188, 255, 0.08)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: `${item.color}10`,
                          borderColor: `${item.color}40`,
                        },
                      }}
                    >
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 500, color: 'white' }}
                        >
                          {item.action}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: 'rgba(230, 225, 229, 0.5)' }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                      <Chip
                        label={item.xp}
                        size="small"
                        sx={{
                          background: `${item.color}20`,
                          color: item.color,
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Levels & Badges Card */}
          <Grid
            size={{
              xs: 12,
              md: 6
            }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(43, 41, 48, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(208, 188, 255, 0.15)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Level Progress Example */}
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: 2,
                          background: 'linear-gradient(135deg, #FFE66D, #FF9800)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <StarIcon sx={{ fontSize: 28, color: 'white' }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                          {t('levelUp')}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'rgba(230, 225, 229, 0.6)' }}>
                          {t('levelUpDesc')}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(208, 188, 255, 0.08)',
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ color: 'white', fontWeight: 500 }}>
                          {t('levelExample')}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#D0BCFF' }}>
                          3,250 / 5,000 XP
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={65}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          background: 'rgba(103, 80, 164, 0.2)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 5,
                            background: 'linear-gradient(90deg, #6750A4, #D0BCFF)',
                          },
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Badges */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #DDA0DD, #9B59B6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <VerifiedIcon sx={{ fontSize: 28, color: 'white' }} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                      {t('collectBadges')}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {badges.map((badge, index) => (
                      <Box
                        key={badge.name}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          px: 2,
                          py: 1,
                          borderRadius: 100,
                          background: index < 3 ? 'rgba(208, 188, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid ${index < 3 ? 'rgba(208, 188, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
                          opacity: index < 3 ? 1 : 0.7,
                        }}
                      >
                        <Box sx={{ color: index < 3 ? '#D0BCFF' : 'rgba(230, 225, 229, 0.5)', display: 'flex', alignItems: 'center' }}>
                          {badge.icon}
                        </Box>
                        <Typography
                          variant="caption"
                          sx={{
                            color: index < 3 ? 'white' : 'rgba(230, 225, 229, 0.5)',
                            fontWeight: 500,
                          }}
                        >
                          {badge.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Community Features */}
          <Grid size={12}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(103, 80, 164, 0.2), rgba(208, 188, 255, 0.05))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(208, 188, 255, 0.2)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Grid container spacing={4} sx={{
                    alignItems: "center"
                  }}>
                    <Grid
                      size={{
                        xs: 12,
                        md: 8
                      }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <GroupIcon sx={{ fontSize: 32, color: '#D0BCFF' }} />
                        <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                          {t('joinCommunity')}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{ color: 'rgba(230, 225, 229, 0.7)', mb: 2 }}
                      >
                        {t('communityDescription')}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Chip
                          icon={<ShareIcon />}
                          label={t('shareAndEarn')}
                          sx={{
                            background: 'rgba(78, 205, 196, 0.15)',
                            color: '#4ECDC4',
                            border: '1px solid rgba(78, 205, 196, 0.3)',
                            '& .MuiChip-icon': { color: '#4ECDC4' },
                          }}
                        />
                        <Chip
                          icon={<VerifiedIcon />}
                          label={t('validateCoupons')}
                          sx={{
                            background: 'rgba(255, 107, 107, 0.15)',
                            color: '#FF6B6B',
                            border: '1px solid rgba(255, 107, 107, 0.3)',
                            '& .MuiChip-icon': { color: '#FF6B6B' },
                          }}
                        />
                        <Chip
                          icon={<EmojiEventsIcon />}
                          label={t('unlockRewards')}
                          sx={{
                            background: 'rgba(255, 230, 109, 0.15)',
                            color: '#FFE66D',
                            border: '1px solid rgba(255, 230, 109, 0.3)',
                            '& .MuiChip-icon': { color: '#FFE66D' },
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      size={{
                        xs: 12,
                        md: 4
                      }}>
                      <Box
                        sx={{
                          textAlign: 'center',
                          p: 3,
                          borderRadius: 4,
                          background: 'rgba(255, 255, 255, 0.03)',
                        }}
                      >
                        <Typography
                          variant="h2"
                          sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #FFE66D, #FF9800)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          7
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(230, 225, 229, 0.7)' }}>
                          {t('badgeCategories')}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Gamification;
