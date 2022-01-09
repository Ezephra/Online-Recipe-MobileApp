import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const AboutScreen = ({navigation}: any) => {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Groep: Elias El Harrak Samadi (solo)</Text>
        <Text>Componenten gebruikt:</Text>
        <View style={styles.subContainer}>
          <Text style={styles.subText}>React Navigation</Text>
          <Text style={styles.subText}>(Stack-, Tab-, DrawerNavigator)</Text>
          <Text style={styles.subText}>React Hooks</Text>
          <Text style={styles.subText}>(useState, useEffect, useNavigation)</Text>
          <Text style={styles.subText}>ScrollView</Text>
          <Text style={styles.subText}>AsyncStorage</Text>
          <Text style={styles.subText}>Expo Componenten (Camera, ImageLibrary)</Text>
          <Text style={styles.subText}>Axios + Spoontacular API</Text>
        </View>
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
    subContainer: {
      alignItems: 'center',
      margin: 10
    },
    mainText: {
      fontSize: 20,
      fontWeight: "bold",
      justifyContent: "center"
    },
    subText: {
      fontSize: 15,
      color: 'grey'
    }
});

export default AboutScreen;