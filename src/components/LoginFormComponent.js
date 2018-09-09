import React from 'react';
import PropTypes from 'prop-types';
import { Content, Form, Item, Input, Label, Button, Text } from 'native-base';

const LoginFormComponent = ({ onPressLogin }) => (
  <Form>
    <Item floatingLabel>
      <Label>Username</Label>
      <Input />
    </Item>
    <Item floatingLabel last>
      <Label>Password</Label>
      <Input />
    </Item>
    <Content padder>
      <Button block onPress={onPressLogin}>
        <Text>Login</Text>
      </Button>
    </Content>
  </Form>
);

LoginFormComponent.propTypes = {
  onPressLogin: PropTypes.func.isRequired
};

export default LoginFormComponent;
