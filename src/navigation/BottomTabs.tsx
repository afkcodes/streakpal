import { StateNavigator } from 'navigation';
import { NavigationHandler } from 'navigation-react';
import {
  NavigationBar,
  NavigationStack,
  Scene,
  TabBar,
  TabBarItem,
} from 'navigation-react-native';
import { Fragment } from 'react';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Stats from '../screens/Stats';
import { themes } from '../styles/themes';

const BottomTabs = () => {
  const homeNavigator = new StateNavigator([
    { key: 'home' },
    { key: 'stats', trackCrumbTrail: true },
  ]);

  const statsNavigator = new StateNavigator([{ key: 'stats' }]);

  const settingsNavigator = new StateNavigator([{ key: 'settings' }]);

  return (
    <Fragment>
      <NavigationBar hidden={true} />
      <TabBar
        primary={true}
        bottomTabs={true}
        labelVisibilityMode='unlabeled'
        unselectedTintColor={themes.dark.text.primary}
        barTintColor={themes.dark.background.secondary}
        selectedTintColor={themes.dark.text.accent}>
        <TabBarItem
          title='Home'
          image={require('../../assets/images/nav-icons/home_active.png')}>
          <NavigationHandler stateNavigator={homeNavigator}>
            <NavigationStack>
              <Scene stateKey='home'>
                <Home />
              </Scene>
              <Scene stateKey='stats'>
                <Stats />
              </Scene>
            </NavigationStack>
          </NavigationHandler>
        </TabBarItem>
        <TabBarItem
          title='Home'
          image={require('../../assets/images/nav-icons/search_inactive.png')}>
          <NavigationHandler stateNavigator={statsNavigator}>
            <NavigationStack>
              <Scene stateKey='stats'>
                <Stats />
              </Scene>
            </NavigationStack>
          </NavigationHandler>
        </TabBarItem>
        <TabBarItem
          title='Home'
          image={require('../../assets/images/nav-icons/settings_active.png')}>
          <NavigationHandler stateNavigator={settingsNavigator}>
            <NavigationStack>
              <Scene stateKey='settings'>
                <Settings />
              </Scene>
            </NavigationStack>
          </NavigationHandler>
        </TabBarItem>
      </TabBar>
    </Fragment>
  );
};

export default BottomTabs;
