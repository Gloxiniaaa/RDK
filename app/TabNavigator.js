import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Use react-native-vector-icons for icons
import Counter from './Counter';
import CounterWithInput from './CounterWithInput';
import GetValue from './GetValue';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Counter') {
                        iconName = focused ? 'swap-vertical' : 'swap-vertical-outline';
                    } else if (route.name === 'Input') {
                        iconName = focused ? 'create' : 'create-outline';
                    } else if (route.name === 'Get') {
                        iconName = focused ? 'download' : 'download-outline';
                    }

                    // Return the appropriate icon component
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Counter" component={Counter} />
            <Tab.Screen name="Input" component={CounterWithInput} />
            <Tab.Screen name="Get" component={GetValue} />
        </Tab.Navigator>
    );
}
