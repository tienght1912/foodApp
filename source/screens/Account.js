import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Account() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account</Text>
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
