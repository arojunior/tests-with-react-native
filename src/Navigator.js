import { createStackNavigator } from 'react-navigation';
import LoginScreenComponent from './components/LoginScreenComponent';
import HomeContainer from './containers/HomeContainer';

export default createStackNavigator(
  {
    Home: HomeContainer,
    Login: LoginScreenComponent
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);
