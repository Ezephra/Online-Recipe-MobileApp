import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import RecipeListItem from "./RecipeListItem";
import { Recipe } from './types';

interface RecipeListProps {
    recipes: Recipe[]
}

const RecipeList = ({recipes}: RecipeListProps) => {
    return (
        <View>
            {recipes.map((recipe: Recipe, i) => {
                return <RecipeListItem recipe = {recipe}/>
            })}
        </View>
    )
}

export default RecipeList;