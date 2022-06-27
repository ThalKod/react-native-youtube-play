import React from "react";
import {
  View,
  Text,
  StyleSheet, TouchableOpacity,
} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { moderateScale } from "react-native-size-matters";


const IconActions = ({name}) => {
  return (
    <TouchableOpacity>
      <MaterialIcons name={name} size={moderateScale(22)} color="#B3B3B3" />
      <Text style={styles.text}>16M</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {

  },
  text: {
    color: "#ffffff",
    fontSize: moderateScale(12),
  }
})


export default IconActions;
