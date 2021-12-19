import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const SearchScreen = ({navigation}: any) => {
    const [searchText, setSearchText] = useState("");

    return (
      <View style={styles.container}>
        <Text>Search</Text>
        <TextInput
        style={styles.input}
        onChangeText={(inputText) => setSearchText(inputText) }
        value={searchText}
        placeholder="Search"
      />
        <Button
          title="Search"
          onPress={() => navigation.navigate('SearchResult', { parmKey: searchText })}
        />
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    drawer: {
      paddingLeft: 10,
    },
    homenav: {
      display:"flex",
      justifyContent: "center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default SearchScreen;