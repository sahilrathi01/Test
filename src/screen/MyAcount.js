import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { imagepath } from '../assest/Index'

const MyAcount = () => {
    const [clicked, setclicked] = useState(false)

    return (
        <View style={{ flex: 1, color: "white", padding: 20 }}>

            <View style={{ marginBottom: 20 }}>

                <View style={{ borderBottomWidth: 1, paddingBottom: 10 }}>

                    <View style={styles.nameimage}>
                        <Text style={styles.goodfont}>
                            Sahil Razza
                        </Text>
                        <TouchableOpacity>
                            <Text style={[styles.goodfont, { color: 'red' }]}>
                                Edit
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.number}>
                            +91 7850013262
                        </Text>
                    </View>
                </View>

            </View>

            {/* --xx--xx--x--xx--x-x-x-x-x-x---xx---xx--------xxxxxxx-------xxxxxx-----x */}

            <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => setclicked(!clicked)}>


                <View style={{ borderBottomWidth: 1, paddingBottom: 10 }}>


                    <View style={styles.nameimage}>
                        <Text style={styles.goodfont}>
                            My Acount
                        </Text>
                        <Image
                            source={imagepath.down} />
                    </View>

                    <View>
                        <Text style={styles.number}>
                            favourites, Offers & Settings
                        </Text>
                    </View>

                </View>

            </TouchableOpacity>


            {clicked? <View style={styles.dropdownView}>

                    <View style={styles.lovecantear}>

                        <View style={styles.loveView}>
                            <Image
                                style={{ marginRight: 20 }}
                                source={imagepath.love} />
                            <Text style={styles.goodfont2}>
                                favourites
                            </Text>
                        </View>

                        <View>
                            <Image
                                source={imagepath.down} />
                        </View>

                    </View>

                    <View style={styles.lovecantear}>

                        <View style={styles.loveView}>
                            <Text style={styles.percent}>
                                %
                            </Text>
                            <Text style={styles.goodfont2}>
                                Offers
                            </Text>
                        </View>

                        <View>
                            <Image
                                source={imagepath.down} />
                        </View>

                    </View>

                    <View style={styles.lovecantear}>

                        <View style={styles.loveView}>
                            <Image
                                style={{ marginRight: 20 }}
                                source={imagepath.setting} />
                            <Text style={styles.goodfont2}>
                                Setting
                            </Text>
                        </View>

                        <View>
                            <Image
                                source={imagepath.down} />
                        </View>

                    </View>

                </View> : null
            }




            <View style={{ paddingBottom: 10, marginTop: 20 }}>


                <View style={styles.nameimage}>
                    <Text style={styles.goodfont}>
                        Addresses
                    </Text>
                    <TouchableOpacity>
                        <Image
                            source={imagepath.down} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.number}>
                        share, Edit, & New Addresses
                    </Text>
                </View>

            </View>

            {/* --xx--xx--x--xx--x-x-x-x-x-x---xx---xx--------xxxxxxx-------xxxxxx-----x */}
            <View style={styles.gift}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={imagepath.gift} />
                    <Text style={styles.knowtext}>Did you know ?</Text>

                </View>
                <Text style={{ textAlign: "center" }}>
                    you can now share addresses with friends and famliy using a smart link!
                </Text>

            </View>

            {/* --xx--xx--x--xx--x-x-x-x-x-x---xx---xx--------xxxxxxx-------xxxxxx-----x */}


            <View style={{ paddingBottom: 10, marginTop: 20, borderBottomWidth: 1 }}>


                <View style={styles.nameimage}>
                    <Text style={styles.goodfont}>
                        Payments & Refunds
                    </Text>
                    <TouchableOpacity>
                        <Image
                            source={imagepath.down} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.number}>
                        Refund Status & Payment Modes
                    </Text>
                </View>

            </View>


            {/* --xx--xx--x--xx--x-x-x-x-x-x---xx---xx--------xxxxxxx-------xxxxxx-----x */}


            <View style={{ paddingBottom: 10, marginTop: 20, borderBottomWidth: 1 }}>


                <View style={styles.nameimage}>
                    <Text style={styles.goodfont}>
                        Help
                    </Text>
                    <TouchableOpacity>
                        <Image
                            source={imagepath.down} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.number}>
                        FAQs & Links
                    </Text>
                </View>

            </View>


        </View>
    )
}

export default MyAcount

const styles = StyleSheet.create({
    nameimage: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    goodfont: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold"
    },
    number: {
        fontSize: 12,
        color: "black",

    },
    dropdownView: {
        borderWidth: 1,
        backgroundColor:"#F4D5BD",
        elevation:5,
        borderColor:"#F4D5BD",     
        borderRadius:10,
        padding:15,
        
    },
    lovecantear: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50
    },
    loveView: {
        flexDirection: "row",
        alignItems: 'center'
    },
    goodfont2: {
        fontSize: 18,
        color: "black",

    },
    percent: {
        borderWidth: 1,
        height: 30,
        width: 20,
        textAlign: "center",
        fontSize: 20,
        color: "black",
        marginRight: 20
    },
    gift: {
        backgroundColor: "#F4D5BD",
        width: 370,
        height: 90,
        borderRadius: 15,
        padding: 10,
        alignSelf: "center",
        marginTop: 10,
    },
    knowtext: {
        fontSize: 15,
        fontWeight: '500',
        color: "black",
        marginLeft: 20
    }
})