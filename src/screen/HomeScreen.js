import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { imagepath } from '../assest/Index'
import LinearGradient from 'react-native-linear-gradient'
import ScrollViewContainer from "../componant/HOC/ScrollViewContainer"

const HomeScreen = ({ navigation }) => {

  let Data = [
    {
      name: "pizza",
      img: imagepath.pizza
    },
    {
      name: "burgar",
      img: imagepath.burgar
    },
    {
      name: "snaks",
      img: imagepath.snaks
    },
    {
      name: "burgar",
      img: imagepath.burgar
    },
    {
      name: "pizza",
      img: imagepath.pizza
    },
  ]

  const renderItem = ({ item }) => {
    return (
      <LinearGradient style={styles.flt} colors={['#FF0059', '#F4C210']}>
        <Image
          source={item.img} />
        <Text style={{ color: "white", fontSize: 23, fontWeight: '500' }}>
          {item.name}
        </Text>
      </LinearGradient>
    )

  }





  return (

    <ScrollViewContainer style={{padding:10}}>


      <View style={styles.deliver}>

        <Text style={styles.delivertext}>
          DELIVER TO
        </Text>

      </View>


      <View style={styles.locationview}>

        <Image source={imagepath.location} />

        <Text style={styles.locationtext}>
          Home. Mansorovar jaipur
        </Text>

        <Image style={{ marginLeft: 7 }} source={imagepath.down} />

      </View>


      <View style={styles.sarchview}>



        <View style={styles.sarchview2}>

          <View>
            <Image source={imagepath.sarch} />
          </View>

          <View>
            <TextInput
              style={styles.sarchinput}
              placeholderTextColor={'white'}
              placeholder='Search for food'
            />
          </View>

        </View>

        <TouchableOpacity style={styles.sarchview3}>
          <Image source={imagepath.meanu}
            style={styles.meanuimg} />
        </TouchableOpacity>


      </View>

      {/* ----xxx------xxx-----xx ----xxx------xxx-----xx ----xxx------xxx-----xx */}

      <View style={styles.bannerview}>

        <Image source={imagepath.banner}
          style={{ width: "100%", }}
          resizeMode={'contain'} />

      </View>

      {/* ----xxx------xxx-----xx ----xxx------xxx-----xx ----xxx------xxx-----xx */}


      <View style={styles.Categoriesview}>

        <Text style={styles.Categoriestext}>
          Categories
        </Text>

      </View>

      {/* ----xxx------xxx-----xx ----xxx------xxx-----xx ----xxx------xxx-----xx */}

      <View>
        <FlatList
        showsHorizontalScrollIndicator={false}
          marginBottom={10}
          horizontal
          renderItem={renderItem}
          data={Data}
        />
      </View>

      {/* ----xxx------xxx-----xx ----xxx------xxx-----xx ----xxx------xxx-----xx */}


      <View style={styles.Categoriesview}>
        <Text style={styles.Categoriestext}>
          Popular Dishes
        </Text>
      </View>


      {/* ----xxx------xxx-----xx ----xxx------xxx-----xx ----xxx------xxx-----xx */}

      <View>
        <FlatList
          horizontal
          renderItem={dish}
          data={dishData} />
      </View>


      {/* ----xxx------xxx-----xx ----xxx------xxx-----xx ----xxx------xxx-----xx */}


      <TouchableOpacity onPress={() => navigation.navigate("OrderNow")}>
        <View style={styles.login}>
          <Text style={styles.logintext}>
            Explore More
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollViewContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  deliver: {
    paddingHorizontal: 25
  },
  delivertext: {
    fontSize: 17
  },
  locationview: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  locationtext: {
    fontSize: 20,
    color: "black",
    marginLeft: 8,
    fontWeight: "bold"
  },
  sarchview: {
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "space-between",
    marginTop: 20
  },
  sarchview2: {
    backgroundColor: '#A1A1A1',
    width: "70%",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  sarchview3: {
    backgroundColor: "#FF0059",
    width: "20%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  sarchinput: {
    fontSize: 20,
    textAlign: "center",
    color: "black",
    width: 180,

  },
  meanuimg: {
    tintColor: "#fff"
  },
  bannerview: {
    marginTop: 20,
    alignItems: "center"
  },
  Categoriesview: {

  },
  Categoriestext: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10
  },
  flt: {
    height: 150,
    width: 120,
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30
  },
  imageView: {
    marginRight: 20,
    height: 180,
    width: 310,
    justifyContent: "center",
    alignItems: "center"
  },
  textView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 310,
  },
  tittleText: {
    color: "black",
    fontWeight: 'bold'
  },
  priceView: {
    backgroundColor: '#FF0059',
    height: 40,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  textprice: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  logintext: {
    fontSize: 30,
    color: '#fff'
  },
  login: {
    backgroundColor: "#FF0059",
    width: 330,
    alignItems: "center",
    height: 70,
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center'
  },

})

const dish = ({ item }) => {
  return (
    <View>

      <View style={styles.imageView}>
        <Image source={item.image} />
      </View>

      <View style={styles.textView}>
        <Text style={styles.tittleText}>{item.tittle}</Text>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={item.image2} />
          <Text style={styles.tittleText}>{item.location}</Text>
        </View>
      </View>


      <View style={styles.textView}>

        <View style={styles.foodtypeView}>
          <Text style={{ color: "black" }}>
            {item.foodtype}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image source={item.image3} />
            <Text style={{ color: "black" }}>
              {item.reat}
            </Text>
          </View>
        </View>

        <View style={styles.priceView}>

          <Text style={styles.textprice}>₹{item.price}</Text>
        </View>

      </View>

    </View>
  )
}
const dishData = [
  {
    tittle: "Cheese Pizza ",
    location: "2km",
    foodtype: "olive Food",
    reat: "4.5(940 Ratings)",
    price: 299,
    image: imagepath.bigpizza,
    image2: imagepath.blackloc,
    image3: imagepath.star
  },

  {
    tittle: "Cheese Pizza ",
    location: "2km",
    foodtype: "olive Food",
    reat: "4.5(940 Ratings)",
    price: 299,
    image: imagepath.bigpizza,
    image2: imagepath.blackloc,
    image3: imagepath.star
  },

  {
    tittle: "Cheese Pizza ",
    location: "2km",
    foodtype: "olive Food",
    reat: "4.5(940 Ratings)",
    price: 299,
    image: imagepath.bigpizza,
    image2: imagepath.blackloc,
    image3: imagepath.star
  },

  {
    tittle: "pizza",
    location: "2km",
    foodtype: "olive Food",
    reat: "4.5(940 Ratings)",
    price: 299,
    image: imagepath.bigpizza,
    image2: imagepath.blackloc,
    image3: imagepath.star
  },

  {
    tittle: "pizza",
    location: "2km",
    foodtype: "olive Food",
    reat: "4.5(940 Ratings)",
    price: 299,
    image: imagepath.bigpizza,
    image2: imagepath.blackloc,
    image3: imagepath.star
  },
]

