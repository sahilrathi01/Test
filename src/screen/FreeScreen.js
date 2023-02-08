import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
const App = ({navigation}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [name, setname] = useState("");
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [pincode, setpincode] = useState("")
    const [address, setaddress] = useState("")
    const [error, seterror] = useState({
        Name: "",
        Email: "",
        Password: "",
        Pincode: "",
        Address: ""
    })
    const Submit = () => {
        seterror(
            {
                Name: name ? "" : "Invalid Name",
                Email: email ? "" : "Invalid Email",
                Password: password ? "" : "Invalid Password",
                Pincode: pincode ? "" : "Invalid Pincode",
                Address: address ? "" : "Invalid address"
            }
        )
    }
    return (
        <View>
            <Button title='go to app 'onPress={()=>navigation.navigate("GetStart")} />
            <TextInput placeholder='Enter the name' onChangeText={setname} />
            {error.Name && <Text style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>{error.Name}</Text>}
            <TextInput placeholder='Enter the email' onChangeText={setemail} />
            {error.Email && <Text style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>{error.Email}</Text>}

            <TextInput placeholder='Enter the password' onChangeText={setpassword} />
            {error.Password && <Text style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>{error.Password}</Text>}

            <TextInput placeholder='Enter the pincode' onChangeText={setpincode} />
            {error.Pincode && <Text style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>{error.Pincode}</Text>}

            <TextInput placeholder='Enter the address' onChangeText={setaddress} />
            {error.Address && <Text style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>{error.Address}</Text>}

            <Button title='SUBMIT' onPress={() => Submit()} />
            <Text style={{ color: "red", fontSize:18 }}>{name}</Text>
            <Text style={{ color: "red", fontSize:18 }}>{email}</Text>
            <Text style={{ color: "red", fontSize:18 }}>{password}</Text>
            <Text style={{ color: "red", fontSize:18 }}>{pincode}</Text>
            <Text style={{ color: "red", fontSize:18 }}>{address}</Text>

            <Button title='go to Flatlit 'onPress={()=>navigation.navigate("Flatlit")} />

        </View>
    )
}

export default App

const styles = StyleSheet.create({})