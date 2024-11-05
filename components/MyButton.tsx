import React from 'react'
import { View , Text, TouchableOpacity, StyleSheet} from 'react-native'

interface ButtonProps {
    title: string,
    action: () => void;
}

const MyButton: React.FC<ButtonProps> = ({title, action}) => {
    return (
        <View>
            {/* TouchableOpacity or Pressable */}
            <TouchableOpacity style={styles.button} onPress={action}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:'blue', 
        padding:20, 
        borderRadius:10,
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
    text: {
        fontSize:18,
        color:"white", 
        fontWeight:"700"
        
    }
});

export default MyButton
