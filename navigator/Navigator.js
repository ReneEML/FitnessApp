import LoginScreen from '../src/screens/Login'
import Home from '../src/screens/Home'
import LoadingScreen from '../src/screens/LoadingScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { platform}

const HomeStack = createStackNavigator({ Home });
const MainTabs = createBottomTabNavigator({ HomeStack });
const RootSwitch = createSwitchNavigator({ LoadingScreen, MainTabs });

export default RootSwitch;
