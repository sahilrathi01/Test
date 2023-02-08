import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
const ProfileScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient colors={['#FF0059', '#FE5F04']} style={styles.cnt2}>
                <TouchableOpacity>
                    <Image source={require('../assest/image/backErrow.png')}
                        style={{ tintColor: "white", marginTop: 10 }} />
                </TouchableOpacity>
                <Image
                    source={require('../assest/image/profileLogo.png')}
                    style={styles.imgp} />
                <View style={styles.flotview}>
                    <View style={styles.fullnameview}>
                        <Text style={styles.fullnametext}>
                            Full Name
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.edit}>
                                EDIT
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.myacc}>
                        <View>
                            <Text style={styles.myacctext}>
                                My Account
                            </Text>
                            <Text>
                                Favourites, Offers & Settings
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assest/image/leftErrow.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.myacc}>
                        <View>
                            <Text style={styles.myacctext}>
                                Addresses
                            </Text>
                            <Text>
                                Share, Edit & Add New Addresses
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assest/image/leftErrow.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.myacc}>
                        <View>
                            <Text style={styles.myacctext}>
                                Payment & Refund
                            </Text>
                            <Text>
                                Refund Status & Payment Modes
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assest/image/leftErrow.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.myacc}>
                        <View>
                            <Text style={styles.myacctext}>
                                Help
                            </Text>
                            <Text>
                                FAQ & Links
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                    source={require('../assest/image/leftErrow.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.logoutview}>
                    <TouchableOpacity>
                        <Text style={styles.logouttext}>
                            LOGOUT
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>

            <View style={styles.cnt2}>


            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    cnt1: {
        flex: 1,
    },
    cnt2: {
        flex: 1,
    },
    flotview: {
        width: 368,
        height: 442,
        marginTop: 50,
        backgroundColor: '#FFF2F2',
        padding: 10,
        alignSelf: "center"
    },
    imgp: {
        alignSelf: "center"
    },
    fullnameview: {
        elevation: 10,
        backgroundColor: "#fff",
        height: 50,
        borderRadius: 7,
        marginTop: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    fullnametext: {
        color: 'black',
        fontSize: 18
    },
    edit: {
        color: 'red',
        fontSize: 18
    },
    myacc: {
        paddingHorizontal: 20,
        marginTop: 20,
        height: 70,
        borderRadius: 7,
        elevation: 10,
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between"
    },
    myacctext: {
        color: "black",
        fontSize: 17
    },
    logoutview: {
        backgroundColor: "#fff",
        height: 50,
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 30
    },
    logouttext: {
        color: "black",
        fontSize: 23,
        fontFamily: "bold"
    },
})