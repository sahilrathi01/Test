import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Input from '../componant/Input'
import Buttonn from '../componant/Buttonn'

const SingUpScreen = ({ navigation, route }) => {
    const number = route?.params?.data?.numVealu



    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <ScrollView>
                    <LinearGradient colors={['#FF0059', '#fff']} style={{ flex: 1, padding: 10 }}  >
                        <TouchableOpacity>
                            <Image source={require('../assest/image/backErrow.png')}
                                style={{ tintColor: "white", }} />
                        </TouchableOpacity>
                        <View style={styles.View1}>
                            <Image style={{ height: 300, resizeMode: 'contain' }} source={require('../assest/image/sofo.png')}
                            />
                        </View>

                        <View style={styles.View2}>

                            <Text style={styles.login1}>
                                OTP
                            </Text>
                            <Text style={{ alignSelf: "center", marginTop: 10 }}>
                                Enter OTP Send To {number}
                            </Text>

                            <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                                <Input
                                    keyboardType='number-pad'
                                    maxLength={1}
                                    viewstyle={{
                                        borderRadius: 8,
                                        backgroundColor: 'pink',
                                        marginTop: 20,
                                        padding: 5,
                                        fontSize: 15,
                                        color: 'black',
                                        height: 60,
                                        width: 60,
                                        fontSize: 20,
                                        alignItems: "center"
                                    }} />

                                <Input
                                    keyboardType='number-pad'
                                    maxLength={1}
                                    viewstyle={{
                                        borderRadius: 8,
                                        backgroundColor: 'pink',
                                        marginTop: 20,
                                        padding: 5,
                                        fontSize: 15,
                                        color: 'black',
                                        height: 60,
                                        width: 60,
                                        fontSize: 20,
                                        alignItems: "center"
                                    }} />

                                <Input
                                    keyboardType='number-pad'
                                    maxLength={1}
                                    viewstyle={{
                                        borderRadius: 8,
                                        backgroundColor: 'pink',
                                        marginTop: 20,
                                        padding: 5,
                                        fontSize: 15,
                                        color: 'black',
                                        height: 60,
                                        width: 60,
                                        fontSize: 20,
                                        alignItems: "center"
                                    }} />

                                <Input
                                    keyboardType='number-pad'
                                    maxLength={1}
                                    viewstyle={{
                                        borderRadius: 8,
                                        backgroundColor: 'pink',
                                        marginTop: 20,
                                        padding: 5,
                                        fontSize: 15,
                                        color: 'black',
                                        height: 60,
                                        width: 60,
                                        fontSize: 20,
                                        alignItems: "center"
                                    }} />
                            </View>

                            <Buttonn title={'Sing Up'} buttonstyle={{ width: "100%", marginTop: 30 }} onPress={() => navigation.navigate("OtpScreen")} />

                            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                                <Text style={{ textAlign: "center", marginTop: 10, color: 'black', textDecorationLine: 'underline' }}>
                                    Did’t Receive the OTP?
                                    <Text
                                        style={{ color: "blue" }}>
                                        RESEND
                                    </Text>
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </LinearGradient >
                </ScrollView>
            </SafeAreaView>
        </View >
    )
}

export default SingUpScreen;

const styles = StyleSheet.create({
    View1: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    View2: {
        height: 380,
        width: 350,
        backgroundColor: 'white',
        padding: 20,
        elevation: 10,
        borderRadius: 2,
        marginTop: -10,
        alignSelf: "center"

    },
    login1: {
        fontSize: 30,
        color: 'black'
    },
    input1: {
        borderRadius: 8,
        backgroundColor: 'pink',
        marginTop: 20,
        padding: 5,
        fontSize: 15,
        color: 'black',
        height: 60,
        width: 60,
        fontSize: 20,
        alignItems: "center"
    },
    forgot: {
        alignSelf: "flex-end",
        top: 10,
        color: 'black'
    },
    or: {
        alignSelf: "center",
        backgroundColor: "gray",
        borderRadius: 50,
        width: 30,
        height: 30,
        justifyContent: 'center',
        marginTop: 30
    },
    login: {
        backgroundColor: "#FF0059",
        width: 330,
        alignItems: "center",
        height: 70,
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'center'
    },
    google: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 20,
    },
    logintext: {
        fontSize: 30,
        color: '#fff'
    }
})