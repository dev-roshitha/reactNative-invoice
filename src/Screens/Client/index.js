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

const Client = ({animatedStyle, navigation}) => {
    return(
        <Animated.View style={{
            flex:1,
            ...animatedStyle,
        }}>
            
            <View>
                {clientDetails.length === 0 ?
                    <View style={clientStyles.emptyClient}>
                        <Image style={{width: 200, height: 200}} source={NoFound} />
                        <TouchableOpacity style={ItemsStyles.addBtn}>
                            <Text style={{color: '#fff', fontSize: 30}}>+</Text>
                        </TouchableOpacity>
                        <Text>Nothing to show. Tap on "+" to add client</Text>
                    </View> : 
                    <View>
                        <View style={clientStyles.clientBtnBox}>
                            <TouchableOpacity style={clientStyles.addClientBtn} onPress={ () => navigation.navigate('Add Client')}>
                                <Text style={{fontFamily: Fonts.type.MontReg, color: '#fff'}}>Add New Business</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView style={{paddingLeft: 10, paddingRight: 10, height: 750}}>
                        {clientDetails.map((data, index) => {
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
                }
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
    },
    addBtn: {
        backgroundColor: '#2466bc',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 40,
        elevation: 10,
    },
    clientBtnBox: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 25,
        paddingBottom: 25,
    },
    addClientBtn: {
        backgroundColor: '#2466bc',
        width: 150,
        alignItems: 'center',
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        elevation: 10,
    },
})

export default Client

