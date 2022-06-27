import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import VideoPlayer from '../components/VideoPlayer';
import Details from "../components/Details";
import ChannelInfo from "../components/ChannelInfo";

const PlayScreen = () => {
  return (
    <View>
      <VideoPlayer />
      <Details />
      <ChannelInfo/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlayScreen;
