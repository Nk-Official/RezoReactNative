/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Test1 from './Test1';
import scrollTest from './ScrollTest';
import SceneOne from "./ToDo/scene1.js";
import ReviewHomeScreen from "./ReviewApp/ReviewHomeScreen.js";
import {name as appName} from './app.json';
import Navigator from './ReviewApp/NavigationStackReviewApp.js';

import MyStack from './ReviewApp/NavigationStackReviewApp.js';
import DrawerHome from './Drawer/DrawerHome';
import DrawerSetUp from './Drawer/DrawerSetUp';
import TabbarSetUp from "./TabBar/tabbarSetUp";

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Test1);
// AppRegistry.registerComponent(appName,()=>scrollTest)
// AppRegistry.registerComponent(appName,()=>SceneOne)
// AppRegistry.registerComponent(appName,()=>ReviewHomeScreen)

// const navigation = ()=>{
//     return (
//         <Navigator />
//     )
// }

// AppRegistry.registerComponent(appName,navigation)

// AppRegistry.registerComponent(appName,() => MyStack)
// AppRegistry.registerComponent(appName,() => DrawerHome)

AppRegistry.registerComponent(appName, () => DrawerSetUp);
// AppRegistry.registerComponent(appName,() => TabbarSetUp)
