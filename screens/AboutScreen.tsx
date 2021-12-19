import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const AboutScreen = ({navigation}: any) => {
    return (
      <View style={styles.container}>
        <Text>Made by Elias El Harrak Samadi</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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