import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import More from 'react-native-vector-icons/Feather'
import {MaterialIcons} from '@expo/vector-icons';
import { Text, View } from 'react-native';

import Main from './screens/MainScreen.js'
import Camera from './screens/CameraScreen.js'
import Status from './screens/StatusScreen.js'
import Chamadas from './screens/ChamadasScreen.js'

const cameraIcon = <Icon name='camera' size={25} style={{color: '#fff', opacity: 0.3}}/>

const title = (
    <View style={{flexDirection: 'row'}}>
        <MaterialIcons name='search' size={25}  style={{color: '#fff', marginHorizontal: 15}}/>
        <More name='more-vertical' size={25}  style={{color: '#fff', marginRight: 15}}/>
    </View>
)


const Mytabs = createMaterialTopTabNavigator({
    camera: {
        screen: Camera,
        navigationOptions: {
            title: false,
            tabBarVisible: false,
            tabBarLabel:  ({focused, tintColor}) => (<Icon name='camera' focused={focused} size={25} style={{color: tintColor}}/>),
            tabBarIcon: cameraIcon,
        },
    },
    conversas: {
        screen: Main,
        navigationOptions: {
            tabBarLabel: ({focused, tintColor}) => (<Text focused={focused} style={{fontWeight: 'bold', color: tintColor }}>CONVERSAS</Text>)
        }
    },
    status: {
        screen: Status,
        navigationOptions: {
            tabBarLabel: ({focused, tintColor}) => (<Text focused={focused} style={{fontWeight: 'bold', color: tintColor }}>STATUS</Text>)
        }
    },
    chamadas: {
        screen: Chamadas,
        navigationOptions: {
            tabBarLabel: ({focused, tintColor}) => (<Text focused={focused} style={{fontWeight: 'bold', color: tintColor }}>CHAMADAS</Text>),
        }
    }
}, {
    initialRouteName: 'conversas',

    tabBarOptions: {

        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255,255,255,0.3)',

        style: {
            backgroundColor: '#075e54',
            fontWeight: 'bold',
            color: '#fff',
            maxWidth: '100%',
        },

        indicatorStyle: {
            backgroundColor: '#fff',
            height: 3,
            borderRadius: 1,
        },

        tabStyle: {
            width: 'auto',
            paddingHorizontal: '4.3%',
        },

    },
});

const mystack = createStackNavigator({
    home: {
        screen: Mytabs,
    },
},{
    defaultNavigationOptions: {
        title: 'WhatsApp',
        headerStyle: {
            backgroundColor: '#075e54',
            elevation: 0,
            shadowOpacity: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'sans-serif-light'
        },
        headerRight: title
    },
    
})

export default createAppContainer(mystack)