import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './Stacks';

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stacks />
        </NavigationContainer>
    );
}
