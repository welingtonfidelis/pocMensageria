import React, { useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  RefreshControl
} from 'react-native';
import * as signalR from '@microsoft/signalr';
import { useDispatch, useSelector } from 'react-redux';

import ConversationItem from '../../components/ConversationItem';

import api from '../../services/api';
import styles from './styles';

export default function AgentArea({ navigation }) {
  const [avatar, setAvatar] = useState('');
  const [load, setLoad] = useState(false);
  const [connected, setConnected] = useState('red');
  const [conversationList, setConversationList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const apiMessage = api.message();
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const agentName = (store.name).split(' ');
    setAvatar(((agentName[0]).charAt(0) || '') + ((agentName[1]).charAt(0) || ''));

    async function connectToSignalr() {
      try {
        const token = (store.token).replace('Bearer ', '');

        const connection = await new signalR.HubConnectionBuilder()
          .withUrl(
            `${store.baseURLMessage}/connection/user?hubname=${store.hubName}&signalrId=${store.signalr}`,
            { accessTokenFactory: () => token }
          )
          // .configureLogging(signalR.LogLevel.Trace)
          .withAutomaticReconnect()
          .build();

        connection.on('newMessageQueue', data => {
          console.log('FILA ====>', data);

          dispatch({
            type: 'ADD_CONVERSATION',
            conversation: { newConversation: data }
          });
        });

        connection.on('newMessageTelegram', data => {
          console.log('NOVA MENSAGEM ====>', data);

          const { conversationId, message } = data;
          dispatch({
            type: 'ADD_MESSAGE',
            conversation: { id: conversationId, message: message[0] }
          });
        });

        connection.onclose(async function () {
          console.log('signalr disconnected');
        });

        connection.onreconnecting(err =>
          console.log('err reconnecting  ', err)
        );

        connection
          .start()
          .then(res => {
            console.log('OK -> connected');
            setConnected('green');
          })// Potential to do something on initial load)
          .catch(console.error);
      } catch (error) {
        console.log(error);
        alert('Houve um erro. Tente novamente');
      }
    }

    connectToSignalr();
    getConversation();
  }, []);

  const getConversation = async () => {
    const { data } = await apiMessage.get('/conversation');

    const list = data.data;
    setConversationList(list);

    list.forEach(el => {
      dispatch({
        type: 'UPDATE_CONVERSATION',
        conversation: {
          id: el.conversationId, cvs: el
        }
      });
    });
  }

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getConversation();

    setRefreshing(false);
  }, [refreshing]);

  const handleOpenConversation = (id) => {
    console.log('ABRIR', id);

    dispatch({
      type: 'UPDATE_HEADER_PAGE',
      conversation: { id }
    });

    navigation.navigate('conversation', { id });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Área do operador</Text>

        <View style={{ backgroundColor: connected, padding: 3, borderRadius: 50 }}>
          <View style={styles.headerAvatar}>
            <Text style={styles.headerAvatarText}>{avatar}</Text>
          </View>
        </View>
      </View>

      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={Object.entries(store.conversation)}
        keyExtractor={item => item[1].conversationId}
        renderItem={({ item }) => {
          return <ConversationItem item={item[1]} touchAction={handleOpenConversation}/>
        }}
      />
    </View>
  );
}