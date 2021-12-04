import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Recipe } from './types';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

interface RecipeListItemProps {
    recipe: Recipe;
}

const RecipeListItem = ({recipe}: RecipeListItemProps) => {
    const { width } = useWindowDimensions();
    const source = {
        html: recipe.summary
    };
    return (
     <View key={recipe.id}>
         <Text>{recipe.title}</Text>
         <Text>{recipe.id}</Text>
         <Text>Cuisine: {recipe.cuisines}</Text>
         <Image style={styles.image} source={{uri: recipe.image}}/>
     </View>   
    )
}

const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 90
    }
})

export default RecipeListItem;