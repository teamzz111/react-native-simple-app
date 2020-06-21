import React, {useState} from 'react';
import { StyleSheet, Linking, View, ScrollView } from "react-native";
import { Text, Icon, Button, Layout, TopNavigation, TopNavigationAction, Avatar } from '@ui-kitten/components';

/**
 * 
 * @param {route} routing - provide params to get
 * @param  {navigation} navigation - function of navigate 
 */

const Details = ({route, navigation}) => {
  const infiniteAnimationIconRef = React.useRef();
  const zoomIconRef = React.useRef();
  const [data, setData] = useState(route.params?.item);

  React.useEffect(() => {
    infiniteAnimationIconRef.current.startAnimation();
  }, []);

  const renderZoomIcon = (props) => (
    <Icon
      {...props}
      ref={zoomIconRef}
      animation='zoom'
      name='headphones-outline'
    />
  );
  const BackIcon = (props) => (
    <Icon {...props} name='arrow-back'/>
  );

  const format = (n) => {
    return String(n).replace(/(.)(?=(\d{3})+$)/g, '$1,')
  }

  const renderInfiniteAnimationIcon = (props) => (
    <Icon
      {...props}
      ref={infiniteAnimationIconRef}
      animationConfig={{ cycles: Infinity }}
      animation='shake'
      name='clock-outline'
    />
  );


  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress = {() => navigation.goBack(null)}/>
  );


  
  const goToUrl = (ur) => {
    const url = !ur ? data.url : ur;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        alert('cannot open this link');
      }
    });
  };

  return(
    <ScrollView>
        <TopNavigation
          accessoryLeft={BackAction}
          title='Details'
        />
        <Layout style={styles.container} level='1'>
            <Avatar style={styles.avatar} size='giant' source={{uri: data.image[2]["#text"]}}/>
            <Text style={styles.text} category='h4'>{data.name}</Text>
            <Text category='s2'>{format(data.listeners)} of listeners - {data.duration ? 'with duration of ' + data.duration : '' }</Text>
            {
              data.streamable == 0 ?
                <Button
                  appearance='ghost'
                  status='info'
                  style={styles.button}
                  accessoryRight={renderInfiniteAnimationIcon}>
                  NOT STREAMABLE
                </Button>
              : data.streamable  == 1 ? 
                <Button
                  appearance='ghost'
                  status='info'
                  style={styles.button}
                  accessoryRight={renderInfiniteAnimationIcon}>
                  STREAMABLE
                </Button>
              : data.streamable['#text'] == 0 ? 
                <Button
                  appearance='ghost'
                  status='info'
                  style={styles.button}
                  accessoryRight={renderInfiniteAnimationIcon}>
                  NOT STREAMABLE
                </Button>
                :
                <Button
                  appearance='ghost'
                  status='info'
                  style={styles.button}
                  accessoryRight={renderInfiniteAnimationIcon}>
                   STREAMABLE
                </Button>
            } 
            {
              data.streamable['fulltrack'] &&
                  <Text category='s2'>FullTrack: {data.streamable['fulltrack']}      {'\n'}</Text>
            }
              <Button
                style={styles.button}
                accessoryLeft={renderZoomIcon}
                onPress={() => {zoomIconRef.current.startAnimation(); goToUrl(null);}}>
                WATCH ON LAST.FM
              </Button>
              <Text style = {{fontSize: 10}} category='s2'>MBID: {data.mbid}</Text>

            {
              
              route.params.id == 'tracks' ? 
              <>

              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: .5,
                  marginTop: 20,
                  width: '86%'
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <View style = {styles.center}>
                  <Icon
                    style={styles.icon}
                    fill='#dca65c'
                    name='award-outline'
                    />
                  <Text style={styles.text} category='h5'>Rank #{(parseInt(data['@attr'].rank)+1)}</Text>
                </View>
                <View style = {styles.center}>
                  <Text category= 's1'>Artist: {data.artist.name}</Text>  
                  <Button size = 'small' style={styles.button} appearance='outline' onPress = {() => goToUrl(data.artist.url)}>
                    DETAILS
                  </Button> 
  
                </View>
              </View>
              <Text style = {{fontSize: 10}} category='s2'>Artist MBID: {data.artist.mbid}</Text>
              </>
              : <View/>
            }

        </Layout>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    margin: 20,
    borderRadius: 10, 
    elevation: 3
  },
  center: {
    justifyContent: 'center', alignItems: 'center', alignSelf: 'center', padding: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginTop: 10
  },
  avatar: {
    margin: 8,
    width: 100,
    height: 100
  },
  button: {
   margin: 2,
  },
});

export default Details;