import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Result } from '../types';

interface ResultItemProps {
    result: Result;
}

const ResultItem = ({result}: ResultItemProps) => {
    return (
     <View key={result.id}>
         <Text>{result.title}</Text>
         <Image style={styles.image} source={{uri: result.image}}/>
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