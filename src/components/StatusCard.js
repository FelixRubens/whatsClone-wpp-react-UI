import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


export default function Statuscard({
    userName,
    avatar,
}) {
  return (
    <>
        <View style={styles.card}>
        <Image style={styles.avatar} source={avatar}/>
        <View style={styles.info}>
            <View>
            <Text style={styles.name}>{userName}</Text>
            <Text style={styles.hour}>Hoje 00:00</Text>
            </View>
        </View>
        </View>
    </>
);
}


styles = StyleSheet.create({
    card: {
        marginBottom: 6,
        height: 75,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginHorizontal: 15,
        borderWidth: 2,
        borderColor: '#25D366',
      },
    
      info: {
        marginLeft: 1,
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        width: '70%',
        borderBottomWidth: 0.6,
        borderBottomColor: '#ccc',
        justifyContent: 'space-between',
      },
      
      name: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'bold',
        fontSize: 18,
        top: -4
      },
    
      hour: {
        color: '#666',
        fontSize: 15
      },

})
