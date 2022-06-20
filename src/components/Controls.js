import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet, Dimensions,
  Platform
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { moderateScale } from "react-native-size-matters"
import Slider from '@react-native-community/slider';
import numeral from "numeral";
import { toMinutes } from "../utils";

const {width} = Dimensions.get('window');

  const Controls = ({ duration, currentTime, onSlide, paused, setPaused }) => {
  const [thumbIcon, setThumbIcon] = useState();

  useEffect(() => {
    FontAwesome.getImageSource('circle', 15, '#ff0800')
      .then(src => setThumbIcon(src));
    }, []);


  return (
    <View style={styles.container}>
      <View style={styles.mainControls}>
        <Ionicons name="play-skip-back-sharp" size={moderateScale(30)} color="#FFFFFF" onPress={() => {console.log("pressed !")}} />
        <Ionicons name={paused? "play-sharp" : "pause"} size={moderateScale(60)} color="#FFFFFF" style={{ marginHorizontal: moderateScale(40)}} onPress={() => setPaused(!paused)} />
        <Ionicons name="play-skip-forward-sharp" size={moderateScale(30)} color="#FFFFFF" onPress={() => {console.log("pressed !")}} />
      </View>
      <View style={styles.secondaryControls}>
        <View style={styles.timeContainer}>
          <Text style={styles.activeTime}>{toMinutes(currentTime)}</Text>
          <Text style={[styles.nonActiveTime, {marginHorizontal: moderateScale(2)}]}>/</Text>
          <Text style={styles.nonActiveTime}>{toMinutes(duration)}</Text>
        </View>
        <FontAwesome5 name="expand" size={moderateScale(13)} color="#FFFFFF" onPress={() => {console.log("pressed !")}} />
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={currentTime / duration}
        minimumTrackTintColor="#ff0800"
        maximumTrackTintColor="#F7F7F7"
        thumbImage={thumbIcon}
        onValueChange={onSlide}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width,
    height: width * .6,
    backgroundColor: 'transparent',
    justifyContent: "center",
    padding: moderateScale(15)
  },
  mainControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  secondaryControls: {
    position: "absolute",
    bottom: moderateScale(15),
    width: width - moderateScale(20),
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal:  moderateScale(10)
  },
  timeContainer: {
    flexDirection: "row"
  },
  activeTime: {
    fontSize: moderateScale(13),
    color: "#FFFFFF"
  },
  nonActiveTime: {
    fontSize: moderateScale(13),
    color: "#cecece"
  },
  slider: {
    position: "absolute",
    width,
    height: moderateScale(5),
    bottom: moderateScale(0),
  }
});

export default Controls;


