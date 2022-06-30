import React from "react";
import {
  View,
  Text,
  StyleSheet, Dimensions, TouchableOpacity, TouchableNativeFeedback,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import Entypo from 'react-native-vector-icons/Entypo';
import IconActions from "./IconActions";
import ChannelInfo from "./ChannelInfo";

const {width} = Dimensions.get('window');


const Details = ({ openModal }) => {
  return (
    <View style={styles.DetailsContainer}>
      <TouchableOpacity onPress={openModal}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>Dua Lipa - New Rules (Official Music Video)</Text>
            <Text style={styles.subTitle}>2.6B Views - 4 yr ago</Text>
          </View>
          <View>
            <Entypo name="chevron-thin-down" size={moderateScale(12)} color="#B3B3B3" />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.actionsContainer}>
        <IconActions name="thumb-up" text="16M"/>
        <IconActions name="thumb-down" text="Dislike"/>
        <IconActions name="share" text="Share"/>
        <IconActions name="file-download" text="Download"/>
        <IconActions name="collections-bookmark" text="Save"/>
      </View>
    </View>

  )
};

const styles = StyleSheet.create({
  DetailsContainer: {
    backgroundColor: "#222222",
    paddingHorizontal: moderateScale(10),
    width,
    marginTop: moderateScale(5)
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
