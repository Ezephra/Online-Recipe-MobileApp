import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import AboutScreen from "./screens/AboutScreen";
//import ContactScreen from "./screens/contact";

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Upload"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

// const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Overview"
          component={HomeTabs}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
        />
        <Drawer.Screen
          name="My Collection"
          component={AboutScreen}
        />
        {/*<Drawer.Screen name="Login" component={LoginStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  drawer: {
    paddingLeft: 10,
  },
  homenav: {
    display:"flex",
    justifyContent: "center"
  }
});


export default App;