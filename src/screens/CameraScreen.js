import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1}}>
      <Camera style={{ flex: 1 , height: '100%'}} type={type}>
        <View style={styles.bottomItems}>
          <TouchableOpacity
            style={styles.button}
          >
        </TouchableOpacity>
        <TouchableOpacity style={styles.rotate}
         onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
            <Icon name='sync' size={25} color='white'/>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
    bottomItems: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 50,
        marginLeft: 30,
    },

    button: {
        height: 80,
        width: 80,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: 'white',
    },

    rotate: {
        color: 'white',
        marginLeft: 30,
    }
})