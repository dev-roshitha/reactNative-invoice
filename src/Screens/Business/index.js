import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated'
import 'react-native-gesture-handler';
import { Fonts } from '../../Constants';
import { AntDesign } from '@expo/vector-icons';
import NoFound from '../../../assets/images/no-found.png'

const businessDetails = [
    {
        businessName: "Circlebook(pvt)Ltd",
        businessEmail: "ciclebook@support.site",
        businessTelephone: "077 1670097"
    },
    {
        businessName: "Perera & Sons(pvt)Ltd",
        businessEmail: "perera&sons@customers.com",
        businessTelephone: "077 1234568"
    },
    {
        businessName: "The Bake House",
        businessEmail: "bakehouse@info.com",
        businessTelephone: "077 1670097"
    },
    {
        businessName: "Luck Hardware",
        businessEmail: "luckyhardware@info.com",
        businessTelephone: "071 1582347"
    },
    {
        businessName: "Roshitha",
        businessEmail: "roshitha@gmail.com",
        businessTelephone: "077 1670097"
    },
    {
        businessName: "Roshitha",
        businessEmail: "roshitha@gmail.com",
        businessTelephone: "077 1670097"
    },
    {
        businessName: "Roshitha",
        businessEmail: "roshitha@gmail.com",
        businessTelephone: "077 1670097"
    },

]

const Business = (animatedStyle) => {
    return(
        <Animated.View style={{
            flex:1,
            ...animatedStyle,
        }}>
            
            <View>
                <ScrollView style={{paddingLeft: 10, paddingRight: 10, height: 750}}>
                    {businessDetails.length === 0 ? 
                    <View style={businessStyles.emptyBusiness}>
                        <Image style={{width: 200, height: 200}} source={NoFound} />
                        <Text>Nothing to show. To add business make a invoice</Text>
                    </View> : 
                    businessDetails.map((data, index) => {
                            return(
                                <View key={index} style={businessStyles.businessBox}>
                                    <View style={businessStyles.businessInfo}>
                                        <Text style={{fontSize: 20, fontFamily: Fonts.type.MontReg, marginBottom: 5}}>{data.businessName}</Text>
                                        <Text style={{fontFamily: Fonts.type.MontReg,}}>{data.businessEmail}</Text>
                                        <Text style={{fontFamily: Fonts.type.MontReg,}}>{data.businessTelephone}</Text>
                                    </View>

                                    <TouchableOpacity style={businessStyles.iconBox}>
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

const businessStyles = StyleSheet.create({
    businessBox : {
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
    businessInfo : {
        flexDirection: 'column',
        width: 250,
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
    emptyBusiness: {
        paddingTop: "50%",
        alignItems: 'center'
    }
})

export default Business

