import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Controls from "./Controls";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { moderateScale } from "react-native-size-matters";

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
  const [thumbIcon, setThumbIcon] = useState();

  useEffect(() => {
    FontAwesome.getImageSource('circle', 15, '#ff0800')
      .then(src => setThumbIcon(src));
  }, []);

  let player = useRef(null);

  const onSlide = (slide) => {
    player.seek(slide * duration);
  }

  return (
    <View>
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
