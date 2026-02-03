import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Legend component that explains the map's symbols and colors
 * @component
 * @returns {JSX.Element} A panel showing the map legend with point and area type descriptions
 */

const LegendContainer = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: 20,
  left: 55,
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
  padding: theme.spacing(3),
  zIndex: 1000,
  maxWidth: 300,
  border: '3px solid rgba(102, 126, 234, 0.6)',
  transition: 'all 0.3s ease',
}));

const LegendSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const LegendSubsection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const LegendItems = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
});

const LegendItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const LegendIcon = styled(Box)<{ variant: 'landmark' | 'animal' | 'insect' | 'plant' }>(({ variant }) => {
  const colors = {
    landmark: '#e74c3c',
    animal: '#3498db',
    insect: '#f39c12',
    plant: '#27ae60',
  };

  return {
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: colors[variant],
  };
});

const AreaLegendItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

const AreaLegendIcon = styled(Box)<{ variant: 'species' | 'water' | 'soil' }>(({ variant }) => {
  const styles = {
    species: {
      backgroundColor: 'rgba(255, 215, 0, 0.3)',
      border: '1px solid #FFD700',
    },
    water: {
      backgroundColor: 'rgba(74, 144, 226, 0.3)',
      border: '1px solid #4A90E2',
    },
    soil: {
      backgroundColor: 'rgba(139, 69, 19, 0.3)',
      border: '1px solid #8B4513',
    },
  };

  return {
    width: 20,
    height: 12,
    borderRadius: 2,
    ...styles[variant],
  };
});

export const MapLegend: React.FC = () => {
  return (
    <LegendContainer elevation={0}>
      <LegendSection>
        <Typography
          variant="h5"
          sx={{
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: '12px',
            color: '#2c3e50',
          }}
        >
          Legend
        </Typography>

        <LegendSubsection>
          <Typography
            variant="h6"
            sx={{
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '8px',
              color: '#34495e',
            }}
          >
            Points
          </Typography>
          <LegendItems>
            <LegendItem>
              <LegendIcon variant="landmark" />
              <Typography variant="body2" sx={{ color: '#5a6c7d' }}>
                Landmark
              </Typography>
            </LegendItem>
            <LegendItem>
              <LegendIcon variant="animal" />
              <Typography variant="body2" sx={{ color: '#5a6c7d' }}>
                Animals
              </Typography>
            </LegendItem>
            <LegendItem>
              <LegendIcon variant="insect" />
              <Typography variant="body2" sx={{ color: '#5a6c7d' }}>
                Insect
              </Typography>
            </LegendItem>
            <LegendItem>
              <LegendIcon variant="plant" />
              <Typography variant="body2" sx={{ color: '#5a6c7d' }}>
                Plants
              </Typography>
            </LegendItem>
          </LegendItems>
        </LegendSubsection>

        <Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '8px',
              color: '#34495e',
            }}
          >
            Areas
          </Typography>
          <LegendItems>
            <AreaLegendItem>
              <AreaLegendIcon variant="species" />
              <Typography variant="body2" sx={{ color: '#5a6c7d' }}>
                Species
              </Typography>
            </AreaLegendItem>
            <AreaLegendItem>
              <AreaLegendIcon variant="water" />
              <Typography variant="body2" sx={{ color: '#5a6c7d' }}>
                Water Bodies
              </Typography>
            </AreaLegendItem>
            <AreaLegendItem>
              <AreaLegendIcon variant="soil" />
              <Typography variant="body2" sx={{ color: '#5a6c7d' }}>
                Soil
              </Typography>
            </AreaLegendItem>
          </LegendItems>
        </Box>
      </LegendSection>
    </LegendContainer>
  );
};
