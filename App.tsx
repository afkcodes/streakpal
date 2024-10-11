import { NavigationHandler } from 'navigation-react';
import { NavigationStack, Scene } from 'navigation-react-native';
import React from 'react';
import { ThemeProvider } from './src/contexts/ThemeContext';
import BottomTabs from './src/navigation/BottomTabs';
import { stateNavigator } from './src/navigation/navigators';
import Welcome from './src/screens/Welcome';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationHandler stateNavigator={stateNavigator}>
        <NavigationStack
          backgroundColor={() => 'transparent'}
          crumbStyle={[{ type: 'translate', startX: '-10%', duration: 200 }]}>
          <Scene stateKey='welcome'>
            <Welcome />
          </Scene>
          <Scene stateKey='tabs'>
            <BottomTabs />
          </Scene>
        </NavigationStack>
      </NavigationHandler>
    </ThemeProvider>
  );
};

export default App;
