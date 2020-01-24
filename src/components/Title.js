import React from 'react';
import More from 'react-native-vector-icons/Feather'
import {MaterialIcons} from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';


export default function Title() {
  return (
    <View style={titlesStyles.Title}>
        <MaterialIcons name='search' size={25}  style={{color: '#fff', marginHorizontal: 15}}/>
        <More name='more-vertical' size={25}  style={{color: '#fff', marginRight: 15}}/>
    </View>
  );
}

const titlesStyles = StyleSheet.create({
    Title: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 5
    }
})
