import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Pages/Home";
import FavoriteScreen from "../Pages/Favorite";
import SettinsScreen from "../Pages/Settings";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle:{ 
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                borderRadius: 15,
                height: 90
            }
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center',}}> 
                        <Icon name="home" size={25} color={ focused ? '#e32f45' : '#748c94'}/>
                        <Text>Home</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center',}}> 
                        <Icon name="bookmark" size={25} color={ focused ? '#e32f45' : '#748c94'}/>
                        <Text>Favorites</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Settings" component={SettinsScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center',}}> 
                        <Icon name="cog" size={25} color={ focused ? '#e32f45' : '#748c94'}/>
                        <Text>Settings</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default Tabs;