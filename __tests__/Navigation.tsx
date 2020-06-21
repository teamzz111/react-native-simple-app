import Home from '../src/screens/home'
import renderer from 'react-test-renderer';
import React from 'react';
import "react-native";

jest.mock('@react-native-firebase/analytics', () => {
  return () => ({
    logEvent: jest.fn(),
    setUserProperties: jest.fn(),
    setUserId: jest.fn(),
    setCurrentScreen: jest.fn(),
  });
});

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
  useNavigationParam: jest.fn(
    jest.requireActual('@react-navigation/native').useNavigationParam,
  ),
}));

it('should render correctly', () => {
  const {toJSON} = renderer.create(<Home/>);
  expect(toJSON()).toMatchSnapshot();
});