import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

export default function Textinput(props) {
    return (
        <View>
            <Text style={styles.label}>{props.label || ''}</Text>
            <TextInput
                style={styles.input}
                {...props}
            />
        </View>
    )
}