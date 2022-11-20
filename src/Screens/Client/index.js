import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated'
import 'react-native-gesture-handler';

const Client = (animatedStyle) => {
    return(
        <Animated.View style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'purple',
            ...animatedStyle,
        }}>
            <Text>Add Client Screen New</Text>
        </Animated.View>

    )
}

export default Client

