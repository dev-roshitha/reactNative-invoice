import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated'
import 'react-native-gesture-handler';
import { Fonts } from '../../Constants';

const clientDetails = [
    {
        clientFirstName: "Roshitha",
        clientAddress: "34/18 Wihamawatha, suduhumpola kandy",
        clientTelephone: "077 1670097"
    },
]

const Client = (animatedStyle) => {
    return(
        <Animated.View style={{
            flex:1,
            ...animatedStyle,
        }}>
            <View>
                <ScrollView style={{paddingLeft: 10, paddingRight: 10, height: 500}}>
                    <View style={clientStyles.clientBox}>
                        <View style={clientStyles.clientInfo}>
                            <Text style={{fontSize: 20, fontFamily: Fonts.type.MontReg, marginBottom: 5}}>Roshitha</Text>
                            <Text style={{fontFamily: Fonts.type.MontReg,}}>34/18 Wiharamawatha, Suduhumpola, Kandy</Text>
                            <Text style={{fontFamily: Fonts.type.MontReg,}}>077 1670097</Text>
                        </View>
                        <View>
                            <Text>+</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Animated.View>
    )
}

const clientStyles = StyleSheet.create({
    clientBox : {
        flex: 1,
        flexDirection: 'row',
        height: 130,
        backgroundColor: 'white',
        width: "100%",
        height: 130,
        borderRadius: 10,
        elevation: 10,
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,

    },
    clientInfo : {
        flexDirection: 'column',
        width: 200,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 20,
        
    }
})

export default Client

