import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import AboutScreen from "./screens/AboutScreen";
import DetailsScreen from './screens/DetailsScreen';
import SearchResult from './screens/SearchResult';
import CameraUsage from './components/CameraUsage';
import CollectionScreen from './screens/CollectionScreen';
import UploadScreen from './screens/UploadScreen';
import { DrawerStackParamList, RootStackParamList, TabStackParamList } from './types';


const Drawer = createDrawerNavigator<DrawerStackParamList>();

const DrawerNav = () => {
  return (
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
          name="MyCollection"
          component={CollectionScreen}
        />
        {/*<Drawer.Screen name="Login" component={LoginStackScreen} /> */}
      </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator<TabStackParamList>();

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
        component={UploadScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={DrawerNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="Camera" component={CameraUsage} />
        <Stack.Screen name="Upload" component={UploadScreen} />
      </Stack.Navigator>
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