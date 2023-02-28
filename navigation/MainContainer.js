import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import EmergencyScreen from './screens/EmergencyScreen';

const homeName = 'Home';
const mapName = 'Map';
const profileName = 'Profile';
const emergency = 'Emergency';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === mapName) {
                            iconName = focused ? 'map' : 'map-outline';
                        } else if (rn === profileName) {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (rn === emergency) {
                            iconName = 'car-emergency'
                        }
                        return rn !== emergency ? <Ionicons name={iconName} size={size} color={color}/> : <MaterialCommunityIcons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: { paddingBottom: 5, fontSize: 10},
                    tabBarStyle: {padding: 10, height: "10%"},
                    headerShown: false,
                })}
            >
                <Tab.Screen
                    name={homeName}
                    component={HomeScreen}/>
                <Tab.Screen
                    name={mapName}
                    component={MapScreen}/>
                <Tab.Screen
                    name={profileName}
                    component={ProfileScreen}/>
                <Tab.Screen
                    name={emergency}
                    component={EmergencyScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
