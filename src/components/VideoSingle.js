import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
const {width} = Dimensions.get('window');
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";


const VideoSingle = ({ title, date, channelImage, coverImage, artist, views,}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.logoStyle} source={{ uri: coverImage}} />
      <View style={styles.descriptionContainer}>
        <View style={styles.description}>
          <Image style={styles.channelLogoStyle} source={{ uri: channelImage}} />
          <View>
            <Text style={styles.mainText}>{title}</Text>
            <Text style={styles.subText}>{artist} - {views} - {date}</Text>
          </View>
        </View>
        <TouchableNativeFeedback>
          <MaterialCommunityIcons name="dots-vertical" size={moderateScale(16)} color="#B3B3B3" />
        </TouchableNativeFeedback>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(10),
    marginVertical: moderateScale(5),
    backgroundColor: "#222222"
  },
  logoStyle: {
    width,
    resizeMode: 'stretch',
    height: moderateScale(200),
    marginRight: moderateScale(10),
    alignItems: "center"
  },
  channelLogoStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(30),
    marginRight: moderateScale(10),
    alignItems: "center"
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: moderateScale(5),
  },
  mainText: {
    color: "#ffffff",
    marginBottom: moderateScale(2),
    fontSize: moderateScale(12),
    fontWeight: "bold"
  },
  subText: {
    color: "#B3B3B3",
    fontSize: moderateScale(11)
  },
  description: {
    flexDirection: "row",
  }
});

export default VideoSingle;
