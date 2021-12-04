import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { API_KEY, API_RANDOM_RECIPE } from "@env";
import { Recipes, Recipe } from './types';
import RecipeList from './RecipeList';
/*
export const foodAPI = axios.create({
  baseURL: "https://api.spoonacular.com/recipes/",
  timeout: 1000,
  headers:{
    "Content-Type": "Application/json"
  }
});
*/

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Recipe[]>([]);
  const fullURL = API_RANDOM_RECIPE + API_KEY;

  const loadRecipe = async() => {
    try {
      setLoading(true);
      const response = await axios.get<Recipes>(fullURL)
      setData(response.data.recipes);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } 
  }
  useEffect(() => {
    loadRecipe();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Featured recipe</Text>
      <RecipeList recipes = {data}/>
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
});


export default App;