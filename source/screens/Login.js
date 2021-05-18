import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native'

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <TouchableOpacity 
                style={styles.btnLogin}
                onPress={()=> navigation.navigate('Home')}>
                    <Text style={styles.titleButton}>Login</Text>
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
        fontSize:36,
        fontWeight:"700",
        color:"#900",
    },
    btnLogin:{
        backgroundColor:"#e74c3c",
        height:45,
        width:120,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center"
    },
    titleButton:{
        color:"#fff",
        fontSize:18,
        fontWeight:"700"
    }
})
