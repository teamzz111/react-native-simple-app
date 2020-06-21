
import React, {useEffect} from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { AppNavigator }  from './src/navigation/root';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ToastAndroid, Platform } from 'react-native';

import NetInfo from '@react-native-community/netinfo';

export default App = () => {

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      if(state.isConnected){
        ToastAndroid.show('You are online', ToastAndroid.SHORT);

      } else {
        ToastAndroid.show('You are offline', ToastAndroid.SHORT);

      }
    });

  }, []);

  return(
      <ApplicationProvider {...eva} theme={eva.light}>
        <IconRegistry icons={EvaIconsPack} />

        <AppNavigator/>
      </ApplicationProvider>
    );
};