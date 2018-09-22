import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../components/authScreens/Login';
import SignUpScreen from "../components/authScreens/SignUp";

const AuthStack = createStackNavigator({ 
    SignIn: {
        screen: SignInScreen,
        navigationOptions: {
            header: null,
        }
    },

    SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            title: 'Sign Up',
        }
    },
});

export default AuthStack;