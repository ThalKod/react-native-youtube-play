import React from "react";
import {
  View,
  Text,
  StyleSheet, Dimensions,
} from "react-native";

const {width} = Dimensions.get('window');


const Controls = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: width * .6,
    backgroundColor: 'black'
  }
});

export default Controls;


