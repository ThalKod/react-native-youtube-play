import React from "react";
import {
  View,
  Text,
  StyleSheet, Dimensions,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import Entypo from 'react-native-vector-icons/Entypo';


const {width} = Dimensions.get('window');


const Details = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>Dua Lipa - New Rules (Official Music Video)</Text>
        <Text style={styles.subTitle}>2.6B Views - 4 year ago</Text>
      </View>
      <Entypo name="chevron-thin-down" size={moderateScale(12)} color="#B3B3B3" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width,
    height: moderateScale(50),
    backgroundColor: "#222222",
    padding: moderateScale(5),
    paddingHorizontal: moderateScale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  mainTitle: {
    color: "#ffffff"
  },
  subTitle: {
    color: "#B3B3B3"
  }
});

export default Details;
