import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchScreen = ({navigation}: any) => {
    const [searchText, setSearchText] = useState("");

    return (
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="black" />
        <TextInput
        style={styles.searchInput}
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
  searchContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#EDEDED", 
    borderRadius: 10, 
    width: 280,
    justifyContent: "center",
    margin: 50
  },

  searchInput: {
    backgroundColor: "#EDEDED",
    color: "black",
    width: 180,
    height: 50,
  }
});

export default SearchScreen;