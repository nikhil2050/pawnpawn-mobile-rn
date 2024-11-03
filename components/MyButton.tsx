import React from 'react'
import { View , Text, TouchableOpacity, StyleSheet} from 'react-native'

const MyButton = ({title, onPress}) => {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:'orange', 
        padding:20, 
        borderRadius:10,
        alignItems: 'center'
    },
    text: {
        fontSize:16, 
        color:"white", 
        fontWeight:"bold"
    }
});

export default MyButton
