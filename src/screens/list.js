import React from 'react';
import { StyleSheet, FlatList, ImageBackground, StatusBar } from 'react-native';
import { Icon, Layout, ListItem, Button, TopNavigation, TopNavigationAction, Avatar } from '@ui-kitten/components';
import CardList from '../components/cardList';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);

const DATA = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const List = ({navigation}) => {
  const InstallButton = (props) => (
    <Button size='tiny'>
      INSTALL
    </Button>
  );

 
  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress = {() => navigation.goBack(null)}/>
  );

  return (
    <Layout style={styles.container} level='3'>
      <TopNavigation
        alignment='center'
        title='Top List of'
        subtitle='Subtitle'
        accessoryLeft={renderBackAction}
      />
      <FlatList
        data={DATA}
        renderItem={({ item }) => 
          <CardList/>  
        }
        
      />

    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
    text: {
    fontSize: 40,
    marginHorizontal: 10,
    marginBottom: 5,
    fontWeight: 'bold'
  },
});

export default List;