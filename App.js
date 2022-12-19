import React, {useState} from "react";
import {SafeAreaView,View, FlatList, StyleSheet} from "react-native";
import music_data from './music-data.json';
import SongCard from './SongCard';
import SearchBar from './SearchBar';

function App() {
    const [List, setList] = useState(music_data);

    const renderSong = ({item}) => <SongCard song={item} />

    const renderSep = () => <View style={styles.sep} />
    
    const handleSearch = text => {
        const filteredList = music_data.filter(song => {
            const searcedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();

        return currentTitle.indexOf(searcedText) > -1;
        });
        setList(filteredList);
    };

    return (
        <SafeAreaView>
        <SearchBar onSearch={handleSearch}/>          
            <FlatList
            data={List}
            renderItem={renderSong}
            ItemSeparatorComponent={renderSep}
            />
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
sep: {
    borderWidth: 2,
    borderColor: '#C06C84',

}
})
   