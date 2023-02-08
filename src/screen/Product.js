import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colorpath, imagepath } from '../assest/Index'
import { Items } from '../backend/Item'

const Product = ({ navigation }) => {

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });
    return unsubscribe;
  }, [navigation]);

  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      } else if (Items[index].category == 'accessory') {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  const renderItem1 = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { data: { item } })}
        style={{ width: 200, height: 200, margin: 10 }}>

        <View style={styles.listimagview}>

          <Image
            style={styles.listimag}
            source={item.productImage} />

        </View>

        <View style={{ position: "absolute" }}>
          {item.isOff ? (
            <View style={styles.popup}>
              <Text style={styles.offPercentage}>{item.offPercentage}%</Text>
            </View>) : null}

        </View>

        <TouchableOpacity style={styles.favview}>
          <Image style={styles.fav}
            source={item.fav} />
        </TouchableOpacity>


        <View>
          <Text style={styles.name}>
            {item.productName}
          </Text>
          <Text style={styles.price}>
            ₹{item.productPrice}
          </Text>
        </View>

      </TouchableOpacity>
    )
  }

  const renderItem2 = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { data: { item } })}
        style={{ width: 200, height: 200, margin: 10, }}>

        <View style={styles.listimagview}>

          <Image
            style={styles.listimag}
            source={item.productImage} />

        </View>

        <View style={{ position: "absolute" }}>
          {item.isOff ? (
            <View style={styles.popup}>
              <Text style={styles.offPercentage}>{item.offPercentage}%</Text>
            </View>) : null}

        </View>

        <View>

        </View>

        <TouchableOpacity style={styles.favview}>
          <Image style={styles.fav}
            source={item.fav} />
        </TouchableOpacity>

        <View>
          <Text style={styles.name}>
            {item.productName}
          </Text>
          <Text style={styles.price}>
            ₹{item.productPrice}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  const renderItem3 = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { data: { item } })}
        style={{ width: 200, height: 200, margin: 10 }}>

        <View style={styles.listimagview}>

          <Image
            style={styles.listimag}
            source={item.productImageList[1]} />

        </View>

        <View style={{ position: "absolute" }}>
          {item.isOff ? (
            <View style={styles.popup}>
              <Text style={styles.offPercentage}>{item.offPercentage}%</Text>
            </View>) : null}

        </View>

        <View>

        </View>

        <TouchableOpacity style={styles.favview}>
          <Image style={styles.fav}
            source={item.fav} />
        </TouchableOpacity>

        <View>
          <Text style={styles.name}>
            {item.productName}
          </Text>
          <Text style={styles.price}>
            ₹{item.productPrice}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }


  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={colorpath.white} barStyle="dark-content" />
      <ScrollView>

        <View style={styles.logoview}>

          <View style={styles.shopinglogoview}>
            <Image
              style={styles.shopinglogo}
              source={imagepath.shoppingBag} />
          </View>
          <TouchableOpacity>
            <Text style={{fontSize:20,fontWeight:'700',color:colorpath.black,}}>AUTHOR</Text>
          </TouchableOpacity>

          <View style={styles.shopinglogoview}>
            <Image
              style={styles.shopinglogo}
              source={imagepath.shoppingBag2} />
          </View>

        </View>


        <View style={{ marginBottom: 10, padding: 16, marginTop: 20 }}>

          <Text style={styles.hifi}>
            Hi-Fi shop & service
          </Text>
          <Text style={styles.textt}>
            Audio shop on Rustaveli Ave 57.
            {'\n'}This shop offers both products and services
          </Text>
        </View>

        <View style={styles.ProductView}>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>

            <Text style={styles.Producttext}>
              Products
            </Text>
            <Text style={styles.towone}>
              21
            </Text>

          </View>

          <TouchableOpacity onPress={() => navigation.navigate('SeeAll')}>
            <Text style={styles.seeall}>
              See All
            </Text>
          </TouchableOpacity>

        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={products}
            renderItem={renderItem1}
          />
        </View>

        <Text style={[styles.Producttext, { margin: 10 }]}>
          Accessories
        </Text>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={accessory}
            renderItem={renderItem2}
          />
        </View>


        <View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={Items}
            renderItem={renderItem3}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colorpath.white,
  },
  shopinglogo: {
    width: 30,
    height: 30,
  },
  logoview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10

  },
  shopinglogoview: {
    padding: 8,
    backgroundColor: colorpath.backgroundLight,
    borderRadius: 15,
  },
  hifi: {
    fontSize: 26,
    color: colorpath.black,
    fontWeight: '500',
    letterSpacing: 2,
    marginBottom: 10,
  },
  textt: {
    fontSize: 14,
    color: colorpath.black,
    fontWeight: '400',
    letterSpacing: 1,
    lineHeight: 40,
  },
  ProductView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 20
  },
  Producttext: {
    color: colorpath.black,
    fontSize: 20,
    fontWeight: '500'

  },
  towone: {
    fontSize: 16,
    color: colorpath.red,
    fontWeight: '500'
  },
  seeall: {
    color: colorpath.blue,
    fontSize: 17,
    fontWeight: '400'
  },
  listimagview: {
    backgroundColor: colorpath.backgroundLight,
    height: 130,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  listimag: {
    height: 100,
    width: 100,

  },
  price: {
    fontSize: 15,
    fontWeight: '400',
    color: colorpath.red
  },
  name: {
    color: colorpath.black,
    fontSize: 15,
    fontWeight: "500"
  },
  popup: {
    backgroundColor: colorpath.green,
    height: 30,
    width: 40,
    marginLeft: 3,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  offPercentage: {
    color: colorpath.white,
    fontWeight: '600'
  },
  favview: {
    position: "absolute",
    alignSelf: 'flex-end',
    height: 30,
    width: 40,
    backgroundColor: colorpath.green,
    justifyContent: "center",
    alignContent: "center",
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  fav: {
    height: 20,
    width: 20,
    alignSelf: "center",
    tintColor: colorpath.white
  }
})