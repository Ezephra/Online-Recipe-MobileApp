import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY, API_RANDOM_RECIPE } from "@env";
import { Recipes, Recipe } from '../types';
import RecipeList from './RecipeList';

const FeaturedRecipe = () => {
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
    <>
    <RecipeList recipes = {data}/>
    </>
  );

}

export default FeaturedRecipe;