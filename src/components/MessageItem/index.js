import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';

import styles from './styles';

export default function MessageItem({ item }) {
    const { sentTime, text, userId } = item;

    const styleContent = userId ? 'contentAgent' : 'contentConsumer';
    return (
        <View style={styles[styleContent]}>
            <Text style={styles.textMessage}>{text}</Text>
            <Text style={styles.textDate}>{format(new Date(sentTime), 'HH:ss')}</Text>
        </View>
    )
}