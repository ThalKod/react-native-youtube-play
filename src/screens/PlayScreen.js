import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import VideoPlayer from '../components/VideoPlayer';
import Details from "../components/Details";
import ChannelInfo from "../components/ChannelInfo";
import Modal from "react-native-modal";
import DescriptionModal from "../components/DescriptionModal";
import CommentHighlight from "../components/CommentHighlight";

const {width} = Dimensions.get('window');


const PlayScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <VideoPlayer />
      <Details openModal={toggleModal} />
      <ChannelInfo/>
      <DescriptionModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
      <CommentHighlight/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
});

export default PlayScreen;
