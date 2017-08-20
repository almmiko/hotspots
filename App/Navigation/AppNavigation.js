import { StackNavigator, DrawerNavigator } from 'react-navigation';
import * as Colors from './Styles/NavigationStyles';
import FavoriteHotspotsScreen from '../Containers/FavoriteHotspotsScreen';
import { getNavigationOptionsWithAction, getNavBarIcon } from './HeaderBarSettings/navBarSettings';
import DrawerView from './Drawer/DrawerView';
import AllHotspotsListScreen from '../Containers/AllHotspotsListScreen';
import HotspotInfoScreen from '../Containers/HotspotInfoScreen';
import withHeaderWrapper from '../Containers/HOC/withHeaderWrapper';

/* SCREEN DECLARATIONS */
const generalScreens = [
  { name: 'AllHotspotsListScreen', component: AllHotspotsListScreen },
  { name: 'FavoriteHotspotsScreen', component: FavoriteHotspotsScreen },
];

const stackScreens = [
  { name: 'HotspotInfoScreen', component: withHeaderWrapper(HotspotInfoScreen) },
];

/* GLOBAL NAVBAR OPTIONS */
const navigationOptions = ({ navigation }) =>
  getNavigationOptionsWithAction(
    Colors.headerBg,
    Colors.headerTitleColor,
    getNavBarIcon(navigation, '#00c583'),
  );

/* APP NAVIGATION FACTORY */
const navigationFactory = (screens, navOpt, stackComponentsScreens) => {
  const routesPrefix = {
    STACK: 'STACK',
  };

  const stackRoutes = {};
  const drawerRoutes = {};

  screens.forEach((screen) => {
    const stackScreenRoutesName = `${screen.name}${routesPrefix.STACK}`;

    stackRoutes[stackScreenRoutesName] = { screen: screen.component };

    drawerRoutes[screen.name] = {
      name: screen.name,
      screen: StackNavigator(stackRoutes, { initialRouteName: stackScreenRoutesName, navOpt }),
    };
  });

  if (stackComponentsScreens && stackComponentsScreens.length > 0) {
    stackComponentsScreens.forEach((screen) => {
      stackRoutes[screen.name] = { screen: screen.component };
    });
  }

  return StackNavigator(
    {
      Drawer: {
        name: 'Drawer',
        screen: DrawerNavigator(drawerRoutes, { contentComponent: DrawerView }),
      },
      ...stackRoutes,
    },
    {
      navigationOptions: {
        header: null,
      },
    },
  );
};

const PrimaryNav = navigationFactory(generalScreens, navigationOptions, stackScreens);

export default PrimaryNav;
