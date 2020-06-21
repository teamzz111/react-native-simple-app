import React, {useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import {Icon, Card, Text } from '@ui-kitten/components';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const CardItem = ({item, handleDetails}) => {

  useEffect(() => {
  }, []);

  const format = (n) => {
    return String(n).replace(/(.)(?=(\d{3})+$)/g, '$1,')
  }


  return(
    <ScrollView style = {{marginTop: 1, padding: 10, paddingHorizontal: 25}}>
      <Card status='success' style = {styles.container}>
        <TouchableOpacity style ={styles.flex} onPress = {() => handleDetails()} >
          <View style = {{width: "94%"}}>
            <Text category='h5'>{item.name}</Text>
            <View style = {styles.listeners}>
              <Text category='s2'>{format(item.listeners)} of listeners</Text>
            </View>
          </View>
          <View style = {{width: "5%", marginTop: 10,}}>
            <Icon
              style={styles.icon}
              fill='black'
              name='arrow-ios-forward-outline'
            />
          </View>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  )

}
const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
  },
  container: {
    marginVertical: 1,
    elevation: 2
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
  icon: {
    width: 20,
    height: 20,
  },
  listeners: {
    flexDirection: 'row'
  }
});

export default CardItem;