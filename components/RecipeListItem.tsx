import React from "react";
import { StyleSheet, Text, Image, TouchableHighlight, View } from 'react-native';
import { Recipe, RootStackParamList } from '../types';
import { RecipeCard } from "../styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type RecipeItemNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;

interface RecipeListItemProps {
    recipe: Recipe;
}

const RecipeListItem = ({recipe}: RecipeListItemProps) => {
    const navigation = useNavigation<RecipeItemNavigationProp>(); 
    return (
     <TouchableHighlight key={recipe.id} underlayColor="rgba(73,182,77,0.9)" onPress={() => navigation.navigate('Details', { id: recipe.id })}>
         <View style={styles.container}>
            <Image style={styles.photo} source={{uri: recipe.image}}/>
            <Text style={styles.title}>{recipe.title}</Text>
         </View>
     </TouchableHighlight>   
    )
}

const styles = StyleSheet.create({
    container: RecipeCard.container,
    photo: RecipeCard.photo,
    title: RecipeCard.title
})

export default RecipeListItem;