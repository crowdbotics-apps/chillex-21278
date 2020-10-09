import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList133592Navigator from '../features/ArticleList133592/navigator';
import ArticleList133591Navigator from '../features/ArticleList133591/navigator';
import BlankScreen0133574Navigator from '../features/BlankScreen0133574/navigator';
import ArticleList133557Navigator from '../features/ArticleList133557/navigator';
import ArticleList133556Navigator from '../features/ArticleList133556/navigator';
import ArticleList133555Navigator from '../features/ArticleList133555/navigator';
import Settings133540Navigator from '../features/Settings133540/navigator';
import Settings133523Navigator from '../features/Settings133523/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList133592: { screen: ArticleList133592Navigator },
ArticleList133591: { screen: ArticleList133591Navigator },
BlankScreen0133574: { screen: BlankScreen0133574Navigator },
ArticleList133557: { screen: ArticleList133557Navigator },
ArticleList133556: { screen: ArticleList133556Navigator },
ArticleList133555: { screen: ArticleList133555Navigator },
Settings133540: { screen: Settings133540Navigator },
Settings133523: { screen: Settings133523Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
