import React, { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from "react-native";

const CollectionScreen = () => {
    

    const FetchAllItems = async () => {
        try {
            const result: any = {};
            const keys = await AsyncStorage.getAllKeys();
            if (keys === undefined) {
                return <Text>The collection is empty</Text>
            }
            for (let i = 0; i < keys.length; i++) {
                const val = await AsyncStorage.getItem(keys[i]);

                result[i] = val != null ? JSON.parse(val) : null;;
            }
            console.log(result);
          } catch (error) {
            alert(error);
          }
    }

    useEffect(() => {
        FetchAllItems();
    })

    return (
        <View>
            
        </View>
    );
}


export default CollectionScreen;