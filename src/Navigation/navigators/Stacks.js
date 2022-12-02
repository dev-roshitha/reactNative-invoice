import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Client, Home, Business, Login, Items, MakeInvoice, PdfScreen, BusinessForm } from '../../Screens';
import DrawerMenu from './DrawerMenu';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Stacks = ({ params }) => (
    <DrawerMenu>
        <Stack.Navigator initialRouteName="Invoice" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Invoice" component={Home} />
            <Stack.Screen name="Business" component={Business} />
            <Stack.Screen name="Client" component={Client} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Items" component={Items} />
            <Stack.Screen name="Make Invoice" component={MakeInvoice} />
            <Stack.Screen name="PDF Invoice" component={PdfScreen} />
            <Stack.Screen name="Add Business" component={BusinessForm} />
        </Stack.Navigator>
    </DrawerMenu>
);

export default Stacks;
