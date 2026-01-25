import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import PublicIcon from '@mui/icons-material/Public';
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';

interface Badge {
  name: string;
  tier: string;
  image: string;
}

interface CouponCardProps {
  shop: string;
  value: string;
  code?: string;
  expiresIn: string;
  color: string;
  isOwn?: boolean;
  creatorName?: string;
  creatorLevel?: number;
  creatorBadges?: Badge[];
  productName?: string;
  visibility?: 'private' | 'friends' | 'public';
  syncedToCloud?: boolean;
  confirmations?: number;
  reports?: number;
}

const CouponCard: React.FC<CouponCardProps> = ({
  shop,
  value,
  expiresIn,
  color,
  isOwn = false,
  creatorName,
  creatorLevel,
  creatorBadges = [],
  productName,
  visibility = 'private',
  syncedToCloud = true,
  confirmations = 0,
  reports = 0,
}) => {
  // Barometer calculation
  const total = confirmations + reports;
  const balance = total > 0 ? (confirmations - reports) / total : 0;
  const rotation = balance * -90;
  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      <Paper
        elevation={0}
        sx={{
          width: 320,
          borderRadius: '20px',
          overflow: 'hidden',
          background: 'linear-gradient(145deg, #3D3A45 0%, #2B2930 100%)',
          border: '0.5px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
          transition: 'all 0.3s ease',
          display: 'flex',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: `0 16px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px ${color}30`,
          },
        }}
      >
      {/* Main content - two columns */}
      <Box sx={{ display: 'flex', flex: 1, position: 'relative', minHeight: 150 }}>
        {/* Left column - Details */}
        <Box sx={{ flex: 1, p: 2, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          {/* Shop name */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                background: `${color}25`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${color}40`,
                flexShrink: 0,
              }}
            >
              <Typography sx={{ fontSize: 16, fontWeight: 700, color }}>
                {shop.charAt(0)}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: 600,
                color: 'white',
                fontSize: '0.95rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {shop}
            </Typography>
          </Box>

        {/* Product name if available */}
        {productName && (
          <Typography
            sx={{
              color: 'rgba(230, 225, 229, 0.7)',
              fontSize: '0.85rem',
              mb: 1.5,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {productName}
          </Typography>
        )}

        {/* Owner / Status section */}
          <Box sx={{ mt: 'auto' }}>
            {isOwn ? (
              // Status icons for own coupons
              <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    background: 'rgba(208, 188, 255, 0.1)',
                    borderRadius: '6px',
                    px: 0.75,
                    py: 0.3,
                  }}
                >
                  {syncedToCloud ? (
                    <CloudDoneIcon sx={{ fontSize: 12, color: '#D0BCFF' }} />
                  ) : (
                    <Box sx={{ fontSize: 10, color: 'rgba(230, 225, 229, 0.6)' }}>◉</Box>
                  )}
                  <Typography sx={{ fontSize: '0.65rem', color: syncedToCloud ? '#D0BCFF' : 'rgba(230, 225, 229, 0.6)' }}>
                    {syncedToCloud ? 'Cloud' : 'Local'}
                  </Typography>
                </Box>
                {visibility === 'public' && (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      background: 'rgba(208, 188, 255, 0.1)',
                      borderRadius: '6px',
                      px: 0.75,
                      py: 0.3,
                    }}
                  >
                    <PublicIcon sx={{ fontSize: 12, color: '#D0BCFF' }} />
                    <Typography sx={{ fontSize: '0.65rem', color: '#D0BCFF' }}>Public</Typography>
                  </Box>
                )}
                {visibility === 'friends' && (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      background: 'rgba(208, 188, 255, 0.1)',
                      borderRadius: '6px',
                      px: 0.75,
                      py: 0.3,
                    }}
                  >
                    <GroupIcon sx={{ fontSize: 12, color: '#D0BCFF' }} />
                    <Typography sx={{ fontSize: '0.65rem', color: '#D0BCFF' }}>Friends</Typography>
                  </Box>
                )}
                {visibility === 'private' && (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      background: 'rgba(130, 130, 130, 0.15)',
                      borderRadius: '6px',
                      px: 0.75,
                      py: 0.3,
                    }}
                  >
                    <LockIcon sx={{ fontSize: 12, color: 'rgba(230, 225, 229, 0.6)' }} />
                    <Typography sx={{ fontSize: '0.65rem', color: 'rgba(230, 225, 229, 0.6)' }}>Private</Typography>
                  </Box>
                )}
              </Box>
            ) : creatorName ? (
              // Creator info for shared coupons
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.75 }}>
                  {creatorLevel !== undefined && creatorLevel !== null && (
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #D0BCFF, #9A82DB)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#1C1B1F' }}>
                        {creatorLevel}
                      </Typography>
                    </Box>
                  )}
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: 'rgba(230, 225, 229, 0.9)',
                      fontWeight: 500,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {creatorName}
                  </Typography>
                </Box>
                {creatorBadges && creatorBadges.length > 0 && (
                  <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                    {creatorBadges.slice(0, 6).map((badge, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: '4px',
                          background: `${color}20`,
                          border: `1px solid ${color}40`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.6rem',
                          fontWeight: 700,
                          color: color,
                        }}
                        title={`${badge.name} - ${badge.tier}`}
                      >
                        {badge.tier?.charAt(0).toUpperCase()}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ) : null}
          </Box>
        </Box>

        {/* Right column - Value with colored background */}
        <Box
          sx={{
            width: 130,
            p: 2,
            background: `${color}25`,
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Barometer */}
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Semicircle gauge background */}
            <Box
              sx={{
                position: 'absolute',
                width: 32,
                height: 16,
                borderRadius: '16px 16px 0 0',
                background: 'linear-gradient(to right, rgba(103, 80, 164, 0.3), rgba(103, 80, 164, 0.1) 50%, rgba(244, 67, 54, 0.1) 50%, rgba(244, 67, 54, 0.3))',
              }}
            />
            {/* Needle */}
            <Box
              sx={{
                position: 'absolute',
                width: 2,
                height: 14,
                background: 'rgba(230, 225, 229, 0.8)',
                borderRadius: '1px',
                transformOrigin: 'center bottom',
                transform: `rotate(${rotation}deg)`,
                bottom: 0,
              }}
            />
            {/* Center dot */}
            <Box
              sx={{
                position: 'absolute',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'rgba(230, 225, 229, 0.8)',
                bottom: '-2px',
              }}
            />
          </Box>

          {/* Value */}
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '1.8rem',
              color: color,
              textShadow: `0 0 30px ${color}50`,
              letterSpacing: '-0.02em',
              mb: 0.5,
            }}
          >
            {value}
          </Typography>

          {/* Expiry time */}
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: 'rgba(230, 225, 229, 0.6)',
            }}
          >
            {expiresIn}
          </Typography>
        </Box>
      </Box>
      </Paper>

      {/* Edge Notches */}
      {/* Left notch */}
      <Box
        sx={{
          position: 'absolute',
          left: -10,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 20,
          height: 20,
          overflow: 'visible',
        }}
      >
        {/* Shadow */}
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            width: '50%',
            height: '100%',
            borderRadius: '10px',
            background: 'rgba(0, 0, 0, 0.18)',
            zIndex: 1,
          }}
        />
        {/* Inner glow */}
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: '15%',
            width: '25%',
            height: '70%',
            borderRadius: '5px',
            background: 'rgba(0, 0, 0, 0.12)',
            zIndex: 1,
          }}
        />
        {/* Mask */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            background: '#1E1B1F',
            zIndex: 2,
          }}
        />
      </Box>

      {/* Right notch */}
      <Box
        sx={{
          position: 'absolute',
          right: -10,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 20,
          height: 20,
          overflow: 'visible',
        }}
      >
        {/* Shadow */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            width: '50%',
            height: '100%',
            borderRadius: '10px',
            background: 'rgba(0, 0, 0, 0.18)',
            zIndex: 1,
          }}
        />
        {/* Inner glow */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: '15%',
            width: '25%',
            height: '70%',
            borderRadius: '5px',
            background: 'rgba(0, 0, 0, 0.12)',
            zIndex: 1,
          }}
        />
        {/* Mask */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            background: '#1E1B1F',
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default CouponCard;
