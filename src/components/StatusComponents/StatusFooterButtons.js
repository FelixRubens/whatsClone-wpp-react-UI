import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Pencil from 'react-native-vector-icons/MaterialCommunityIcons'
import Camera from 'react-native-vector-icons/FontAwesome5';

export default function StatusFooterButttons() {
  return (
    <View style={statusFooterStyles.buttonsContainer}>
        <TouchableOpacity style={statusFooterStyles.pencil}>
            <Pencil name='pencil' size={25} style={{color: "#333"}}/>
        </TouchableOpacity>
        <TouchableOpacity style={statusFooterStyles.camera}>
            <Camera name='camera' size={25} style={{color: "white"}}/>
        </TouchableOpacity>
    </View>
  );
}

statusFooterStyles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'column',
        position: 'absolute',
        right: 20,
        bottom: 100,
        height: 60,
        width: 60,
        alignItems: 'center'
    },

    camera: {
        height: 55,
        width: 55,
        borderRadius: 27.5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        backgroundColor: '#25D366',
    },

    pencil: {
        height: 45,
        width: 45,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        backgroundColor: '#ddd',
        marginVertical: 20
    }

})