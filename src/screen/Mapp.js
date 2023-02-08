import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewContainer from '../componant/HOC/ViewContainer'
import Buttonn from '../componant/Buttonn'

const Mapp = ({navigation}) => {
    return (
        <ViewContainer style={{ justifyContent:"space-around"}}>

            <Text style={{fontSize:20,color:"red",textAlign:'center'}}>Some other screen</Text>

            <Buttonn  title={"flate list"} buttonstyle={{marginBottom:20}} onPress={()=>navigation.navigate("ProFlatlist")}/>
            <Buttonn title={"E-Com"} buttonstyle={{marginBottom:20}} onPress={()=>navigation.navigate("Product")}/>


        </ViewContainer>
    )
}

export default Mapp

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "white",

    },
    cantenar: {
        width: '80%',
        height: 130,
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: "#FF0059",
        elevation: 5,
        borderBottomColor: 'black',
        borderBottomWidth: .5,
        padding: 10,
        flexDirection: "row",

        
    },
    rahul: {
        color: "white",
        fontSize: 17,
        fontWeight: "400",
        marginLeft: 20
    },
    bdoy: {
        marginLeft: 20,
        color: "white",
        fontSize: 17,


    }
})