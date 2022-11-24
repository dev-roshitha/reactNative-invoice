import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { color } from 'react-native-reanimated'
import { Fonts } from '../../Constants';

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

                <ScrollView style={invStyles.itemSection}>
                    <TouchableOpacity style={invStyles.itemAdd}>
                        <Text style={{color: "#fff"}}>Add Items +</Text>
                    </TouchableOpacity>
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
        paddingTop: 15,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10,
    },
    itemAdd: {
        backgroundColor: '#2466bc',
        width: 100,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
    }
})

export default MakeInvoice