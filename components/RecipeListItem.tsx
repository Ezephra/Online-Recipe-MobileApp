import React from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Recipe } from '../types';


interface RecipeListItemProps {
    recipe: Recipe;
}

const RecipeListItem = ({recipe}: RecipeListItemProps, {navigation} : any) => {
    
    return (
     <View key={recipe.id}>
         <Text>{recipe.title}</Text>
         <Image style={styles.image} source={{uri: recipe.image}}/>
         <Button
          title="Read more..."
          onPress={() => navigation.navigate('Details', { id: recipe.id })}
        />
     </View>   
    )
}

const styles = StyleSheet.create({
    image: {
        width: 312,
        height: 150
    }
})

export default RecipeListItem;