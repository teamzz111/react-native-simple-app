
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { AppNavigator }  from './src/navigation/root';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

export default App = () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <AppNavigator/>
  </ApplicationProvider>
);