
import React, {useEffect} from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { AppNavigator }  from './src/navigation/root';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ToastAndroid, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import NetInfo from '@react-native-community/netinfo';

export default App = () => {

  useEffect(() => {
    NetInfo.fetch().then(async (state) => {
      if(state.isConnected){
        ToastAndroid.show('You are online', ToastAndroid.SHORT);
        await AsyncStorage.setItem("online", "1");

      } else {
        ToastAndroid.show('You are offline', ToastAndroid.SHORT);
        await AsyncStorage.setItem('online', "0");

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