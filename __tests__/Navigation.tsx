import Home from '../src/screens/home'

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
  useNavigationParam: jest.fn(
    jest.requireActual('react-navigation-hooks').useNavigationParam,
  ),
}));

it('should render correctly', () => {
  const {toJSON} = render(
    <MockedNavigator component={Home} />
  );
  expect(toJSON()).toMatchSnapshot();
});