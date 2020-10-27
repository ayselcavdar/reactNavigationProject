import React from 'react';
import {View, Text, Dimensions, Image} from 'react-native';

const Post = (props) => {
  const postData = props.route.params.selectedPost;
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        {postData.userName}
      </Text>
      <Image
        source={{uri: postData.img}}
        style={{
          height: Dimensions.get('window').height / 2,
          margin: 10,
        }}
      />
      <Text>{postData.description}</Text>
    </View>
  );
};

export {Post};
