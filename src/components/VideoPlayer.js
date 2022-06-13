import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Slider,
  TouchableNativeFeedback,
} from 'react-native';
import Video from 'react-native-video';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const videoSample = require("../assets/sample_1.mp4");
const {width} = Dimensions.get('window');

const VideoPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(false);
  const [overlay, setOverlay] = useState(true);
  const [fullscreen, setFullScreen] = useState(false);

  let player = useRef(null);

  return (
    <View style={styles.container}>
      <Video
        fullscreen={fullscreen}
        paused={paused}
        ref={(ref) => player = ref}
        source={videoSample}
        style={styles.video}
        resizeMode='cover'
        onLoad={(duration) => console.log("Loaded " + duration)}
        onBuffer={(b) => console.log("buffering " + b)}                // Callback when remote video is buffering
        onError={(e) => console.log("Error " + JSON.stringify(e))}
        controls={true}
        onProgress={(p) => console.log("progress "+ JSON.stringify(p))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject
  },
  overlaySet: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
  },
  sliderCont: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  timer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  video: { width, height: width * .6, backgroundColor: 'black' },
  fullscreenVideo: {
    backgroundColor: 'black',
    ...StyleSheet.absoluteFill,
    elevation: 1,
  },
});

export default VideoPlayer;
