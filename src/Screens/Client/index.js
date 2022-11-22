import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated'
import 'react-native-gesture-handler';
import { Fonts } from '../../Constants';
import { AntDesign } from '@expo/vector-icons';
import NoFound from '../../../assets/images/no-found.png'

const clientDetails = [
    {
        clientFirstName: "Roshitha",
        clientAddress: "34/18 Wihamawatha, suduhumpola kandy",
        clientTelephone: "077 1670097"
    },
    {
        clientFirstName: "Roshitha",
        clientAddress: "34/18 Wihamawatha, suduhumpola kandy",
        clientTelephone: "077 1670097"
    },
    {
        clientFirstName: "Roshitha",
        clientAddress: "34/18 Wihamawatha, suduhumpola kandy",
        clientTelephone: "077 1670097"
    },
    {
        clientFirstName: "Roshitha",
        clientAddress: "34/18 Wihamawatha, suduhumpola kandy",
        clientTelephone: "077 1670097"
    },
    {
        clientFirstName: "Roshitha",
        clientAddress: "34/18 Wihamawatha, suduhumpola kandy",
        clientTelephone: "077 1670097"
    },
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
                <ScrollView style={{paddingLeft: 10, paddingRight: 10, height: 750}}>
                    {clientDetails.length === 0 ? 
                    <View style={clientStyles.emptyClient}>
                        <Image style={{width: 200, height: 200}} source={NoFound} />
                        <Text>Nothing to show. To add client make a invoice</Text>
                    </View> : 
                    clientDetails.map((data, index) => {
                            return(
                                <View key={index} style={clientStyles.clientBox}>
                                    <View style={clientStyles.clientInfo}>
                                        <Text style={{fontSize: 20, fontFamily: Fonts.type.MontReg, marginBottom: 5}}>{data.clientFirstName}</Text>
                                        <Text style={{fontFamily: Fonts.type.MontReg,}}>{data.clientAddress}</Text>
                                        <Text style={{fontFamily: Fonts.type.MontReg,}}>{data.clientTelephone}</Text>
                                    </View>

                                    <TouchableOpacity style={clientStyles.iconBox}>
                                        
                                        
                                            <AntDesign name="delete" size={24} color="black" />
                                        
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }


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
        
    },
    iconBox: {
        backgroundColor: '#fd12127a',
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    emptyClient: {
        paddingTop: "50%",
        alignItems: 'center'
    }
})

export default Client

