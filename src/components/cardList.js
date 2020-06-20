import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Icon, Card, Text } from '@ui-kitten/components';

const CardItem = (item) => {

  const format = (n) => {
    return String(n).replace(/(.)(?=(\d{3})+$)/g, '$1,')
  }

  const Header = (props) => (
    <View {...props}>

    </View>
  );

  return(
    <View style = {{marginTop: 1, padding: 10}}>
      <Card status='success' style = {styles.container}>
        <View style ={styles.flex}>
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
        </View>
      </Card>
    </View>
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