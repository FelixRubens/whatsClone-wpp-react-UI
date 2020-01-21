import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import More from 'react-native-vector-icons/Feather'
import {MaterialIcons} from '@expo/vector-icons';
import { Text, View } from 'react-native';

import Main from './screens/MainScreen.js'

const camera = <Icon name='camera' size={25} style={{color: '#fff', opacity: 0.3}}/>

const title = (
    <View style={{flexDirection: 'row'}}>
        <MaterialIcons name='search' size={25}  style={{color: '#fff', marginHorizontal: 15}}/>
        <More name='more-vertical' size={25}  style={{color: '#fff', marginRight: 15}}/>
    </View>
)


const Mytabs = createMaterialTopTabNavigator({
    camera: {
        screen: Main,
        navigationOptions: {
            tabBarLabel:  ({focused, tintColor}) => (<Icon name='camera' focused={focused} size={25} style={{color: tintColor}}/>),
            tabBarIcon: camera
        },
    },
    conversas: {
        screen: Main,
        navigationOptions: {
            tabBarLabel: ({focused, tintColor}) => (<Text focused={focused} style={{fontWeight: 'bold', color: tintColor }}>CONVERSAS</Text>)
        }
    },
    status: {
        screen: Main,
        navigationOptions: {
            tabBarLabel: ({focused, tintColor}) => (<Text focused={focused} style={{fontWeight: 'bold', color: tintColor }}>STATUS</Text>)
        }
    },
    chamadas: {
        screen: Main,
        navigationOptions: {
            tabBarLabel: ({focused, tintColor}) => (<Text focused={focused} style={{fontWeight: 'bold', color: tintColor }}>CHAMADAS</Text>),
        }
    }
}, {
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

    }
});

const mystack = createStackNavigator({
    home: Mytabs
},{
    defaultNavigationOptions: {
        title: 'Whatsapp',
        headerStyle: {
            backgroundColor: '#075e54',
            elevation: 0,
            shadowOpacity: 0
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: title
    },
    
})

export default createAppContainer(mystack)