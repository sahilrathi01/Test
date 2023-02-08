import { SafeAreaView, View } from 'react-native';
import React from 'react';
import Container from './Container';
import Colors from '../../constant/Colors'
import { globalStyle } from '../../constant/globalStyle';

const ViewContainer = ({
    children,
    backgroundColor = Colors.white,
    style = {},
    useSafeArea = false
}) => {
    return (
        <Container>
            {
                useSafeArea
                    ? <SafeAreaView style={[globalStyle.container(backgroundColor), style]}>
                        {children}
                    </SafeAreaView>
                    : <View style={[globalStyle.container(backgroundColor), style]}>
                        {children}
                    </View>
            }
        </Container>
    );
};

export default ViewContainer;