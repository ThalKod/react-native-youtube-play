import React from "react";
import {
  View,
  Text, Button,
  StyleSheet, TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { moderateScale } from "react-native-size-matters";

const DescriptionModal = ({isModalVisible, toggleModal}) => {
  return (
    <Modal
      hasBackdrop={false}
      coverScreen={false}
      isVisible={isModalVisible}
      swipeDirection={['up', 'left', 'right', 'down']}
      onSwipeComplete={toggleModal}
      style={styles.modalContainer}>
      <View style={styles.container}>
        <View style={styles.modalHeader}>
          <Text style={styles.descriptionText}>Description</Text>
          <TouchableOpacity onPress={toggleModal}>
            <MaterialIcons name="close" size={moderateScale(22)} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <Button title="Hide modal" onPress={toggleModal} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    height: moderateScale(250),
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalHeader: {
    backgroundColor: "#222222",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(15),
    paddingBottom: moderateScale(10)
  },
  descriptionText: {
    fontSize: moderateScale(16),
    color: "#ffffff",
    fontWeight: "bold"
  }
})

export default DescriptionModal;
