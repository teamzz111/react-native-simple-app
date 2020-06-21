import React, {useState} from 'react';
import { StyleSheet, Linking } from "react-native";
import { Text, Icon, Button, Layout, TopNavigation, TopNavigationAction, Avatar } from '@ui-kitten/components';

const Details = ({route, navigation}) => {
  const infiniteAnimationIconRef = React.useRef();
  const zoomIconRef = React.useRef();

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


  const [data, setData] = useState(route.params?.item);
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress = {() => navigation.goBack(null)}/>
  );

  const goToUrl = () => {
    const url = data.url;
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        alert('cannot open this link');
      }
    });
  };
  return(
    <>
        <TopNavigation
          accessoryLeft={BackAction}
          title='Details'
        />
        <Layout style={styles.container} level='1'>
            <Avatar style={styles.avatar} size='giant' source={{uri: data.image[2]["#text"]}}/>
            <Text style={styles.text} category='h4'>{data.name}</Text>
            <Text category='s2'>{format(data.listeners)} of listeners</Text>
            {
              data.streamable == 0 ?
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
            <Button
              style={styles.button}
              accessoryLeft={renderZoomIcon}
              onPress={() => {zoomIconRef.current.startAnimation(); goToUrl();}}>
              WATCH ON LAST.FM
            </Button>
            <Text style = {{fontSize: 10}} category='s2'>MBID: {data.mbid}</Text>
        </Layout>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20
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