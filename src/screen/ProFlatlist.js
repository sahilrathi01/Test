import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityComponent, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Data } from '../backend/Data'
import { imagepath } from '../assest/Index'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProFlatlist = ({ navigation }) => {

    const [ListData, setListData] = useState(Data)

    const misadd = (index) => {
        let arr = [...ListData];
        if (Number(arr[index].cnt) < 10) {
            arr[index].cnt = Number(arr[index].cnt) + 1;
            setListData(arr)
        }
    }
    const misadd2 = (index) => {
        let arr = [...ListData];
        if (Number(arr[index].cnt) > 1) {
            arr[index].cnt = Number(arr[index].cnt) - 1;
            setListData(arr)
        }
    }


    const likeunlike = async (index) => {
        let arr = [...ListData];
        arr[index].icon = arr[index].icon == imagepath.blacklike ? imagepath.redlike : imagepath.blacklike
        setListData(arr)
        await AsyncStorage.setItem("ListData", JSON.stringify(ListData))

    }

    const getListData = async () => {
        let listDataa = await AsyncStorage.getItem("ListData")
        if (listDataa) {
            setListData(JSON.parse(listDataa))
        }
        else {
            setListData(Data);
        }
    }
    useEffect(() => {
        getListData();
    }, [useIsFocused()])




    const [vealu, setvealu] = useState('')
    const [error, seterror] = useState("")

    const search = () => {
        let filterData = ListData.filter((item, index) => {
            return item.ctgy == vealu
        })
        setListData(filterData);

        seterror("")
        if (filterData.length == 0) {
            setListData(Data);
            seterror("NO RESULT FOUND")
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Details', { fata: { item } })}
                style={styles.cantenar
                }>

                <View style={styles.imagecantenar}>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: 160, height: 200, }}
                        resizeMode='contain'

                    />
                </View>

                <View style={styles.textcantenar}>
                    <Text style={styles.texttittle}>
                        {item.title}
                    </Text>

                    <Text style={styles.texttittle}>
                        {item.price}
                    </Text>

                    <Text style={styles.texttittle}>
                        category {item.category}
                    </Text>

                    <Text style={[styles.texttittle, { fontSize: 10 }]}>
                        description=={item.description}
                    </Text>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => likeunlike(index)}>
                            <Image
                                style={styles.like}
                                source={item.icon} />
                        </TouchableOpacity>
                        <View style={styles.minsadd}>
                            <TouchableOpacity onPress={() => misadd(index)}>
                                <Text style={{ fontSize: 25, color: "white" }}>
                                    +
                                </Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 25, color: "white" }}>
                                {item.cnt}
                            </Text>
                            <TouchableOpacity onPress={() => misadd2(index)}>
                                <Text style={{ fontSize: 25, color: "white" }}>
                                    -
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>

            </TouchableOpacity>
        )
    }


    return (
        <View style={{ flex: 1 }} >
            <View style={styles.inputt}>
                <TextInput
                    onChangeText={(e) => setvealu(e)}
                    placeholder='search....'
                    placeholderTextColor={'black'}
                    style={{
                        width: '80%',
                        fontSize: 15,
                        color: "black"
                    }}
                />
                <TouchableOpacity onPress={() => search()}
                    style={{ width: '20%', alignItems: "center", justifyContent: "center" }}>
                    <Image
                        source={imagepath.sarch} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ alignSelf: "center", fontSize: 20, color: "red", fontWeight: '500' }}>
                    {error}
                </Text>
            </View>
            <Button title='Go To Fav ' onPress={() => navigation.navigate('Favourites')} />
            <FlatList
                renderItem={renderItem}
                data={ListData}
            />
        </View>
    )
}

export default ProFlatlist

const styles = StyleSheet.create({
    inputt: {
        marginVertical: 20,
        height: 50,
        width: '90%',
        borderRadius: 10,
        alignSelf: "center",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: 'space-between'

    },
    cantenar: {
        // borderWidth: 1,
        // borderColor: "red",
        height: 350,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "space-around",
        width: 380,
        borderRadius: 10,
        elevation: 10,
        backgroundColor: "white",
        margin: 7,
        alignSelf:"center"
    },
    imagecantenar: {
        // borderWidth: 1,
        // borderColor: "red",
        height: 200,
        width: 160

    },
    textcantenar: {
        // borderWidth: 1,
        // borderColor: "red",
        height: 350,
        width: "50%",
        justifyContent: "center"

    },
    texttittle: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 15
    },
    like: {
        height: 30,
        width: 30,

    },
    minsadd: {
        backgroundColor: "#FF0059",
        flexDirection: 'row',
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
        justifyContent: "space-around",
        elevation: 8,
        borderColor: "white",
        borderWidth: 1
    }
})
