import { useEffect, useState } from 'react';
import { Header } from '@/components/Layout/Header';
import { MapContainer } from '@/components/Map/MapContainer';
import { MapLegend } from '@/components/Map/MapLegend';
import { LayerControls } from '@/components/Map/LayerControls';
import { styled } from '@mui/material/styles';
import '@/styles/globals.css';
import '@/styles/map.css';
import theme from './theme/theme';
import { FixtureReader } from './data/fixture-reader';
import type { LayerVisibilityMap } from './types/map';
import type { FeatureCollection } from './types/geometry';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

const AppContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
});

const MainContent = styled(Box)({
  flex: 1,
  position: 'relative',
  overflow: 'hidden',
});
/**
 * Main application component that composes the entire UI
 * Manages the map state and renders the map with its controls
 * @component
 * @returns {JSX.Element} The complete application layout with header and map interface
 */
function App() {
  const [layers, setLayers] = useState<FeatureCollection[]>([]);
  const [layerVisibility, setLayerVisibility] = useState<LayerVisibilityMap>({});

  useEffect(() => {
    FixtureReader.collections()
      .then(collections => {
        setLayers([...collections]);

        // Take the name property of each collection and set its initial visibility to true
        const layerNames = collections.map((fc) => fc.name);
        const visibilityMap = layerNames.reduce((map, name) => {
          map[name] = true;
          return map;
        }, {} as LayerVisibilityMap);
        setLayerVisibility({ ...visibilityMap });
      });
  }, []);

  const layersToRender = layers.filter((fc) => layerVisibility[fc.name]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <Header />
        <MainContent>
          <MapContainer layers={layersToRender} />
          <MapLegend />
          <LayerControls
            visibilityMap={layerVisibility}
            onLayerChange={setLayerVisibility}
          />
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;