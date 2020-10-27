import React from 'react';
import {View, Text, Button} from 'react-native';

const First = (props) => {
  return (
    <View>
      <Text>First</Text>
      <Button
        title="Go!"
        onPress={() =>
          props.navigation.navigate('SecondPage', {userName: 'icewasonline'})
        }
      />
    </View>
  );
};

export {First};
