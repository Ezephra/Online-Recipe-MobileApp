import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, ScrollView } from 'react-native';
import FeaturedRecipe from '../components/FeaturedRecipie';

const HomeScreen = ({navigation}: any) => {
    return (
      <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text>Featured recipes</Text>
            <FeaturedRecipe />
            <FeaturedRecipe />
            <FeaturedRecipe />
            <FeaturedRecipe />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
            <StatusBar style="auto" />
      </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
        marginHorizontal: 20,
    },
    drawer: {
      paddingLeft: 10,
    },
    homenav: {
      display:"flex",
      justifyContent: "center"
    }
  });

  export default HomeScreen;

