import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import Video from 'react-native-video';
import Controls from "./Controls";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const videoSample = require("../assets/sample_1.mp4");
const {width} = Dimensions.get('window');

const VideoPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [fullscreen, setFullScreen] = useState(false);
  const [showControl, setShowControl] = useState(false);

  let player = useRef(null);

  const onSlide = (slide) => {
    player.seek(slide * duration);
  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setShowControl(!showControl)}>
        <View>
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
          {loaded &&
          <Controls
            showControl={showControl}
            duration={duration}
            currentTime={currentTime}
            onSlide={onSlide}
            paused={paused}
            setPaused={setPaused}
          />
          }
        </View>
      </TouchableWithoutFeedback>
    </View>
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
