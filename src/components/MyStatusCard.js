import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function components({
    avatar,
}) {
  return (
    <>
        <View style={styles.Mycard}>
            <Image style={styles.MyAvatar} source={avatar}/>
            <Icon name='add-circle' size={25} style={styles.addIcon} />
        <View style={styles.MyInfo}>
            <View>
            <Text style={styles.MyName}>Meu status</Text>
            <Text style={styles.MyStatus}>Toque para atualizar seu status</Text>
            </View>
        </View>
        </View>
        <View style={styles.gap}>
          <Text style={styles.gapText}>Atualizações recentes</Text>
        </View>
    </>
  );
}

styles = StyleSheet.create({
    Mycard: {
        height: 75,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.6,
        borderBottomColor: '#ccc',
    },

    MyAvatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginLeft: 15,
    },
    
    MyInfo: {
    marginLeft: -10,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'space-between',
    },
    
    MyName: {
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold',
    fontSize: 18,
    top: -4
    },

    MyStatus: {
    color: '#666',
    fontSize: 15
    },

    gap: {
    height: 30,
    backgroundColor: '#ddd',
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center'
    },

    gapText: {
        fontWeight: 'bold',
        color: '#888'
    },

    addIcon: {
        alignSelf: 'flex-end',
        right: 20,
        bottom: 5,
        color: '#25D366',
        backgroundColor: 'white',
        borderRadius: 12.5
    }
})
