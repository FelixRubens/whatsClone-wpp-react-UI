import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';



export default function ImputSystem() {
  return (
    <KeyboardAvoidingView style={inputSystemStyles.container} behavior={'padding'} keyboardVerticalOffset={90}> 
        <View style={inputSystemStyles.inputCamera}>
            <TouchableOpacity>
                <Icon name='laugh' size={20} color={'#999'}/>
            </TouchableOpacity>
            <TextInput
                style={inputSystemStyles.input}
                placeholder='Digite uma menssagem'
                placeholderTextColor="#999"
            >
            </TextInput>
            <TouchableOpacity>
                <Icon name='paperclip' size={20} color={'#999'}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name='camera' size={20} color={'#999'}/>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={inputSystemStyles.micriphone}>
            <Icon name='microphone' size={20} color={'white'}/>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const inputSystemStyles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        left: 10,
    },
    input: {
        fontSize: 17,
        maxWidth: 180
    },
    
    inputCamera: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        minHeight: 45,
        maxHeight: 90,
        borderRadius: 37.5,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'scroll'
    },

    micriphone: {
        marginHorizontal: 8,
        height: 45,
        width: 45,
        borderRadius: 25,
        backgroundColor: '#075e54',
        alignItems: 'center',
        justifyContent: 'center'
    }
})