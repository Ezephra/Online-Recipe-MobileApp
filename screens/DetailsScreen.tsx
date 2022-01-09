import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
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
        <Text>Spoontacular Score:  
          <Text style={styles.score}> {data?.spoonacularScore}/100</Text>
        </Text>
        <Text>Credits: 
          <Text style={styles.credits}>{data?.creditsText}</Text>
        </Text>
        <Text>Ingredients used:</Text>
        <View style={styles.ingredientContainer}>
        {
          data?.extendedIngredients.map((ingredient, index) => {
            let ingredientImg = "https://spoonacular.com/cdn/ingredients_100x100/" +  ingredient.image;
            return(
              <View key={index} style={styles.ingredientWrap}>
                <Text style={styles.ingredientName}>{ingredient.name}</Text>
                <Image style={styles.ingredientImage} source={{uri: ingredientImg}}/>
              </View>
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
    margin: 10,
    marginTop: 30,
    width: Dimensions.get("window").width - 10,
    height: 160
  },
  title: {
    margin: 10,
    marginBottom: 5,
    color: 'black',
    fontSize: 16,
    textAlign: 'center'
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 5,
    alignSelf: "center"
  },
  score: {
    fontWeight: "bold"
  },
  credits: {
    fontSize: 14,
    alignItems: "center"
  },
  ingredientContainer: {
    flex: 1,
    flexWrap: "wrap",
    alignContent: "space-around"
  },
  ingredientWrap: {
    
  },
  ingredientImage: {
    height: 50,
    width: 50
  },
  ingredientName: {
    fontSize: 12,
    color: "grey"
  }
});

export default DetailsScreen;