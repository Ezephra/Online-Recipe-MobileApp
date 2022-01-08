import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { RecipeCard } from "../styles";
import { Result, RootStackParamList } from '../types';

type ResultItemNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;


interface ResultItemProps {
    result: Result
}

const ResultItem = ({result}: ResultItemProps) => {
    const navigation = useNavigation<ResultItemNavigationProp>(); 

    return (
        <TouchableHighlight key={result.id} underlayColor="rgba(73,182,77,0.9)" onPress={() => navigation.navigate('Details', { id: result.id })}>
            <View style={styles.container}>
                <Image style={styles.photo} source={{uri: result.image}}/>
                <Text style={styles.title}>{result.title}</Text>
            </View>
        </TouchableHighlight>   
    )
}

const styles = StyleSheet.create({
    container: RecipeCard.container,
    photo: RecipeCard.photo,
    title: RecipeCard.title
})

export default ResultItem;