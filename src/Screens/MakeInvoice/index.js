import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { color } from 'react-native-reanimated'
import { Fonts } from '../../Constants';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const itemDetails = [
    {
        itemName: 'Pencil Holder',
        qty: 2,
        price: 300,
    },
    {
        itemName: 'CR Book',
        qty: 3,
        price: 150,
    },
    {
        itemName: 'Pencil',
        qty: 1,
        price: 20,
    },
    {
        itemName: 'Keyboard',
        qty: 1,
        price: 800,
    }
]

const MakeInvoice = (animatedStyle, navigation) => {
    return(
        <Animated.View style={{ flex:1, ...animatedStyle,}}>
            <View>
                <View style={invStyles.mainBox}>
                    <Text style={invStyles.title}>Business</Text>
                    <TouchableOpacity style={invStyles.businessBox}>
                        <Text style={invStyles.info}>Circlebook (pvt)Ltd</Text>
                        <Text style={invStyles.info}>077 1670097</Text>
                    </TouchableOpacity>

                    <Text style={invStyles.title2}>Client</Text>
                    <TouchableOpacity style={invStyles.businessBox}>
                        <Text style={invStyles.info}>Roshitha Ranasinghe</Text>
                        <Text style={invStyles.info}>077 1670097</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: 20, paddingLeft: 10}}>
                    <TouchableOpacity style={invStyles.itemAdd}>
                        <Text style={invStyles.addBtnText}>Add Items</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={invStyles.itemSection}>
                    {itemDetails.map((data, index) =>{
                        return(
                            <View key={index} style={invStyles.itemInfoBox}>
                                <View style={{width: 150}}>
                                    <Text style={invStyles.itemLabel}>{data.itemName}</Text>
                                </View>
        
                                <View style={invStyles.priceSec}>
                                    <Text style={invStyles.itemLabel}>{data.qty}   x   {data.price}</Text>
                                    <Text style={invStyles.itemLabel}>RS {data.qty * data.price}/=</Text>
                                </View>
        
                                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}}>
                                        <AntDesign name="delete" size={24} color="red" />
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </Animated.View>
    )
}

const invStyles = StyleSheet.create({
    mainBox: {
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10,
    },
    businessBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 80,
        backgroundColor: 'white',
        width: "100%",
        borderRadius: 10,
        elevation: 10,
        marginTop: 10,
        marginBottom: 0,
        paddingLeft: 20
    },
    title: {
        fontFamily: Fonts.type.MontReg,
        fontSize: 18,
        color: '#2466bc'
    },
    title2: {
        fontFamily: Fonts.type.MontReg,
        fontSize: 18,
        color: '#2466bc',
        marginTop: 20
    },
    info: {
        fontFamily: Fonts.type.MontReg,
        fontSize: 15,
        lineHeight: 25
    },
    itemSection: {
        height: 320,
        marginTop: 15,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 15,
    },
    itemAdd: {
        backgroundColor: '#2466bc',
        width: 140,
        alignItems: 'center',
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        elevation: 10,
    },
    addBtnText: {
        color: "#fff",
        fontFamily: Fonts.type.MontReg,
    },
    itemInfoBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        height: 80,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        borderRadius: 10,
        elevation: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    itemLabel: {
        fontFamily: Fonts.type.MontReg,
        fontSize: 17,
        lineHeight: 30,
    },
    priceSec: {
        alignItems: 'flex-end',
    }
})

export default MakeInvoice