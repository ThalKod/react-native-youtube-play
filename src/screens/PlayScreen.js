import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import VideoPlayer from '../components/VideoPlayer';
import Details from "../components/Details";

const PlayScreen = () => {
  return (
    <View>
      <VideoPlayer />
      <Details />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlayScreen;
