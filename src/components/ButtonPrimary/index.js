import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import styles from './styles';

export default function ButtonPrimary(props) {
    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                {...props}
            >
                {props.load
                    ? <ActivityIndicator animating={props.load} color="#fff"/>
                    : <Text style={styles.text}>{props.label || ''}</Text>
                }
            </TouchableOpacity>
        </View>
    )
}