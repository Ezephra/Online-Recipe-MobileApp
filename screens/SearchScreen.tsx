import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import FeaturedRecipe from '../components/FeaturedRecipie';

const SearchScreen = ({navigation}: any) => {
    return (
      <View style={styles.container}>
        <Text>Featured recipe</Text>
        <FeaturedRecipe />
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

export default SearchScreen;