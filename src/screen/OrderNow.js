import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { imagepath } from '../assest/Index'
import LinearGradient from 'react-native-linear-gradient'

const OrderNow = () => {

  return (
    <View style={{ flex: 1,}}>
      <ScrollView>

        <View style={styles.logoView}>
          <Image
            source={imagepath.blackprofile}
          />
        </View>

        <View style={styles.foodmeanuView}>
          <Text style={styles.foodmeanu}>
            Food Menu
          </Text>
          <Text>Choose your best  food have a great day</Text>
        </View>

        {/* -------------xxxx------------xxxxx-----------xxxxx-----------------xxxx--------- */}


        <View>
          <FlatList
            horizontal
            renderItem={renderItem}
            data={Data}
          />
        </View>


        {/* -------------xxxx------------xxxxx-----------xxxxx-----------------xxxx--------- */}

        <Text style={styles.moreText}>
          More
        </Text>

        <FlatList
          scrollEnabled={false}
          horizontal
          renderItem={renderItem2}
          data={Fata} />

        {/* -------------xxxx------------xxxxx-----------xxxxx-----------------xxxx--------- */}

        <Text style={{color:"black",fontSize:20,marginTop:10,borderBottomWidth:2 ,width:140}}>
        Popular Dishes
        </Text>

        <FlatList
          horizontal
          renderItem={renderItem3}
          data={Gata} />

        {/* -------------xxxx------------xxxxx-----------xxxxx-----------------xxxx--------- */}

<Image
style={{marginTop:20}}
source={imagepath.barbiq}/>
      </ScrollView>
    </View>
  )
}

export default OrderNow;

const styles = StyleSheet.create({
  momoText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  logoView: {
    padding: 10
  },
  foodmeanu: {
    fontSize: 30,
    color: '#FF0059',
    fontWeight: "bold",
    borderBottomColor: '#FF0059',
    borderBottomWidth: 2
  },
  foodmeanuView: {
    alignItems: "center"
  },
  FlatLlistView1: {
    width: 179,
    marginRight: 20,
    borderRadius: 10,
    alignItems: "center",
    height: 204,

  },
  moreText: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    borderBottomWidth:2 ,width:80,
    marginBottom:20
  },
  choleView: {
    height: 200,
    width: 170,
    backgroundColor: '#A1A1A1',
    borderRadius: 10,
    marginRight: 30

  },
  newView: {
    backgroundColor: '#FF0059',
    width: 50,
    alignSelf: "center",
    justifyContent: "center",
    height: 30,
    alignItems: "center",
    elevation: 10

  },
  priceView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center"
  },
  addView: {
    height: 40,
    width: 80,
    backgroundColor: '#FF0059',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30
  },
  imageViewthali:{
    marginTop:20,
    marginRight:20
  }

})
const Data = [
  {
    image: imagepath.momos,
    name: 'Momos'
  },
  {
    image: imagepath.momos,
    name: 'Momos'
  },
  {
    image: imagepath.momos,
    name: 'Momos'
  },
]
const renderItem = ({ item }) => {
  return (
    <LinearGradient style={styles.FlatLlistView1} colors={['#FF0059', '#D65F1B']}>
      <View>
        <Image
          source={item.image} />
      </View>
      <View>
        <View>

        </View>
        <Text style={styles.momoText}>
          {item.name}
        </Text>
      </View>
    </LinearGradient>
  )
}

const Gata = [
  {
    image: imagepath.thali,
    name: 'Panjabi Thali'
  },
  {
    image: imagepath.pizzathali,
    name: 'Frozan Pizza'
  },
  {
    image: imagepath.pizzathali,
    name: 'Frozan Pizza'
  },
]
const renderItem3 = ({ item }) => {
  return (
    <View>
      <View style={styles.imageViewthali}>
        <Image 
        style={styles.imagethali}
        source={item.image} />
      </View>

      <View>
        <Text style={{fontSize:20,color:"black"}}>
          {item.name}
        </Text>
      </View>
    </View>
  )
}

const Fata = [
  {
    name: "Chole Bhature",
    new: "New",
    image: imagepath.chole,
    price: 2.8,
    add: "Add"

  },
  {
    name: "Paner",
    new: "New",
    image: imagepath.chole,
    price: 4.8,
    add: "Add"
  },
]

const renderItem2 = ({ item }) => {
  return (


    <View style={styles.choleView}>

      <View style={styles.newView}>
        <Text style={{ color: 'white' }}>
          {item.new}
        </Text>
      </View>

      <View>
        <Image
          style={{ alignSelf: "center" }}
          source={item.image} />
      </View>

      <View style={styles.priceView}>

        <View>
          <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
            <Text style={{ color: 'red', fontSize: 25, fontWeight: 'bold' }}>$
            </Text>{item.price}</Text>
        </View>

        <View style={styles.addView}>
          <Text style={{ fontSize: 25, color: "#ffff" }}>{item.add}</Text>
        </View>

      </View>

    </View>

  )
}