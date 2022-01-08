import React, { useEffect, useState } from "react";
import { Button, View, Text, StyleSheet, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const UploadScreen = ({route, navigation} : any) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        setImage(route.params?.picture)
    }, [image]);

    const SaveCollection = async() => {
        const collection = {
            title: title,
            description: description,
            imageUri: image
        }

        const jsonValue = JSON.stringify(collection);
        const storage_key = collection.imageUri.substring(collection.imageUri.length - 40,8);
        await AsyncStorage.setItem( storage_key, jsonValue);
        console.log(collection);
        navigation.navigate("MyCollection")
    }

    return (
        <View style={styles.uploadContainer}>
            {image == undefined ? 
                <View>
                    <Text>Upload to your collection</Text>
                    <Button title="Upload a picture" onPress={() => navigation.navigate("Camera")} />
                </View>
            : 
                <View>
                    <Text>Title</Text>
                    <TextInput 
                        style={styles.infoInput}
                        onChangeText={(inputText) => setTitle(inputText) }
                        value={title}
                        placeholder="(Required)"/>
                    <Text>Description</Text>
                    <TextInput 
                        style={styles.infoInput}
                        onChangeText={(inputText) => setDescription(inputText) }
                        value={description}
                        placeholder="(Optional)"/>
                    <Button title="Upload" onPress={() => title == "" ? alert("Please enter a title for this collection"): SaveCollection()}></Button>
                </View>
            }
            
        </View>
    );
}

const styles = StyleSheet.create({
    uploadContainer: { 
        flex: 1,
        flexDirection: "row", 
        alignItems: "center", 
        backgroundColor: "#EDEDED", 
        borderRadius: 10, 
        width: 280,
        justifyContent: "center",
        margin: 50
    },
  
    infoInput: {
        backgroundColor: "#EDEDED",
        color: "black",
        width: 180,
        height: 50,
    }
  });


export default UploadScreen;