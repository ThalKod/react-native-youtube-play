import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Dimensions, FlatList, ScrollView, SafeAreaView } from "react-native";
import VideoPlayer from '../components/VideoPlayer';
import Details from "../components/Details";
import ChannelInfo from "../components/ChannelInfo";
import Modal from "react-native-modal";
import DescriptionModal from "../components/DescriptionModal";
import CommentHighlight from "../components/CommentHighlight";
import VideoSingle from "../components/VideoSingle";
import { moderateScale } from "react-native-size-matters";

const {width} = Dimensions.get('window');


const PlayScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const testData = [
    {
      id: "1223",
      title: "Blinding Lights",
      date: "2 years ago",
      artist: "The Weekend",
      views: "393M",
      coverImage: "https://i.ytimg.com/vi/pEpfMwF6Zgo/maxresdefault.jpg",
      channelImage: "https://i.ytimg.com/vi/VafTMsrnSTU/maxresdefault.jpg"
    },
    {
      id: "1213",
      title: "Wiz Khalifa - See You Again ft. Charlie Puth",
      date: "7 years ago",
      artist: "Wiz Khalifa",
      views: "5.5B",
      coverImage: "https://i.ytimg.com/vi/RgKAFK5djSk/maxresdefault.jpg",
      channelImage: "https://www.kindpng.com/picc/m/483-4835527_wiz-khalifa-logo-t-shirt-hd-png-download.png"
    },
    {
      id: "3323",
      title: "Lewis Capaldi - Someone You Loved",
      date: "2 years ago",
      artist: "Lewis Capaldi",
      views: "508M",
      coverImage: "https://i.ytimg.com/vi/bCuhuePlP8o/maxresdefault.jpg",
      channelImage: "https://i0.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2019/11/Lewis-Capaldi-.png?ssl=1"
    }];

  const renderItem = ({ item }) => {
    return (
      <VideoSingle
        title={item.title}
        date={item.date}
        artist={item.artist}
        views={item.views}
        coverImage={item.coverImage}
        channelImage={item.channelImage}
      />
    );
  };

  return (
    <View style={styles.container}>
      <VideoPlayer />
      <Details openModal={toggleModal} />
      <ChannelInfo
        name={"Dua Lipa"}
        logo={"https://www.puma-catchup.com/wp-content/uploads/2021/12/gallery-insert-750x421.jpg"}
        sub={"2.28M"}
      />
      <DescriptionModal isModalVisible={isModalVisible} toggleModal={toggleModal} />
      <CommentHighlight/>
      <FlatList
        data={testData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#303030",
    height: "100%"
  },
});

export default PlayScreen;
