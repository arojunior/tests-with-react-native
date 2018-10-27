import { compose } from 'recompose';
import { withNavigation } from 'react-navigation';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import LoginFormComponent from '../components/LoginFormComponent';

const onPressLogin = (values, { props: { navigation } }) => {
  console.log(`values`, values)
  navigation.navigate('Home');
};

const validationSchema =
  Yup.object().shape({
    username: Yup.string().min(2).required('required field (type anything)'),
    password: Yup.string().min(2).required('required field (type anything)')
  });

export default compose(
  withNavigation,
  withFormik({
    mapPropsToValues: () => ({}),
    validationSchema,
    handleSubmit: onPressLogin,
    validateOnChange: true
  })
)(LoginFormComponent);
