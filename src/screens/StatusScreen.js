import React, {useState, useEffect} from 'react';
import { View, FlatList, ScrollView } from 'react-native';

import Status from '../components/StatusCard.js';
import MyStatus from '../components/MyStatusCard.js';
import StatusFooterButttons from '../components/StatusFooterButtons.js'

import info from '../users/info.js';

export default function StatusScreen() {

  const [users, setUsers] = useState([])

  useEffect(()=> {
    setUsers(info)
  }, [])

  return (
    <>
      <ScrollView>
        <MyStatus avatar={require('../assets/Rubens.jpg')} />
        {users.map((user) => (
          <Status 
            userName={user.name}
            avatar={user.avatar}
            key={user.id}
          />
        ))}
      </ScrollView>
      <StatusFooterButttons />
    </>
  );
}
