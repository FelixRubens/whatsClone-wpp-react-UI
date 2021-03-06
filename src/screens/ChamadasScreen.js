import React, {useEffect, useState} from 'react';
import { View, FlatList } from 'react-native';

import info from '../users/info.js'
import CallCard from '../components/CallComponents/CallCard.js'

export default function ChamadasScreen() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(info)
  },[])


  return (
    <FlatList 
    style={{backgroundColor: 'white'}}
    data={users}
    keyExtractor={post => String(post.id)}
    renderItem={({item}) => (
      <CallCard 
        userName={item.name}
        avatar={item.avatar}
      />
    )}
    />
  );
}
