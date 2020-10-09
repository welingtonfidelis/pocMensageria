import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import MessageItem from '../../components/MessageItem';

import api from '../../services/api';
import alert from '../../services/alert';

import styles from './styles';

export default function Conversation({ route }) {
  const [messageToConsumer, setMessageToConsumer] = useState('');

  const { id } = route.params;
  const apiMessageExternal = api.messageExternal();
  const store = useSelector(state => state.conversation[id]);
  const dispatch = useDispatch();

  const handleSendMessage = async () => {
    try {
      const sentTime = Date.now();
      const data = {
        text: messageToConsumer,
        date: Math.floor(sentTime / 1000)
      }

      await apiMessageExternal.post(
        `/response/send/${id}`,
        data
      );

      dispatch({
        type: 'ADD_MESSAGE',
        conversation: {
          id,
          message: { userId: 1, text: messageToConsumer, sentTime }
        }
      });

      setMessageToConsumer('');
    }
    catch (error) {
      console.log(error);
      alert.errorInform(
        'Ops!',
        'Houve um erro ao tentar sua mensagem. Por favor, tente novamente.'
      );
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={store.message}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => {
          return <MessageItem item={item} />
        }}
      />

      {store.status !== 'closed' &&
        <View style={styles.contentInput}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem"
            placeholderTextColor="#A6B0CF"
            value={messageToConsumer}
            onChangeText={text => setMessageToConsumer(text)}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleSendMessage}
          >
          </TouchableOpacity>
        </View>
      }
    </View>
  );
}