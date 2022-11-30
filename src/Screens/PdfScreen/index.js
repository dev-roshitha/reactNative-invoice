import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { color } from 'react-native-reanimated'
import { Fonts } from '../../Constants';
import { AntDesign ,Ionicons } from '@expo/vector-icons';

const PdfScreen = (animatedStyle, navigation) => {
    return(
        <Animated.View style={{ flex:1, ...animatedStyle,}}>
            <View style={pdfStyles.mainPdfBox}>

            </View>
            <View style={pdfStyles.btnBox}>
                <TouchableOpacity style={pdfStyles.saveBtn}>
                    <Text style={{fontFamily: Fonts.type.MontReg, fontSize: 16}}>Save </Text>
                    <AntDesign name="save" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={pdfStyles.printBtn}>
                    <Text style={{fontFamily: Fonts.type.MontReg, fontSize: 16}}>Print </Text>
                    <AntDesign name="printer" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

const pdfStyles = StyleSheet.create({
    mainPdfBox: {
        height: 600,
        width: '100%',
        PaddingLeft: 10,
        PaddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBox: {
        marginTop: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 100,
        flexDirection: 'row'
    },
    saveBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        backgroundColor: '#68B984',
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        borderRadius: 10
    },
    printBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        backgroundColor: 'orange',
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        borderRadius: 10
    }
})

export default PdfScreen