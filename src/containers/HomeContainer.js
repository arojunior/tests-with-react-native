import { compose, withHandlers } from 'recompose';
import { withNavigation } from 'react-navigation';
import HomeComponent from '../components/HomeComponent';

const onPressBack = ({ navigation }) => () => {
  navigation.navigate('Login');
};

export default compose(
  withNavigation,
  withHandlers({ onPressBack })
)(HomeComponent);
