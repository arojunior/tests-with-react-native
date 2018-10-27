import HomeComponent from './HomeComponent';

describe(`HomeComponent`, () => {
  test(`Snapshot`, () => {
    expect(HomeComponent).toMatchSnapshot();
  });
});
