import { NavigationHandler } from 'navigation-react';
import { NavigationStack, Scene } from 'navigation-react-native';
import React from 'react';

import { ThemeProvider } from './src/contexts/ThemeContext';
import BottomTabs from './src/navigation/BottomTabs';

import { StateNavigator } from 'navigation';
import Welcome from './src/screens/Welcome';

const stateNavigator = new StateNavigator([
  { key: 'welcome' },
  { key: 'tabs', trackCrumbTrail: false },
]);

const App = () => {
  return (
    <NavigationHandler stateNavigator={stateNavigator}>
      <ThemeProvider>
        <NavigationStack unmountStyle={{ type: 'translate', startX: '100%' }}>
          <Scene stateKey='welcome'>
            <Welcome />
          </Scene>
          <Scene stateKey='tabs'>
            <BottomTabs />
          </Scene>
        </NavigationStack>
      </ThemeProvider>
    </NavigationHandler>
  );
};

export default App;
