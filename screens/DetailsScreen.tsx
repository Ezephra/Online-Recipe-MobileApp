import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FeaturedRecipe from '../components/FeaturedRecipie';
import { RecipeInformation } from '../types';
import axios from 'axios';
import { API_KEY, API_RECIPE_INFO } from '@env';

const DetailsScreen = ({route}: any) => {
  const [data, setData] = useState<RecipeInformation>();
  const fullURL = API_RECIPE_INFO+ route.params.id + "/information"+ API_KEY;
  const loadRecipe = async() => {
    try {
      const response = await axios.get<RecipeInformation>(fullURL)
      setData(response.data);
    } catch (error) {
      console.log(error);
    } 
  }
  useEffect(() => {
    loadRecipe();
  }, []);

    return (
      <View style={styles.container}>
        <Text>{data?.title}</Text>
        <Text>Score: {data?.spoonacularScore}/100</Text>
        <Text>Credits: {data?.creditsText}</Text>
        <View>
          <Text>Ingredients used:</Text>
        {
          data?.extendedIngredients.map((ingredient, index) => {
            return(
              <Text key={index}>{ingredient.name}</Text>
            );
          })
        }
        </View>
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

export default DetailsScreen;