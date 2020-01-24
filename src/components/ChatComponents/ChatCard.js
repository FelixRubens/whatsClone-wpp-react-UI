import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';


export default function ChatCard({
    userName,
    userMessage,
    avatar,
    navigation
}) {


  return (
    <>
      <TouchableOpacity style={chatStyles.card} onPress={() => navigation.navigate('Conversa', {userName, avatar})}>
        <Image style={chatStyles.avatar} source={avatar}/>
        <View style={chatStyles.info}>
          <View>
            <Text style={chatStyles.name}>{userName}</Text>
            <Text style={chatStyles.message}>{userMessage}</Text>
          </View>
          <Text style={chatStyles.hour}>00:00</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const chatStyles = StyleSheet.create({
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
      marginHorizontal: 15
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
  
    message: {
      color: '#666',
      fontSize: 15
    },
  
    hour: {
      alignSelf: "flex-start",
      paddingTop: 15,
      color: '#666',
      fontSize: 12,
    }
  })
