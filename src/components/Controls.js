import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet, Dimensions,
  Platform
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { moderateScale } from "react-native-size-matters"
import Slider from 'react-native-custom-slider';
import { toMinutes } from "../utils";

const {width} = Dimensions.get('window');

  const Controls = ({ duration, currentTime, onSlide, paused, setPaused, showControl }) => {

  const CustomThumb = () => {
    if(showControl) return (
      <View
        style={{
          width: moderateScale(10),
          height: moderateScale(10),
          overflow: 'hidden',
          borderRadius: moderateScale(10),
          backgroundColor: 'red'
        }}
      />
    );
    return <View />;
  }

  return (
    <View style={styles.container}>
      { showControl && <View style={styles.mainControls}>
        <Ionicons name="play-skip-back-sharp" size={moderateScale(20)} color="#FFFFFF" onPress={() => {console.log("pressed !")}} />
        <Ionicons name={paused? "play-sharp" : "pause"} size={moderateScale(40)} color="#FFFFFF" style={{ marginHorizontal: moderateScale(50)}} onPress={() => setPaused(!paused)} />
        <Ionicons name="play-skip-forward-sharp" size={moderateScale(20)} color="#FFFFFF" onPress={() => {console.log("pressed !")}} />
      </View> }
      { showControl && <View style={styles.secondaryControls}>
        <View style={styles.timeContainer}>
          <Text style={styles.activeTime}>{toMinutes(currentTime)}</Text>
          <Text style={[styles.nonActiveTime, {marginHorizontal: moderateScale(2)}]}>/</Text>
          <Text style={styles.nonActiveTime}>{toMinutes(duration)}</Text>
        </View>
        <FontAwesome5 name="expand" size={moderateScale(13)} color="#FFFFFF" onPress={() => {console.log("pressed !")}} />
      </View> }
      <Slider
        value={currentTime / duration}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#ff0800"
        onValueChange={onSlide}
        thumbStyle={{ justifyContent: 'center', alignItems: 'center', width: 25 }}
        customThumb={<CustomThumb />}
        style={styles.slider}
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
    padding: moderateScale(0)
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
    height: moderateScale(0.2),
    left: 0,
    right: 0,
    bottom: moderateScale(2)
  }
});

export default Controls;


