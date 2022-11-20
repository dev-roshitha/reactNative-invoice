import { StyleSheet, Text, View, Image, Button, TextInput, Alert, TouchableOpacity} from 'react-native'
import React from 'react'
import LoginLogo from '../../../assets/images/logo-title.png'
import { Fonts } from '../../Constants';
import { useFonts } from 'expo-font';

const loginData = {
    name: 'user',
    password: '123'
}

const Login = () => {
    return(
        <View style={loginStyles.main}>
            <View style={loginStyles.logoSection}>
                <Image source={LoginLogo} style={{width: 150, height: 150}}/>
            </View>

            <View style={loginStyles.loginSection}>
                <Text style={loginStyles.title}>LOGIN</Text>

                <TextInput style={loginStyles.input} placeholder='Email'/>
                <TextInput secureTextEntry={true} style={loginStyles.input} placeholder='Password' type="password"/>
                <TouchableOpacity style={loginStyles.submit}>
                    <Text style={{fontSize: 16, color: '#eee'}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const loginStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#2466bc'
    },

    logoSection: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    loginSection: {
        flex: 1,
        paddingLeft: 50, 
        paddingRight: 50,
        paddingTop: 80,
        backgroundColor: '#eee',
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        elevation: 10,
    },
    title: {
        fontSize: 35,
        color: '#2466bc',
        fontFamily: Fonts.type.MontReg,
        letterSpacing: 2,
        marginBottom: 10,
    },
    input: {
        marginTop: 15,
        backgroundColor: '#eeeeeec8',
        borderRadius: 15,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
        borderWidth: 2,
        borderColor: "#2466bc",
    },
    submit: {
        marginTop: 50,
        width: 150,
        backgroundColor: '#2466bc',
        fontSize: 16,
        textTransform: 'lowercase',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 15,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderWidth: 1,
        borderColor: '#eee',
    }
})

export default Login