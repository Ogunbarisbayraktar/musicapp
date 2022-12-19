import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#F8B195',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 5,
    },
    inner_container: {
        backgroundColor: '#F67280',
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        borderRadius: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#6C5B7B'
       
    },
    info_container: {
        flexDirection: 'row',
        marginTop: 8,
        flex: 1,
    },
    artist: {
        color: '#355C7D',
    },
    year: {
        marginLeft: 10,
        fontWeight: 'bold',
    },
    stok_cont: {
        flexDirection: 'row',
    },
    stok_text: {
        borderColor: 'red',
    },

    stok_container:{
        borderWidth: 1,
        borderColor: 'red',
        padding: 3,
        borderRadius: 5,
    },
});