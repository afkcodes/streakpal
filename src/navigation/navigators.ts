import { StateNavigator } from 'navigation';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Stats from '../screens/Stats';
import { themes } from '../styles/themes';

const stateNavigator = new StateNavigator([
  { key: 'welcome' },
  { key: 'tabs', trackCrumbTrail: false },
]);

const tabNavigator = new StateNavigator([{ key: 'tabs' }]);

const homeNavigator = new StateNavigator([{ key: 'home' }]);

const statsNavigator = new StateNavigator([{ key: 'stats' }]);

const settingsNavigator = new StateNavigator([{ key: 'settings' }]);

const tabs = [
  {
    id: 'home',
    title: 'Home',
    icon: require('../../assets/images/nav-icons/home_inactive.png'),
    fontSize: 10,
    family: themes.dark.typography.fontFamily.medium,
    navigatorState: homeNavigator,
    scenes: [{ key: 'home', component: Home }],
  },
  {
    id: 'search',
    title: 'Search',
    icon: require('../../assets/images/nav-icons/search_inactive.png'),
    fontSize: 10,
    family: themes.dark.typography.fontFamily.medium,
    navigatorState: statsNavigator,
    scenes: [{ key: 'stats', component: Stats }],
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: require('../../assets/images/nav-icons/settings_inactive.png'),
    fontSize: 10,
    family: themes.dark.typography.fontFamily.medium,
    navigatorState: settingsNavigator,
    scenes: [{ key: 'settings', component: Settings }],
  },
];

export {
  homeNavigator,
  settingsNavigator,
  stateNavigator,
  statsNavigator,
  tabNavigator,
  tabs,
};
