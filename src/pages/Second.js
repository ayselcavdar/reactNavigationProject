import React from 'react';
import {View, Text, Button} from 'react-native';

const Second = (props) => {
  const selectedUser = props.route.params.userName;
  return (
    <View>
      <Text>Second</Text>
      <Text>{selectedUser}</Text>
      <Button title="Back!" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export {Second};
