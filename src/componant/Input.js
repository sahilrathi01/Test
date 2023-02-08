import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = (
    {
        viewstyle,
        onchange,
        inputstyle,
        placeholderTextColor,
        placeholder,
        secureTextEntry,
        keyboardType,
        autoCapitalize,
        autoCorrect,
        maxLength
    }
) => {

    return (

        <View
            style={[
                {

                    width: '100%',
                    alignSelf: "center",
                    height: 40,
                    paddingHorizontal: 10,
                    backgroundColor: "pink",
                    borderRadius: 8,

                },
                {
                    ...viewstyle

                }

            ]}>

            <TextInput
                maxLength={maxLength}
                autoCorrect={autoCorrect}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onchange}
                style={[
                    {
                        color: 'black',
                        fontSize: 15
                    },
                    {
                        ...inputstyle
                    }
                ]} />
        </View>
    )
}

export default Input