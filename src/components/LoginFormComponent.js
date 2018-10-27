import React from 'react';
import PropTypes from 'prop-types';
import { Content, Form, Item, Input, Label, Button, Text } from 'native-base';

const LoginFormComponent = ({ handleSubmit, handleChange, errors }) => (
  <Form>
    <Item floatingLabel error={!!errors.username}>
      <Label>Username</Label>
      <Input onChangeText={handleChange(`username`)} testID="username_input" />
    </Item>
    {errors.username && (
      <Item>
        <Text>{errors.username}</Text>
      </Item>
    )}
    <Item floatingLabel last error={!!errors.password}>
      <Label>Password</Label>
      <Input
        secureTextEntry
        onChangeText={handleChange(`password`)}
        testID="password_input"
      />
    </Item>
    {errors.password && (
      <Item>
        <Text>{errors.password}</Text>
      </Item>
    )}
    <Content padder>
      <Button
        block
        onPress={handleSubmit}
        testID="login_button"
      >
        <Text>Login</Text>
      </Button>
    </Content>
  </Form>
);

LoginFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default LoginFormComponent;
