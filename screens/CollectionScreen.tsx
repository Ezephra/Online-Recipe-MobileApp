import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const CollectionScreen = () => {
    const [collection, setCollection] = useState<any>([]);

    const FetchAllItems = async () => {
        try {
            const result: any = [];
            const keys = await AsyncStorage.getAllKeys();
            if (keys === undefined) {
                return <Text>The collection is empty</Text>
            }
            for (let i = 0; i < keys.length; i++) {
                const val = await AsyncStorage.getItem(keys[i]);
                result[i] = val != null ? JSON.parse(val) : null;;
            }
            setCollection(result);
          } catch (error) {
            alert(error);
          }
    }

    useEffect(() => {
        FetchAllItems();
    }, [])

    return (
        <ScrollView>
            {
                collection.map((item: any, index: number) => {
                    return (
                        <View key={index}>
                            <Image source={{uri: item.uri}} style={styles.image}/>
                        </View>
                    );
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 312,
        height: 150
    }
})


export default CollectionScreen;