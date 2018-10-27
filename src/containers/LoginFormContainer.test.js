import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import LoginFormContainer from './LoginFormContainer';
import LoginFormComponent from '../components/LoginFormComponent.js';

jest.useFakeTimers();
console.error = () => {};

describe(`LoginFormContainer`, () => {
  const navigation = { navigate: jest.fn() };
  const wrapper = mount(<LoginFormContainer navigation={navigation} />);
  const component = wrapper.find(LoginFormComponent);

  beforeEach(() => {
    component.props().resetForm();
  });

  it(`should match username and password typed on form`, () => {
    component.props().handleChange(`username`)(`arojunior`);
    component.props().handleChange(`password`)(`12345`);
    wrapper.update();
    expect(wrapper.find(LoginFormComponent).props().values.username).toBe(
      `arojunior`
    );
    expect(wrapper.find(LoginFormComponent).props().values.password).toBe(
      `12345`
    );
  });

  it(`should show error when password is empty`, () => {
    component.props().handleChange(`username`)(`arojunior`);
    component.props().handleChange(`password`)(``);
    component
      .find(`Button[testID="login_button"]`)
      .props()
      .onPress();

    wrapper.update();

    setTimeout(() => {
      expect(wrapper.find(LoginFormComponent).props().errors.password).toBe(
        `required field (type anything)`
      );
    }, 1000);
  });
});
