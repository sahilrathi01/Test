import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewContainer from '../componant/HOC/ViewContainer'
import LinearGradient from 'react-native-linear-gradient'
import Buttonn from '../componant/Buttonn'

const GetStart = ({navigation}) => {
    return (
        <ViewContainer>
            <StatusBar barStyle={"light-content"} backgroundColor={'#FF0059'} />

            <LinearGradient colors={['#FF0059', '#F4C210']} style={styles.cnt}>

                <Image source={require('../assest/image/bike_logo.png')} />

            </LinearGradient>


            <View style={{ position: 'relative', flex: 1, }}>

                <View style={styles.view3}>
                    <Text style={styles.text1}>
                        Order from a wide range
                    </Text>
                    <Text style={styles.text1}>
                        of restaurants
                    </Text>

                </View>

                <View style={styles.smallfont1}>

                    <Text style={styles.text2}>
                        Ready from a wide range of resturants
                    </Text>

                </View>
                <View style={styles.btnview}>
                    <Buttonn
                        onPress={() => navigation.navigate("LoginScreen")}
                        style={{}}
                        title={'Get Start'} />
                </View>

            </View>


        </ViewContainer>
    )
}

export default GetStart;

const styles = StyleSheet.create({
    cnt: {
        backgroundColor: "pink",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text1: {
        fontSize: 30,
        color: 'black',
        fontWeight: "600",
        fontStyle: 'normal'

    },
    linearGradient1: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    view3: {
        alignItems: "center",
        marginTop: 50,
    },
    smallfont1: {
        marginTop: 50,
        alignSelf: "center",
    },
    text2: {
        fontSize: 15,
    },
    btnview: {
        position: "absolute",
        bottom: 100,
        alignSelf: 'center'
    }

})