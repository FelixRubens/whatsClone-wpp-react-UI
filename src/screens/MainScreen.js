import React, {useState, useEffect} from 'react';
import { FlatList} from 'react-native';

import info from '../users/info.js'
import ChatCard from '../components/ChatCard.js';
import FooterButton from '../components/FooterButton.js';

export default function MainScreen() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(info)
  },[])

  return (
    <>
      <FlatList
        data={users}
        keyExtractor={post => String(post.id)}
        renderItem={({item}) => (
          <ChatCard 
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

