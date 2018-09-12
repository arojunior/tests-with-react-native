describe('Example', () => {
  it('should have header text', async () => {
    await expect(element(by.text('Header'))).toBeVisible();
  });

  it('should have bottom text', async () => {
    await expect(element(by.text('Tests with react-native'))).toBeVisible();
  });

  it('should show home screen after tap login button', async () => {
    await element(by.id('username_input')).tap()
    await element(by.id('username_input')).typeText("arojunior");
    await element(by.id('password_input')).tap();
    await element(by.id('password_input')).typeText("123456");
    await element(by.id('login_button')).tap();
    await expect(element(by.text('Home component'))).toBeVisible();
  });

  it('should go back to login screen after tap back button', async () => {
    await element(by.id('back_button')).tap();
    await expect(element(by.id('login_button'))).toBeVisible();
  });  
})