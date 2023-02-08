import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { imagepath } from '../assest/Index';

const Cart = () => {

  const [add, setadd] = useState(0)

  const misadd = () => {
    setadd(add + 1)
  }
  const misadd2 = () => {
    setadd(add - 1)
  }
  const Data = [
    {
      image: imagepath.paner,
      name: 'Paneer Butter Masala',
      offer: '"EXTRA 20% OF AND FREE DELIVERY"',
      one: "one",
      benefit: "BENEFITS",
      star: imagepath.redstar,
      price:"$20"
    },
    {
      image: imagepath.chole,
      name: 'Paneer Butter Masala',
      offer: '"EXTRA 20% OF AND FREE DELIVERY"',
      one: "one",
      benefit: "BENEFITS",
      star: imagepath.redstar,
      price:"$20"
    },
    {
      image: imagepath.paner,
      name: 'Paneer Butter Masala',
      offer: '"EXTRA 20% OF AND FREE DELIVERY"',
      one: "one",
      benefit: "BENEFITS",
      star: imagepath.redstar,
      price:"$20"
    },
    {
      image: imagepath.paner,
      name: 'Paneer Butter Masala',
      offer: '"EXTRA 20% OF AND FREE DELIVERY"',
      one: "one",
      benefit: "BENEFITS",
      star: imagepath.redstar,
      price:"$20"
    }
  ]
  const renderitem = ({ item }) => {
    return (
      <View style={styles.mainCantener}>

        <View style={styles.imageCantenar}>
          <Image
            source={item.image} />
        </View>

        <View style={styles.textCantener}>

          <View style={styles.textView}>
            <Text style={styles.text} >{item.name}</Text>
          </View>

          <View style={styles.textView}>
            <Text style={styles.text} >{item.offer}</Text>
          </View>

          <View style={styles.textView}>
            <Text style={styles.text} >{item.one}</Text>
          </View>

          <View style={styles.textView}>
            <Text style={styles.text} >{item.price}</Text>
          </View>

          <View style={styles.textView}>
            <Text style={styles.text} >{item.benefit}</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={item.star} />
              <Image
                source={item.star} />
              <Image
                source={item.star} />
              <Image
                source={item.star} />
            </View>

            <View style={styles.minsadd}>
              <TouchableOpacity onPress={() => misadd()}>
                <Text style={{ fontSize: 25, color: "white" }}>
                  +
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 25, color: "white" }}>
                {add}
              </Text>
              <TouchableOpacity onPress={() => misadd2()}>
                <Text style={{ fontSize: 25, color: "white" }}>
                  -
                </Text>
              </TouchableOpacity>
            </View>
          </View>


        </View>

      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>


      <View style={styles.banerView}>
        <Image
          style={{ height: 300 }}
          resizeMode='cover'
          source={imagepath.bargarbanner} />
      </View>



      <View style={styles.line} />

      <FlatList
        renderItem={renderitem}
        data={Data} />


    </View>

  )
}

export default Cart;

const styles = StyleSheet.create({
  banerView: {
    height: 300,
    width: "100%"

  },
  line: {
    borderBottomWidth: 1,
    margin: 10
  },
  mainCantener: {
    flexDirection: "row",
    height: 250,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 39
  },
  imageCantenar: {
    height: 200,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#F9E0E0',
    borderRadius: 20
  },
  textCantener: {
    height: 200,
    width: 200
  },
  textView: {
    marginBottom: 10
  },
  text: {
    fontSize: 17,
    color: "black",
    fontWeight: "bold"
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