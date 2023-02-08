import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { imagepath } from '../assest/Index'
import LinearGradient from 'react-native-linear-gradient'

const Favourites = () => {
    return (
        <View style={styles.body}>

            <LinearGradient colors={["#FF0059", "#FE5F04"]} style={styles.cantenar1}>
                <View style={styles.favView}>
                    <TouchableOpacity>
                        <Image
                            style={styles.errowimg}
                            source={imagepath.errow}
                        />
                    </TouchableOpacity>
                    <Text style={styles.favText}>
                        FAVOURITES
                    </Text>
                </View>
                <Image
                    style={{ alignSelf: "center",tintColor:"white",marginTop:80
                 }}
                    source={imagepath.Vectorlove} />
            </LinearGradient>

            <View style={styles.cantenar2}>

                <Text style={styles.lovetext}>
                    WHERE IS THE LOVE?
                </Text>

                <Text style={styles.lovetext2}>
                    Once you favorite a restaurant, it will appear here.
                </Text>
            </View>

        </View>
    )
}

export default Favourites

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    cantenar1: {
        flex: 1,
        paddingVertical: 20,

    },
    cantenar2: {
        flex: 1,
        paddingVertical: 30,

    },
    favView: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: .5,
        borderColor: 'white',
        paddingBottom: 10,
        width: "90%",
        alignSelf: "center"
    },
    errowimg: {
        marginRight: 20

    },
    favText: {
        color: "white"
    },
    lovetext: {
        color: "black",
        fontSize: 25,
        fontWeight: '600',
        textAlign: "center"
    },
    lovetext2: {
        fontWeight: '400',
        textAlign: "center",
        marginTop: 20,
        color: "black"
    }
})