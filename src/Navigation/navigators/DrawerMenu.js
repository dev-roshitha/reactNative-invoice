import { View, Text, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Animated from 'react-native-reanimated'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
    } from '@react-navigation/drawer'

import { McText, McImage } from '../../Components'
import { Images } from '../../Constants'
import Logo from '../../../assets/images/logo-c.png'
import Bg2 from '../../../assets/images/bg-2.jpg'
import { Home, Client, Business, Login } from '../../Screens'

const MENUs = [
    {
        name: 'Invoice',
        label: 'Invoice'
    },
    {
        name: 'Business',
        label: 'Add Business'
    },
    {
        name: 'Client',
        label: 'Add Client'
    },
    {
        name: 'Login',
        label: 'Login'
    },
]

const Drawer = createDrawerNavigator()

const CustomDrawerContent = ({navigation}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    return  <View style={{flex: 1}}>

                <View style={{
                    width:'100%',
                    height: 250,
                    
                }}>
                    <ImageBackground source={Bg2} resizeMode="cover" style={{
                        width: '100%', height: 250}}>


                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        
                        alignItems: 'flex-end'
                    }}>
                        <View style={{
                            width: 70,
                            height: 70,
                            borderRadius: 50,
                            backgroundColor: '#eee',
                            flexDirection: 'row',
                            marginBottom: -10,
                            marginLeft: 20,
                            borderWidth: 2,
                            borderColor: '#5F9DF7',
                            borderStyle: 'solid',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <McImage source={Logo} style={{
                                width: 45,
                                height: 45,
                            }}/>
                        </View>

                        <View style={{marginLeft: 10, marginBottom: 5}}>
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>CircleBook</Text>
                            <Text style={{textTransform: 'uppercase', fontSize: 12, letterSpacing: 1, color: '#4d4d4d'}}>Invoice Generator</Text>
                        </View>
                    </View>
                    </ImageBackground>
                </View>
                        
                        <DrawerContentScrollView
                            scrollEnabled={false}
                            contentContainerStyle={{}}
                            style={{ marginLeft: -10 }}
                        >
                            {MENUs?.map((menu, index) => {
                                return(
                                    <DrawerItem
                                        
                                        focused={activeIndex === index}
                                        key={index}
                                        onPress={() => {
                                            navigation.navigate(menu.name)
                                            setActiveIndex(index)
                                        }}
                                        label={( {focused} ) => {
                                            return(
                                                <View style={{
                                                    flexDirection:'row',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                    
                                                }}>

                                                    <View style={{
                                                        width: 5,
                                                        height: 33,
                                                        marginRight: 26,
                                                        backgroundColor: focused ? '#5F9DF7' : 'transparent',
                                                    }}>

                                                    </View>

                                                    <McText
                                                        size={18}
                                                        bold={focused}
                                                        color='#000' >
                                                            {menu.label}
                                                    </McText>
                                                </View>
                                            )
                                        }}
                                    >

                                    </DrawerItem>
                                )
                            })}

                        </DrawerContentScrollView>

                        <View style={{ marginBottom: 27, marginLeft: 30}}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}>
                                <McImage source={Images.logout}
                                        style={{
                                            tintColor: 'red',
                                            marginRight: 10,
                                            }}/>
                                <McText bold size={16} color='#000'>Logout</McText>
                            </View>
                            <View style={{marginTop: 20, marginLeft: 25}}>
                                <McText medium size={11} color='gray'>Version 1.0</McText>
                            </View>
                        </View>
            </View>
}

const DrawerMenu = () => {
    const [progress, setProgress] = useState(new Animated.Value(0))

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.75]
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 70]
    })

    const animatedStyle = {
        borderRadius, transform: [{scale}]
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'red'
        }}>
            <Drawer.Navigator
                screenOptions={{headerStyle: {
                                    height: 90,
                                    backgroundColor: '#2466bc',
                                    borderBottomRightRadius: 35, 
                                    borderBottomLeftRadius: 35},
                                headerTitleStyle: {
                                    color: '#fff',
                                    fontWeight: 'bold'
                                }}}
                hideStatusBar={true}
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: '70%',
                    backgroundColor: 'transparent'
                }}
                sceneContainerStyle={{
                    backgroundColor: 'transparent'
                }}
                initialRouteName=""
                drawerContent={(props) => {
                        setTimeout(()=>{
                            setProgress(props.progress)
                        }, 0)
                        return(
                            <CustomDrawerContent
                                navigation={props.navigation}
                                backgroundColor='red'
                            />
                        )
                    }
                }
            >
                <Drawer.Screen name='Invoice'>
                    {(props) => <Home {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Business'>
                    {(props) => <Business {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Client'>
                    {(props) => <Client {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>
                <Drawer.Screen name='Login' options={{headerShown: false}}>
                    {(props) => <Login {...props} animatedStyle={animatedStyle} />}
                </Drawer.Screen>

            </Drawer.Navigator>
        </View>
    )
}

export default DrawerMenu