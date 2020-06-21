import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, FlatList } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addAnalytics } from '../firebase/firebase';

const elements = [{
  img: require('../assets/artist.jpeg'),
  title: 'Artists',
  array: {
    one: 'topartists',
    two: 'artist'
  },
  id: 'artist',
  function: 'geo.gettopartists'
}, {
  img: require('../assets/song.jpeg'),
  title: 'Tracks',
  array: {
      one: 'tracks',
      two: 'track'
    },
  id: 'tracks',
  function: 'geo.gettoptracks'
}];

const Home = ({navigation}) => {

    const navigate = (item) => {
      addAnalytics(item.id, item.title);
      navigation.navigate("List", {item})
    }
    return(
      <Layout style = {styles.container} level='3'>
        <StatusBar barStyle="dark-content" backgroundColor={'#edf1f7'} />
        <Text category='h1' style = {styles.text}>GEO</Text>
        <Layout style={styles.topContainer}level='3' >
            <FlatList
              data={elements}
              renderItem={({ item }) =>             
                <ImageBackground source={item.img} style={styles.image}   imageStyle={{ borderRadius: 8 }}>
                  <TouchableOpacity onPress = {() => navigate(item)}>
                    <View style = {styles.overlay}>
                      <Text style = {styles.colorSub} category='c1'>Top List of</Text>
                      <Text style = {styles.colorSub} category='h4'>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>}
              keyExtractor={(item, index) => index.toString()}
            />
        </Layout>
      </Layout>
    )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 14,
  },
  overlay:{
    backgroundColor: 'rgba(23,63,95,0.6)',
    padding: 30,
    borderRadius: 8
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: 'red'
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
  text: {
    fontSize: 40,
    marginHorizontal: 10,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    borderRadius: 8,
    marginTop: 15,
    elevation: 10
  },
  colorSub: {
    color: 'white'
  }
});

export default Home;