import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const Flatlit = () => {
    let Data = [
        {
            color: "white",
            name: 'Name : Sahil',
            class: 'Class : React-Native',
            addres: "Addres : Gotan"

        },
        {
            color: "black",
            name: 'Name : Sikandar',
            class: 'Class : HTML',
            addres: "Addres : Nasirabad"
        },
        {
            color: "white",
            name: 'Name : Imran',
            class: 'Class : CSS',
            addres: "Addres : Merta"
        },
        {
            color: "black",
            name: 'Name : Aarif',
            class: 'Class : Java-Script',
            addres: "Addres : Gotan"
        },
        {
            color: "white",
            name: 'Name : Shanu',
            class: 'Class : BackEnd',
            addres: "Addres : USA"
        },
        {
            color: "black",
            name: 'Name : Akram',
            class: 'Class : Full Stake ',
            addres: "Addres : UK"
        },
    ]


    const renderItem = ({ item }) => {
        return (
            <View style={[styles.container, { backgroundColor: item.color }]}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "red", textAlign: "center" }}>
                    {item.name}
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "red", textAlign: "center" }}>
                    {item.class}
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "red", textAlign: "center" }}>
                    {item.addres}
                </Text>
            </View>

        )
    }

    return (
        <View style={{ flex: 1, }}>
            <FlatList
                renderItem={renderItem}
                data={Data}
            />
        </View>

    )
}


export default Flatlit

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 300,
        elevation: 13,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        marginLeft: 5,
        backgroundColor: "white",
        alignSelf: "center",
        justifyContent:"center",
        borderWidth:1,
        borderColor:"red"

    }
})