import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface CouponCardProps {
  shop: string;
  value: string;
  code: string;
  expiresIn: string;
  color: string;
}

const CouponCard: React.FC<CouponCardProps> = ({
  shop,
  value,
  code,
  expiresIn,
  color,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: 240,
        height: 160,
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #3D3A45 0%, #2B2930 100%)',
        border: '0.5px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: `0 16px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px ${color}30`,
        },
      }}
    >
      {/* Left edge notch */}
      <Box
        sx={{
          position: 'absolute',
          left: -10,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: '#1C1B1F',
          zIndex: 5,
        }}
      />
      
      {/* Right edge notch */}
      <Box
        sx={{
          position: 'absolute',
          right: -10,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: '#1C1B1F',
          zIndex: 5,
        }}
      />

      {/* Background glow */}
      <Box
        sx={{
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: `${color}15`,
          top: -60,
          left: -40,
          filter: 'blur(30px)',
        }}
      />

      <Box sx={{ p: 2.5, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
        {/* Top row: Shop name and expiry */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: '8px',
                background: `${color}25`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${color}40`,
              }}
            >
              <Typography sx={{ fontSize: 14, color }}>
                {shop.charAt(0)}
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: 'white', fontSize: '0.9rem' }}
            >
              {shop}
            </Typography>
          </Box>
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              px: 1,
              py: 0.3,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: 'rgba(230, 225, 229, 0.6)', fontSize: '0.65rem' }}
            >
              {expiresIn}
            </Typography>
          </Box>
        </Box>

        {/* Value - centered and prominent */}
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '2.2rem',
              color: color,
              textShadow: `0 0 40px ${color}50`,
              letterSpacing: '-0.02em',
            }}
          >
            {value}
          </Typography>
        </Box>

        {/* Bottom: Code */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              background: 'rgba(208, 188, 255, 0.12)',
              borderRadius: '8px',
              px: 2,
              py: 0.5,
              border: '1px dashed rgba(208, 188, 255, 0.25)',
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Roboto Mono", monospace',
                color: '#D0BCFF',
                fontWeight: 600,
                letterSpacing: 2,
                fontSize: '0.85rem',
              }}
            >
              {code}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CouponCard;
