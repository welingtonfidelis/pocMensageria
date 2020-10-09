import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function ConversationItem({ item, touchAction }) {
    const { consumer, message, status } = item;
    const lastMessage = (message && message.length) ? message[message.length -1].text : '';
    const name = (consumer.name).split(' ');
    const consumerAvatar = ((name[0]).charAt(0) || '') + ((name[1]).charAt(0) || '');
    const styleClosed = status === 'closed' ? '' : 'closedActive';

    return (
        <TouchableOpacity 
            style={[styles.content, styles[styleClosed]]} 
            onPress={() => touchAction(item.conversationId)}
        >
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{consumerAvatar}</Text>
            </View>

            <View style={styles.message}>
                <Text style={styles.messageConsumer}>{consumer.name}</Text>
                <Text style={styles.messagePreview}>{lastMessage}</Text>
            </View>

            <View style={styles.status}>
                <Text style={styles.statusText}>45s</Text>
            </View>
        </TouchableOpacity>
    )
}