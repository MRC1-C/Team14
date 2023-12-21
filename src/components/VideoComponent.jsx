import { View } from 'native-base';
import React from 'react';
import { Video, ResizeMode } from 'expo-av';
import { StyleSheet, Dimensions, Button } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: 400, // Set the height as needed
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Adjust the margin as needed
  },
});

const VideoComponent = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});


  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://it4788.catan.io.vn/files/video-1703133818451-115237542.mp4',
        }}
        useNativeControls={true}
        resizeMode={ResizeMode.CONTAIN}
        // onPlaybackStatusUpdate={status => setStatus(() => status)}

      />
    </View>
  );
};

export default VideoComponent;
