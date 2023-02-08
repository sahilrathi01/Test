import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { imagepath } from '../assest/Index';
import Cart from '../screen/Cart';
import HomeScreen from '../screen/HomeScreen';
import Mapp from '../screen/Mapp';
import MyAcount from '../screen/MyAcount';
import OrderNow from '../screen/OrderNow';
import ProfileScreen from '../screen/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{ tabBarActiveTintColor: '#e91e63', headerShown: false, }}
        >

            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (<Image source={imagepath.ghar} style={{ height: 45, width: 40 }} resizeMode={"cover"} />)
                }}
            />

            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarBadge: 3,
                    tabBarIcon: () => (<Image source={imagepath.Instamart} />)
                }}
            />


            <Tab.Screen
                name="Mapp"
                component={Mapp}
                options={{
                    tabBarLabel: 'Some Other Screen',
                    tabBarIcon: () => (<Image source={imagepath.Genie} />)
                }}
            />

            <Tab.Screen
                name="MyAcount"
                component={MyAcount}
                options={{
                    tabBarLabel: 'Profil',
                    tabBarIcon: () => (<Image source={imagepath.blackprofile} style={{ height: 30, width: 30 }} resizeMode={"cover"} />)
                }}
            />

        </Tab.Navigator>
    );
}
export default TabNavigation;