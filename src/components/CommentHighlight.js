import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CommentHighlight = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Comments <Text style={styles.count}>75k</Text></Text>
      <View style={styles.commentContainer}>
        <View style={styles.comment}>
          <Image style={styles.logoStyle} source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.venmond.com%2Fdemo%2Fvendroid%2Fimg%2Favatar%2Fbig.jpg&f=1&nofb=1'}} />
          <Text style={styles.commentText}>This is the "I'm not from tiktok" button</Text>
        </View>
        <MaterialIcons name="chevron-right" size={moderateScale(22)} color="#B3B3B3" />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    backgroundColor: "#222222"
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: moderateScale(5)
  },
  comment: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(30),
    marginRight: moderateScale(10),
    alignItems: "center"
  },
  title: {
    fontSize: moderateScale(12),
    color: "#ffffff",
    fontWeight: "bold"
  },
  count: {
    fontSize: moderateScale(10),
    color: "#B3B3B3"
  },
  commentText: {
    fontSize: moderateScale(11),
    color: "#ffffff",
  }
});

export default CommentHighlight;
