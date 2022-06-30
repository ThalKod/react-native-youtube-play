import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { moderateScale } from "react-native-size-matters";

const {width} = Dimensions.get('window');

const ChannelInfo = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.description}>
        <Image style={styles.logoStyle} source={{ uri: 'https://yt3.ggpht.com/a-/AAuE7mCyjJQ5F30O0hYRrMkEMC3dVNEfRdIW_ag61g=s900-mo-c-c0xffffffff-rj-k-no'}} />
        <View>
          <Text>Score 90</Text>
          <Text>2.23 subscribers</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text>SUBSCRIBE</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    borderTopWidth: moderateScale(.3),
    borderBottomWidth: moderateScale(.3),
    borderColor: "#cecece"
  },
  logoStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(30),
    marginRight: moderateScale(10),
    alignItems: "center"
  },
  description: {
    flexDirection: "row",
  }
});

export default ChannelInfo;
