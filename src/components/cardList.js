import React from 'react';
import { View } from 'react-native';
import { ListItem, InstallButton, Avatar } from '@ui-kitten/components';

const Card = () => {

  return(
    <View>
      <ListItem
        title='UI Kitten'
        description='A set of React Native components'
        accessoryLeft={ItemImage}
        accessoryRight={InstallButton}
      />
    </View>
  )
}

 const ItemImage = (props) => (
   <View>
      <Avatar
        {...props}
        style={[props.style, { tintColor: null }]}
        source={{uri: 'https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.a78e4b51.png'}}
      />
    </View>
  );


export default Card;