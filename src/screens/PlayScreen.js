import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";
import VideoPlayer from '../components/VideoPlayer';
import Details from "../components/Details";
import ChannelInfo from "../components/ChannelInfo";
import Modal from "react-native-modal";

const {width} = Dimensions.get('window');


const PlayScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View>
      <VideoPlayer />
      <Details openModal={toggleModal} />
      <ChannelInfo/>
      <Modal
        hasBackdrop={false}
        coverScreen={false}
        isVisible={isModalVisible}
        style={styles.modalContainer}>
        <View style={styles.}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default PlayScreen;
