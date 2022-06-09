import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import VideoPlayer from '../components/VideoPlayer';

const PlayScreen = () => {
  return <VideoPlayer />;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlayScreen;
