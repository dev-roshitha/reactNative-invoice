import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated'
import 'react-native-gesture-handler';
import { Fonts } from '../../Constants';
import { AntDesign } from '@expo/vector-icons';
import NoFound from '../../../assets/images/no-found.png'

const ItemInfo = [
    {
        itemName: "CR Book",
        itemPrice: "250",
    },
    {
        itemName: "Glue bottle",
        itemPrice: "200",
    },
    {
        itemName: "Blue pen",
        itemPrice: "50",
    },
    {
        itemName: "Plastic Card",
        itemPrice: "80",
    },
    {
        itemName: "Back Cover",
        itemPrice: "400",
    },
    {
        itemName: "Keyboard",
        itemPrice: "800",
    },
]

const Items = ({animatedStyle, navigation}) => {
    return(
        <Animated.View style={{
            flex:1,
            ...animatedStyle,
        }}>
            
            <View>
                {ItemInfo.length === 0 ?
                    <View style={ItemsStyles.emptyItems}>
                        <Image style={{width: 200, height: 200}} source={NoFound} />
                        <TouchableOpacity style={ItemsStyles.addBtn}>
                            <Text style={{color: '#fff', fontSize: 30}}>+</Text>
                        </TouchableOpacity>
                        <Text>Nothing to show. Tap on "+" to add item</Text>
                        </View> : 
                        <View>
                            <View style={ItemsStyles.ItemBtnView}>
                                <TouchableOpacity style={ItemsStyles.addItemBtn} onPress={ () => navigation.navigate('Add Item')}>
                                    <Text style={{fontFamily: Fonts.type.MontReg, color: '#fff'}}>Add New Business</Text>
                                </TouchableOpacity>
                            </View>

                            <ScrollView style={{paddingLeft: 10, paddingRight: 10, height: 750}}>
                            {ItemInfo.map((data, index) => {
                            return(
                                <View key={index} style={ItemsStyles.itemBox}>
                                    <View style={ItemsStyles.itemInfo}>
                                        <Text style={{fontSize: 20, fontFamily: Fonts.type.MontReg, marginBottom: 5}}>{data.itemName}</Text>
                                        <Text style={{fontFamily: Fonts.type.MontReg,}}>RS {data.itemPrice}/=</Text>
                                    </View>

                                    <TouchableOpacity style={ItemsStyles.iconBox}>
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

const ItemsStyles = StyleSheet.create({
    itemBox : {
        flex: 1,
        flexDirection: 'row',
        height: 130,
        backgroundColor: 'white',
        width: "100%",
        height: 100,
        borderRadius: 10,
        elevation: 10,
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,

    },
    itemInfo : {
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
    emptyItems: {
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
    ItemBtnView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 25,
        paddingBottom: 25,
    },
    addItemBtn: {
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

export default Items

