import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Animated, { color } from 'react-native-reanimated';
import { Stack, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import EmptyImage from '../../../assets/empty.png'
import MakeInvoice from '../MakeInvoice';

const InvoiceInfo = [
    {
        invoiceId: 'INV0001',
        invoiceDate: '2022/10/28',
        clientFirstName: 'Roshitha',
        totalAmount: 2500.00,
        paymentStatus: 'Unpaid'
    },
    {
        invoiceId: 'INV0002',
        invoiceDate: '2022/10/28',
        clientFirstName: 'Dulim',
        totalAmount: 1500.00,
        paymentStatus: 'Unpaid'
    },
    {
        invoiceId: 'INV0003',
        invoiceDate: '2022/10/28',
        clientFirstName: 'Dinesh',
        totalAmount: 3000.00,
        paymentStatus: 'Paid'
    },
    {
        invoiceId: 'INV0004',
        invoiceDate: '2022/10/28',
        clientFirstName: 'Sadun',
        totalAmount: 5800.00,
        paymentStatus: 'Paid'
    },
    {
        invoiceId: 'INV0005',
        invoiceDate: '2022/10/28',
        clientFirstName: 'Lakmal',
        totalAmount: 2500.00,
        paymentStatus: 'Unpaid'
    },
]

const Home = ({animatedStyle, navigation}) => {
    
    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: '#1053f007',
                ...animatedStyle
            }}
        >

            <View style={{flexDirection: 'row', justifyContent: 'space-evenly',  marginTop: 15}}>
                <View style={[cardStyle.card]}>
                    <Text style={{fontSize: 15}}>Total Unpaid</Text>
                    <Text style={{ marginTop: 25, fontSize: 25, color: '#002B5B', }}>Rs 8500.00</Text>
                </View>

                <View style={[cardStyle.card]}>
                    <Text style={{fontSize: 15}}>Total Over Due</Text>
                    <Text style={{ marginTop: 25, fontSize: 25, color: '#FF1E1E', }}>Rs 2150.00</Text>
                </View>
            </View>

            <View style={{marginTop: 50, marginBottom: 50, height: 1}}>
                <Stack fill center spacing={4}>
                    <Button
                        onPress={ () => navigation.navigate('Make Invoice')}
                        tintColor="black"
                        color="#509ff9"
                        title={<Text style={{fontSize: 18, fontWeight: '600',}}>Make Invoice</Text>}
                        trailing={props => <Icon name="plus" {...props} />}
                        style={{ backgroundColo: 'red' }}/>
                </Stack>
            </View>

            <View style={{paddingTop: 0, height: 540}}>
            <ScrollView>

                {InvoiceInfo.length===0 ?
                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source={EmptyImage} />
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '100',
                            color: '#797979'
                        }}>Nothing to show. Tap on "Make Invoice +"</Text>
                    </View> :  
                    
                InvoiceInfo.map((data, index) => {
                return(
                    
                    <View key={index} style={{alignItems: 'center', marginTop: 10, paddingBottom: 10}}>
                    <View style={[cardStyle.invoiceCard]}>
                        <View style={{ flexDirection: 'column'}}>
                            <Text style={{fontSize: 15}}>{data.invoiceId}</Text>
                            <Text style={{marginTop: 15, fontSize: 18}}>{data.invoiceDate}</Text>
                        </View>

                        <View style={{ flexDirection: 'column'}}>
                            <Text style={{textAlign: 'right', fontSize: 18}}>{data.clientFirstName}</Text>
                            <Text style={{ textAlign: 'right',marginTop: 15, fontSize: 22}}>RS {data.totalAmount}.00</Text>
                            <Text style={{
                                backgroundColor: data.paymentStatus === "Paid" ? "#13c6258d" : "#f91b1b78",
                                textAlign: 'center',
                                borderRadius: 10,
                                marginTop: 15,
                                paddingTop: 3,
                                paddingBottom: 3,
                            }}>{data.paymentStatus}</Text>
                        </View>
                    </View>
                </View>

                )
                })}

                    {}
                
            </ScrollView>
            </View>


        </Animated.View>
    );
};

const cardStyle = StyleSheet.create({
    card: {
        paddingBottom: 20,
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        width: 180,
        height: 130,
        borderRadius: 10,
        elevation: 15
    },

    invoiceCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: "95%",
        height: 130,
        borderRadius: 10,
        elevation: 10,
        paddingLeft: 10,
        paddingRight: 10,
    }
})

export default Home;
