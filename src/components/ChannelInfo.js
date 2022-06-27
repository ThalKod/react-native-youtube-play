import React from "react";
import {
  View,
  Text,
  StyleSheet, Dimensions,
} from "react-native";

const {width} = Dimensions.get('window');

const ChannelInfo = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World !</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width,
  }
});

export default ChannelInfo;
