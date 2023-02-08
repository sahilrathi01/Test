import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import ViewContainer from './ViewContainer';
import Colors from '../../constant/Colors';
import { globalStyle } from '../../constant/globalStyle';

const ScrollContainer = ({
    children,
    backgroundColor = Colors.white,
    style = {},
    useSafeArea = false,
    showsVerticalScrollIndicator = false
}) => {
    return (
        <ViewContainer useSafeArea={useSafeArea} backgroundColor={backgroundColor} style={style}>
            <ScrollView
                showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                style={[globalStyle.container(backgroundColor), styles.scroll]}>
                {children}
            </ScrollView>
        </ViewContainer>
    );
};

export default ScrollContainer;

const styles = StyleSheet.create({
    scroll: {},
});