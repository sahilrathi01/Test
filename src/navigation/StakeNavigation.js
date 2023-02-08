import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStart from '../screen/GetStart';
import LoginScreen from '../screen/LoginScreen';
import SingUpScreen from '../screen/SingUpScreen';
import OtpScreen from '../screen/OtpScreen';
import ProfileScreen from '../screen/ProfileScreen';
import FreeScreen from '../screen/FreeScreen';
import HomeScreen from '../screen/HomeScreen';
import Flatlit from '../screen/Flatlit';
import ProFlatlist from '../screen/ProFlatlist';
import Details from '../screen/Details';
import OrderNow from '../screen/OrderNow';
import TabNavigation from './TabNavigation';
import Cart from '../screen/Cart';
import MyAcount from '../screen/MyAcount';
import Favourites from '../screen/Favourites';
import Mapp from '../screen/Mapp';
import Product from '../screen/Product';
import SeeAlll from '../screen/SeeAlll';
import ProductDetails from '../screen/ProductDetails';

const Stack = createNativeStackNavigator();

const StakeNavigation = () => {
  return ( 
    <NavigationContainer >
      <Stack.Navigator  initialRouteName='GetStart'>
        <Stack.Screen name="OrderNow" component={OrderNow} options={{headerShown:false}}/>
        <Stack.Screen name="GetStart" component={GetStart} options={{headerShown:false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SingUpScreen" component={SingUpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="OtpScreen" component={OtpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}}/>
        <Stack.Screen name="FreeScreen" component={FreeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Flatlit" component={Flatlit} options={{headerShown:false}}/>
        <Stack.Screen name="ProFlatlist" component={ProFlatlist} options={{headerShown:false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{headerShown:false}}/>
        <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
        <Stack.Screen name="MyAcount" component={MyAcount} options={{headerShown:false}}/>
        <Stack.Screen name="Favourites" component={Favourites} options={{headerShown:false}}/>
        <Stack.Screen name="mapp" component={Mapp} options={{headerShown:false}}/>
        <Stack.Screen name="Product" component={Product} options={{headerShown:false}}/>
        <Stack.Screen name="SeeAll" component={SeeAlll} options={{headerShown:false}}/>
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StakeNavigation