import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Button, TextInput } from 'react-native'
import React from 'react'
import Animated, { color } from 'react-native-reanimated'
import { Fonts } from '../../Constants';
import { AntDesign ,Ionicons } from '@expo/vector-icons';

const AddItems = ({animatedStyle, navigation}) => {
    return(
        <Animated.View style={{ flex:1, ...animatedStyle,}}>
            <View>
                <View style={formStyles.formBox}>
                    <TextInput
                        style={formStyles.input}
                        placeholder="Item Name" />
                    <TextInput
                        style={formStyles.input}
                        placeholder="Item Price" />
                    <TextInput
                        style={formStyles.input}
                        placeholder="Quantity"
                        keyboardType='numeric'    />
                    <TextInput
                        style={formStyles.textArea}
                        placeholder="Item Description"
                        multiline={true}
                        numberOfLines={10} />
                    <View style={formStyles.btnBox}>
                        <TouchableOpacity style={formStyles.submitBtn}>
                            <Text style={{fontFamily: Fonts.type.MontReg, color: '#fff', fontSize: 17}}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Animated.View>
    )
}

const formStyles = StyleSheet.create({
    formBox: {
        width: '100%',
        paddingRight: 30,
        paddingLeft: 30,
        paddingTop: 40

    },
    input: {
        color: '#000',
        fontFamily: Fonts.type.MontReg,
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 30,
        borderWidth: 1,
        elevation: 5,
        borderColor: "#2466bc"
    },
    textArea: {
        color: '#000',
        fontFamily: Fonts.type.MontReg,
        backgroundColor: '#fff',
        height: 100,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 30,
        borderWidth: 1,
        elevation: 5,
        borderColor: "#2466bc",
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    btnBox: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    },
    submitBtn: {
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: '#2466bc',
        width: 130,
        alignItems: 'center',
        borderRadius: 10,
    }
})

export default AddItems