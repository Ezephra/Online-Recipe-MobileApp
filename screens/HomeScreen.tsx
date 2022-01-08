import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import FeaturedRecipe from '../components/FeaturedRecipie';

const HomeScreen = ({navigation}: any) => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.mainTitle}>Featured recipes</Text>
          <FeaturedRecipe />
          <FeaturedRecipe />
          <FeaturedRecipe />
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    mainTitle: {
      flex: 1,
      fontSize: 27,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#444444',
      marginTop: 3,
      marginRight: 5,
      marginLeft: 5
    }
  });

  export default HomeScreen;

