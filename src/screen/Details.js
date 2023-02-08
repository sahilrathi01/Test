import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({ route }) => {
  const promsData = route?.params?.fata?.item;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>


        <View style={styles.imagecantenar}>
          <Image
            source={{ uri: promsData.image }}
            style={{ width: 300, height: 300, }}
            resizeMode='contain'
          />
        </View>

        <View style={styles.textcantenar}>
          <View style={styles.textView}>

            <Text style={styles.tittle}>
              Title :
            </Text>
            <Text style={styles.textT}>
              {promsData.title}
            </Text>
          </View>

          <View style={styles.textView}>

            <Text style={styles.tittle}>
              Price₹ :
            </Text>
            <Text style={styles.textT}>
              {promsData.price}
            </Text>
          </View>

          <View style={styles.textView}>

            <Text style={styles.tittle}>
              Category:
            </Text>
            <Text style={styles.textT}>
              {promsData.category}
            </Text>
          </View>

          <View style={styles.textView}>

            <Text style={styles.tittle}>
              description:
            </Text>
            <Text style={styles.textT}>
              {promsData.description}
            </Text>
          </View>

        </View>




      </ScrollView>
    </View >
  )
}

export default Details

const styles = StyleSheet.create({
  imagecantenar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
  },
  textcantenar: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    width: "100%",
    paddingVertical: 10
  },
  textT: {
    fontSize: 19,
    color: 'black'
  },
  tittle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "red"
  },
  textView: {
    alignItems: "center",
    // justifyContent:"center",
    // flexDirection:"row",
    marginBottom: 10
  }
})