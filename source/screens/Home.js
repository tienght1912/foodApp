import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput 
} from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gongcha</Text>
            <TouchableOpacity
                style={styles.btnAccount}
                onPress={()=>navigation.navigate('Account')}
            >
                <Text style={styles.titleButton}>Go to Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
        color:"#c0392b",
        fontSize:28, 
        fontWeight:"700",
    }
})
