import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList, View, StatusBar } from 'react-native';
import { Icon, Layout, TopNavigation, TopNavigationAction, Spinner } from '@ui-kitten/components';
import CardItem from '../components/cardList';
import { fetchData } from '../utils/utils';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);

const List = ({navigation}) => {

  const [loaded, setloaded] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);
  const [lazy, setLazy] = useState(false);

  const getData = async() => {
    const info = await fetchData.OpenGet("spain", "geo.gettopartists", 10, page);
    if(info.ok){
      setData(info.data['topartists']['artist']);
    } else {
      console.log(info)
    }
  }


  const endReached = async () => {
    setLazy(true);
    const info = await fetchData.OpenGet("spain", "geo.gettopartists", 10, (page + 1));
    setPage(page + 1);
    if (info.ok) {
      info.data['topartists']['artist'].map(e => {
        data.push(e);
      });
    } else {
      console.log(response.error);
    }
    setLazy(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress = {() => navigation.goBack(null)}/>
  );

  const move = item => {
    navigation.navigate("Details", {item});
  }

  return (
    <Layout style={styles.container} level='3'>
      <TopNavigation
        alignment='center'
        title='Top List of'
        subtitle='Subtitle'
        accessoryLeft={renderBackAction}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => 
          <CardItem item = {item}  handleDetails = {() => move(item)}/>  
        }

        keyExtractor={(item, index) => index.toString()}
        onEndReached={endReached}
        onEndReachedThreshold={0.1}
      />
      {
      lazy && 
        <View style = {styles.spinner}>
          <Spinner status = "success" size='giant'/>
        </View>
      }

    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  text: {
    fontSize: 40,
    marginHorizontal: 10,
    marginBottom: 5,
    fontWeight: 'bold'
  },
});

export default List;