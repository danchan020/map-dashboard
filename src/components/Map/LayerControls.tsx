import React from 'react';
import { PawPrint, Droplets, Mountain, Calendar } from 'lucide-react';
import { Box, Typography, FormControlLabel, Checkbox } from '@mui/material';
import type { LayerVisibilityMap } from '@/types/map';


interface LayerControlsProps {
  visibilityMap: LayerVisibilityMap,
  onLayerChange: (visibilityMap: LayerVisibilityMap) => void;
}

// Map layer types to icons for UI representation
const layerIcons = {
  species: PawPrint,
  water: Droplets,
  soil: Mountain,
  events: Calendar,
}

/**
 * A control panel component for managing map layer visibility
 * @component
 * @param {LayerControlsProps} props - The component props
 * @returns {JSX.Element} A panel with layer toggle controls and type selection buttons
 */
export const LayerControls = ({
  visibilityMap,
  onLayerChange,
}: LayerControlsProps) => {
  return (
    <Box
      sx={{
        // Positioning
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1000,
        minWidth: 250,

        // Background with glassmorphism effect
        background:
          'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
        backdropFilter: 'blur(10px)',

        // Border & shape
        borderRadius: '16px',
        border: '3px solid rgba(102, 126, 234, 0.6)',

        // Shadow & spacing
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
        padding: 3, // 24px (theme.spacing(3))

        // Animation
        transition: 'all 0.3s ease',

        // Hover effects
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
          borderColor: 'rgba(102, 126, 234, 0.8)',
        },
      }}
    >
      <Typography
        variant="h6"
        component="h3"
        sx={{
          fontSize: '18px',
          fontWeight: 600,
          marginBottom: '12px',
          color: '#2c3e50',
        }}
      >
        Map Data Layers
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {Object.entries(visibilityMap).map(([layerKey, isVisible]) => {
          const Icon = layerIcons[layerKey as keyof typeof layerIcons];

          return (
            <Box
              key={layerKey}
              sx={{
                // Layout
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',

                // Spacing & shape
                padding: 2, // 16px
                borderRadius: '12px',
                marginBottom: 1, // 8px

                // Background & border
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(102, 126, 234, 0.15)',

                // Animation
                transition: 'all 0.3s ease',
              }}
            >
              <Checkbox
                id={`layer-${layerKey}`}
                checked={isVisible}
                onChange={() =>
                  onLayerChange({ ...visibilityMap, [layerKey]: !isVisible })
                }
                sx={{
                  padding: 0,
                  '&.Mui-checked': {
                    color: 'rgba(102, 126, 234, 0.8)',
                  },
                }}
              />

              {/* Layer Info */}
              <Box sx={{ flex: 1 }}>
                {/* Layer Name */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    marginBottom: '4px',
                  }}
                >
                  {Icon && (
                    <Icon
                      size={16}
                      style={{ color: '#2c3e50' }}
                    />
                  )}
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      color: '#2c3e50',
                    }}
                  >
                    {layerKey.charAt(0).toUpperCase() + layerKey.slice(1)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
    // <div className="layer-controls">
    //   <h3 className="legend-title">Map Data Layers</h3>

    //   {/* Render buttons for switching active layer types (with icons) */}
    //   {/*
    //     <div className="layer-icons">
    //     {Object.entries(layerIcons).map(([type, Icon]) => (
    //       <button
    //         key={type}
    //         className={`layer-icon-button ${
    //           activeLayerType === type ? 'active' : ''
    //         }`}
    //         onClick={() => onLayerTypeChange(type)}
    //       >
    //         <Icon size={20} />
    //         <span className="layer-icon-text">
    //           {type.charAt(0).toUpperCase() + type.slice(1)}
    //         </span>
    //       </button>
    //     ))}
    //   </div>
    //   */}


    //   {/* Render checkboxes for each available layer (with icons) */}
    //   <div>
    //     {Object.entries(visibilityMap).map(([k, v], idx) => {
    //       const Icon = layerIcons[k as keyof typeof layerIcons];
    //       return (
    //         <div key={idx} className="layer-item">
    //           <Checkbox
    //             id={`layer-${k}`}
    //             checked={v}
    //             onChange={() => onLayerChange({ ...visibilityMap, [k]: !v })}
    //           />
    //           <div className="layer-info">
    //             <div className="layer-name">
    //               {Icon ? <Icon size={16} /> : null}
    //               <span className="layer-name-text">{k}</span>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};
