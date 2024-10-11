import { NavigationHandler } from 'navigation-react';
import { NavigationStack, Scene, TabBar, TabBarItem } from 'navigation-react-native';
import { Fragment } from 'react';
import { Platform } from 'react-native';
import { themes } from '../styles/themes';
import { tabs } from './navigators';

const BottomTabs = () => {
  return (
    <Fragment>
      <TabBar
        primary={true}
        bottomTabs={true}
        unselectedTintColor={themes.dark.text.accent}
        // selectedTintColor={theme.dark.button.primary}
        // barTintColor={theme.dark.navigation.background}
        labelVisibilityMode='unlabeled'>
        {tabs.map((tab) => (
          <TabBarItem
            key={tab.id}
            image={tab.icon}
            fontFamily={tab.family}
            fontSize={tab.fontSize}>
            <NavigationHandler stateNavigator={tab.navigatorState}>
              <NavigationStack
                backgroundColor={() =>
                  Platform.OS === 'android'
                    ? themes.dark.background.primary
                    : 'transparent'
                }>
                {tab.scenes?.map((scene) => (
                  <Scene key={scene.key} stateKey={scene.key}>
                    <scene.component />
                  </Scene>
                ))}
              </NavigationStack>
            </NavigationHandler>
          </TabBarItem>
        ))}
      </TabBar>
    </Fragment>
  );
};

export default BottomTabs;
