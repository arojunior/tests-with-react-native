import { compose, withHandlers } from 'recompose';
import { withNavigation } from 'react-navigation';
import LoginFormComponent from '../components/LoginFormComponent';

const onPressLogin = ({ navigation }) => () => {
  navigation.navigate('Home');
};

export default compose(
  withNavigation,
  withHandlers({ onPressLogin })
)(LoginFormComponent);
