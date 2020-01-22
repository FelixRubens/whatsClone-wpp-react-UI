import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function FooterButtton() {
  return (
    <TouchableOpacity style={styles.footerButton}>
        <Icon name='message' size={25} style={{color: "white"}}/>
    </TouchableOpacity>
  );
}

styles = StyleSheet.create({
    footerButton: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        height: 60,
        width: 60,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        backgroundColor: '#25D366'
    }
})