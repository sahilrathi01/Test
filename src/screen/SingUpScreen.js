import { Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Input from '../componant/Input'
import Buttonn from '../componant/Buttonn'
import FormContainer from '../componant/HOC/FormContainer'

const SingUpScreen = ({ navigation }) => {

  const [number, setNumber] = useState('')
  const [pass, setPass] = useState('')
  const [coPass, setCoPass] = useState('')
  const [numVealu, setNumVealu] = useState('')
  const [passVealu, setPassVealu] = useState('')
  const [coPassVealu, setCoPassVealu] = useState('')
  const [errorr, setErrorr] = useState('')
  const [errorr2, setErrorr2] = useState('')
  const [errorr3, setErrorr3] = useState('')
  const [numBorderr, setNumBorderr] = useState(0)
  const [passBorderr, setPassBorderr] = useState(0)
  const [copassBorderr, setCopassBorderr] = useState(0)
  const [refreshingg, setrefreshingg] = useState(false);

  const onRefresh = React.useCallback(() => {
    setrefreshingg(true)

    setTimeout(() => {
      setrefreshingg(false)
      eraseerror()
    }, 1000);

  }, [])

  const eraseerror = () => {
    setErrorr('')
    setErrorr2('')
    setErrorr3('')
    setNumBorderr(0)
    setPassBorderr(0)
    setCopassBorderr(0)
  }
  const chakepass = () => {
    if (number == numVealu) {
      setErrorr("please Enter Velid Number")
      setNumBorderr(1)
    }

    if (number != numVealu) {
      setErrorr("")
      setNumBorderr(0)

    }

    if (pass == passVealu) {
      setErrorr2("please Enter Velid password")
      setPassBorderr(1)

    }
    if (pass != passVealu) {
      setErrorr2("")
      setPassBorderr(0)
    }
    if (passVealu != coPassVealu) {
      setErrorr3("Password Donot Matched")
      setCopassBorderr(1)
    }
    if (passVealu == coPassVealu) {
      setErrorr3(""),
        setCopassBorderr(0)

    }
    if (number != numVealu && pass != passVealu && passVealu == coPassVealu) {
      navigation.navigate('OtpScreen', { data: { numVealu } })
    }
  }



  return (
    <FormContainer
      refreshControl={
        <RefreshControl refreshing={refreshingg} onRefresh={() => onRefresh()} />
      }>
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshingg} onRefresh={() => refreshing()}
            />}>
          <LinearGradient colors={['#FF0059', '#fff']} style={{ padding: 10, width: "100%", height: 700 }}  >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../assest/image/backErrow.png')}
                style={{ tintColor: "white", }} />
            </TouchableOpacity>
            <View style={styles.View1}>
              <Image style={{ height: 300, resizeMode: 'contain' }} source={require('../assest/image/scuty.png')}
              />
            </View>

            <View style={styles.View2}>

              <Text style={styles.login1}>
                Sign Up ):
              </Text>

              <Input viewstyle={{ borderWidth: numBorderr, borderColor: 'red', marginTop: 10 }} placeholder={"Mobail Number..."} keyboardType={'number-pad'} secureTextEntry={false} onchange={(e) => setNumVealu(e)} />
              <Text style={{ color: "red", fontSize: 10 }}>{errorr}</Text>
              <Input placeholder={"Password..."} viewstyle={{ borderWidth: passBorderr, borderColor: 'red' }} secureTextEntry={true} onchange={(e) => setPassVealu(e)} />
              <Text style={{ color: "red", fontSize: 10 }}>{errorr2}</Text>
              <Input placeholder={"Canform Password..."} viewstyle={{ borderWidth: copassBorderr, borderColor: 'red' }} secureTextEntry={true} onchange={(e) => setCoPassVealu(e)} />
              <Text style={{ color: "red", fontSize: 10 }}>{errorr3}</Text>



              <Buttonn buttonstyle={{ width: "100%", marginTop: 10 }} title={"Send Otp"} onPress={() => chakepass()} />

              <TouchableOpacity>
                <Text style={{ textAlign: "center", marginTop: 10, color: 'black', textDecorationLine: 'underline' }}>
                  Do you have an account ?
                  <Text
                    style={{ color: "blue" }}>
                    Login
                  </Text>
                </Text>
              </TouchableOpacity>

            </View>

          </LinearGradient >
        </ScrollView>
      </SafeAreaView>
    </FormContainer>
  )
}

export default SingUpScreen;

const styles = StyleSheet.create({
  View1: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  View2: {
    height: 400,
    width: 350,
    backgroundColor: 'white',
    padding: 20,
    elevation: 10,
    borderRadius: 2,
    marginTop: 0,
    alignSelf: "center",
    display: "flex",

  },
  login1: {
    fontSize: 30,
    color: 'black'
  },
  input1: {
    borderRadius: 8,
    backgroundColor: 'pink',
    marginTop: 20,
    padding: 5,
    fontSize: 15,
    color: 'black'
  },
  forgot: {
    alignSelf: "flex-end",
    top: 10,
    color: 'black'
  },
  or: {
    alignSelf: "center",
    backgroundColor: "gray",
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    marginTop: 30
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
  google: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 20,
  },
  logintext: {
    fontSize: 30,
    color: '#fff'
  }
})