import React, {useState, useEffect} from 'react';
import { FlatList, TouchableOpacity} from 'react-native';

import info from '../users/info.js'
import ChatCard from '../components/ChatComponents/ChatCard.js';
import FooterButton from '../components/ChatComponents/FooterButton.js';

export default function MainScreen({navigation}) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(info)
  },[])


  return (
    <>
      <FlatList
        style={{backgroundColor: 'white'}}
        data={users}
        keyExtractor={post => String(post.id)}
        renderItem={({item}) => (
            <ChatCard
              navigation={navigation}
              userName={item.name}
              userMessage={item.msg}
              avatar={item.avatar}
            />
        )}
      />
      <FooterButton />
    </>
  );
}

