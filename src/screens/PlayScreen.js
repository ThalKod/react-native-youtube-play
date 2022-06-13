import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import VideoPlayer from '../components/VideoPlayer';

const PlayScreen = () => {
  return (
    <View>
      <VideoPlayer />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlayScreen;
