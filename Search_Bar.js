import React from 'react';
import { TextInput, View } from "react-native";
import styles from './Search_Bar_style';


const SearchBar = (props) => {


    return (
        <View style={styles.container}>
            <TextInput style={styles.search_color} placeholder='Ara ...'
            onChangeText={props.onSearch} 
            
             />
        </View>
    )
}

export default SearchBar;