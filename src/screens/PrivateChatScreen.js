import React from 'react';
import { ImageBackground } from 'react-native';

import InputSystem from '../components/PrivateComponents/InputSystem'
import wallpapper from '../assets/wallpapper.png'

export default function PrivateChatScreen({navigation}) {
  
  
  return (
    <>
      <ImageBackground source={wallpapper} style={{flex: 1, minWidth: '50%',maxWidth: '100%', height: '100%', justifyContent: 'flex-end'}}>
      </ImageBackground>
      <InputSystem />
    </>
  );
}
