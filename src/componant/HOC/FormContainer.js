import React from 'react';
import {
    Platform,
    KeyboardAvoidingView,
    ScrollView,
    View,
} from 'react-native';
import Colors from '../../constant/Colors';
import { globalStyle } from '../../constant/globalStyle'

const behavior = Platform.OS === 'ios' ? 'padding' : undefined;
const FormContainer = ({
    children,
    backgroundColor = Colors.white,
    style = {},
    refreshControl,
}) => {
    return (
        <View
            style={{
                flex: 1,
                ...globalStyle.container(backgroundColor)
            }}>
            <KeyboardAvoidingView
                style={globalStyle.container(backgroundColor)}
                behavior={behavior}>
                <ScrollView refreshControl={refreshControl}
                style={[globalStyle.container(backgroundColor)]}>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default FormContainer;