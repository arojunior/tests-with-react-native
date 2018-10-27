import LoginFormComponent from './LoginFormComponent';

describe(`LoginFormComponent`, () => {
  test(`Snapshot`, () => {
    expect(LoginFormComponent).toMatchSnapshot();
  });
});
