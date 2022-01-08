import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const AboutScreen = ({navigation}: any) => {
    return (
      <View style={styles.container}>
        <Text>Made by Elias El Harrak Samadi</Text>
        <Text>Componenten gebruikt:</Text>
        <Text>React Navigation (StackNavigator, TabNavigator, DrawerNavigator)</Text>
        <Text>React Hooks (useState, useEffect, useNavigation)</Text>
        <Text>ScrollView</Text>
        <Text>AsyncStorage</Text>
        <Text>Expo Componenten (Camera, ImageLibrary)</Text>
        <Text>Axios + Spoontacular API</Text>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginLeft: 20
    },
    drawer: {
      paddingLeft: 10,
    },
    homenav: {
      display:"flex",
      justifyContent: "center"
    }
});

export default AboutScreen;