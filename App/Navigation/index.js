import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AstroidSearch, Astroid } from '../Screens'

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <React.Fragment>
            <StatusBar backgroundColor="rgba(151, 235, 244, .7)" barStyle="dark-content" />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="AstroidSearch"
                    screenOptions={{
                        cardStyle: { backgroundColor: '#fff' },
                        headerStyle: {
                            backgroundColor: "rgba(151, 235, 244, .7)",
                            elevation: 1,
                        },
                        headerTitleAlign:"center"
                    }}
                >
                    <Stack.Screen name="AstroidSearch" component={AstroidSearch} />
                    <Stack.Screen name="Astroid" component={Astroid} />
                </Stack.Navigator>
            </NavigationContainer>
        </React.Fragment>
    )
}

export default Navigation;