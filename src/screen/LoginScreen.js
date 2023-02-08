import { Alert, Button, Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../componant/Input'
import { colorpath, imagepath } from '../assest/Index'
import Buttonn from '../componant/Buttonn'
import { useIsFocused } from '@react-navigation/native'
import FormContainer from '../componant/HOC/FormContainer'
import { validators, isValidForm } from "../constant/validation"


const LoginScreen = ({ navigation }) => {

  const [show, setshow] = useState(imagepath.onlockk);
  const [hide, sethide] = useState(false);
  const [refreshing, setrefreshing] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorr, setErrorr] = useState({});

  const showhide = () => {
    let change = show == imagepath.lockk ? imagepath.onlockk : imagepath.lockk
    setshow(change)
    if (hide == false) {
      sethide(true)
    }
    else {
      sethide(false)
    }
  }

  useEffect(() => {

    setrefreshing(true);
    setTimeout(() => {
      setrefreshing(false);
    }, 1000);
  }, [useIsFocused()])

  const onRefresh = React.useCallback(() => {
    setrefreshing(true)

    setTimeout(() => {
      setrefreshing(false)
      setErrorr('')
    }, 1000);

  }, [])

  const validate = () => {

    const Form = {
      Name: validators.checkRequire("Name", name),
      Pass: validators.checkPassword("Password", password)
    }
    setErrorr(Form)
    if (isValidForm(Form)) {
      navigation.navigate("TabNavigation")
    }



  }
  return (
    <FormContainer
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => onRefresh()} />
      }>


      <View style={styles.cantenar1}>
        <Image source={imagepath.meggi} />
      </View>


      <View style={styles.cantenar2}>

        <View style={styles.cantenar3}>

          <Text style={styles.logintext}>
            Login
          </Text>

          <Input
            autoCapitalize={false}
            autoCorrect={false}
            onchange={setName}
            placeholderTextColor={'#4A4747'}
            placeholder={'UserName'} />

          <Text style={{ color: "red" }}>{errorr.Name}</Text>

          <View>
            <Input
              autoCapitalize={false}
              autoCorrect={false}
              onchange={setPassword}
              secureTextEntry={hide}
              placeholderTextColor={'#4A4747'}
              placeholder={'Password'} />

            <TouchableOpacity style={styles.lockview} onPress={() => showhide()}>
              <Image style={styles.lockk}
                source={show} />
            </TouchableOpacity>
          </View>

          <Text style={{ color: "red" }}>{errorr.Pass}</Text>
          <View>
            <View style={styles.line} />
            <View style={styles.or}>
              <Text style={{ color: 'white' }}>
                Or
              </Text>
            </View>
          </View>

          <View style={styles.icon}>

            <TouchableOpacity>
              <Image source={imagepath.google} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image source={imagepath.Facebook} />
            </TouchableOpacity>
          </View>
          <Buttonn onPress={() => validate()}
            title={"Login"}
            buttonstyle={{ marginTop: 20 }}
          />

          <TouchableOpacity onPress={() => navigation.navigate('SingUpScreen')} >
            <Text style={styles.donot}>
              Dont’t have an account ? Register
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </FormContainer>

  )
}


export default LoginScreen


const styles = StyleSheet.create({
  cantenar1: {
    height: 400,
    backgroundColor: colorpath.mostuse,
    width: "100%",
    alignItems: 'center',
  },
  cantenar2: {
    height: 450,
    width: "100%",
    alignItems: "center",
    backgroundColor: 'white'

  },
  meggiimage: {

  },
  cantenar3: {
    width: "90%",
    height: 500,
    position: "absolute",
    top: -100,
    backgroundColor: colorpath.white,
    elevation: 5,
    paddingHorizontal: 15

  },
  logintext: {
    color: "#000",
    fontSize: 30,
    fontWeight: '400',
    letterSpacing: 2,
    marginVertical: 5
  },
  lockview: {
    position: 'absolute',
    top: 0,
    right: 13,
    backgroundColor: "pink",
    height: 40,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lockk: {
    height: 20,
    width: 20,
    tintColor: colorpath.black

  },
  forgot: {
    alignSelf: "flex-end",
    color: '#4A4747'
  },
  line: {
    borderBottomWidth: 1,
    height: 70,
    position: 'relative',
    borderBottomColor: 'gray'
  },
  or: {
    alignSelf: "center",
    backgroundColor: 'gray',
    borderRadius: 50,
    width: 30,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    bottom: -10
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
    marginTop: 20,
    width: 100,
    alignSelf: "center"
  },
  donot: {
    textAlign: "center",
    marginTop: 20,
    color: 'black',
    borderBottomWidth: .5,
    alignSelf: 'center'

  }

})