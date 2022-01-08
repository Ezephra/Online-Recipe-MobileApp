import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
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
        <Image style={styles.image} source={{uri: data?.image}}/>
        <Text style={styles.title}>{data?.title}</Text>
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
    alignItems: 'center',
    margin: 10,
    marginTop: 30,
    width: 300,
    height: 160
  },
  title: {
    margin: 10,
    marginBottom: 5,
    color: 'black',
    fontSize: 13,
    textAlign: 'center'
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 5
  }
});

export default DetailsScreen;