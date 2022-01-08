import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Result, RootStackParamList } from '../types';

type ResultItemNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;


interface ResultItemProps {
    result: Result
}

const ResultItem = ({result}: ResultItemProps) => {
    const navigation = useNavigation<ResultItemNavigationProp>(); 

    return (
     <View key={result.id}>
         <Text>{result.title}</Text>
         <Image style={styles.image} source={{uri: result.image}}/>
         <Button
          title="Read more..."
          onPress={() => navigation.navigate("Details", { id: result.id })}
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

export default ResultItem;