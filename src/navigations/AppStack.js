import { createStackNavigator } from 'react-navigation';
import MainScreen from "../components/appScreens/Main";

const AppStack = createStackNavigator({ 
    Home: MainScreen
});

export default AppStack;