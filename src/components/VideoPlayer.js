import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Slider,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';
import Video from 'react-native-video';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Controls from "./Controls";

const videoSample = require("../assets/sample_1.mp4");
const {width} = Dimensions.get('window');

const VideoPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [overlay, setOverlay] = useState(true);
  const [fullscreen, setFullScreen] = useState(false);
  const [showControl, setShowControl] = useState(false);

  let player = useRef(null);

  const onSlide = (slide) => {
    player.seek(slide * duration);
  }

  return (
    <TouchableWithoutFeedback onPress={() => setShowControl(!showControl)}>
      <View style={styles.container}>
        <Video
          fullscreen={fullscreen}
          paused={paused}
          ref={(ref) => player = ref}
          source={videoSample}
          style={styles.video}
          resizeMode='cover'
          onLoad={({ duration }) =>  { setDuration(duration); setLoaded(true) } }
          onBuffer={(b) => console.log("b" + b)}
          onError={(e) => console.log("Error " + JSON.stringify(e))}
          controls={false}
          onProgress={({currentTime}) => setCurrentTime(currentTime)}
        />
        {loaded && showControl &&
        <Controls
          duration={duration}
          currentTime={currentTime}
          onSlide={onSlide}
          paused={paused}
          setPaused={setPaused}
        />
        }
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width,
    height: width * .6,
    backgroundColor: 'black'
  },
});

export default VideoPlayer;
