import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated'

const Business = (animatedStyle) => {
    return(
        <Animated.View style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'purple',
            ...animatedStyle,
        }}>
            <Text>Add Business Screen eka FUCK</Text>
        </Animated.View>

    )
}

export default Business