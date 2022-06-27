import React from "react";
import {
  View,
  Text,
  StyleSheet, Dimensions, TouchableOpacity,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import Entypo from 'react-native-vector-icons/Entypo';
import IconActions from "./IconActions";


const {width} = Dimensions.get('window');


const Details = () => {
  return (
    <View style={styles.DetailsContainer}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>Dua Lipa - New Rules (Official Music Video)</Text>
          <Text style={styles.subTitle}>2.6B Views - 4 yr ago</Text>
        </View>
        <TouchableOpacity>
          <Entypo name="chevron-thin-down" size={moderateScale(12)} color="#B3B3B3" />
        </TouchableOpacity>
      </View>
      <View style={styles.actionsContainer}>
        <IconActions name="thumb-up"/>
        <IconActions name="thumb-down"/>
        <IconActions name="share"/>
        <IconActions name="file-download"/>
        <IconActions name="collections-bookmark"/>
      </View>
    </View>

  )
};

const styles = StyleSheet.create({
  DetailsContainer: {
    backgroundColor: "#222222",
    paddingHorizontal: moderateScale(10),
    width,
  },
  container: {
    padding: moderateScale(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleContainer: {
    width: moderateScale(280),
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: moderateScale(15),
    marginVertical: moderateScale(5)
  },
  mainTitle: {
    color: "#ffffff",
    marginBottom: moderateScale(5),
    fontSize: moderateScale(14)
  },
  subTitle: {
    color: "#B3B3B3",
    fontSize: moderateScale(12)
  }
});

export default Details;
