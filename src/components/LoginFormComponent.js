import React from 'react';
import PropTypes from 'prop-types';
import { Content, Form, Item, Input, Label, Button, Text } from 'native-base';

const LoginFormComponent = ({ onPressLogin }) => (
  <Form>
    <Item floatingLabel>
      <Label>Username</Label>
      <Input testID="username_input" />
    </Item>
    <Item floatingLabel last>
      <Label>Password</Label>
      <Input testID="password_input" />
    </Item>
    <Content padder>
      <Button block onPress={onPressLogin} testID="login_button">
        <Text>Login</Text>
      </Button>
    </Content>
  </Form>
);

LoginFormComponent.propTypes = {
  onPressLogin: PropTypes.func.isRequired
};

export default LoginFormComponent;
