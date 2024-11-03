import MyButton from "@/components/MyButton"
import { useRouter } from "expo-router"
import React from "react"
import { Image, TextInput, View} from "react-native"

const SignUp = () => {

    const router = useRouter()

    const handleSignUp =() => {
        router.navigate("/login") 
    }

    return (
        <View style={{ flex:1 }} >
            <Image 
                source={require("@/assets/images/big_sale.png")} 
                style={{width:"100%", height:220}} 
                resizeMode="cover" />
            
            <View style={{padding:20, gap:20}}>
            <TextInput 
                        placeholder="Enter your Name" 
                        style={{borderWidth:1, height:50, paddingHorizontal:20, borderRadius:10}}
                        onChangeText={(e) => {console.log(e)}}
                    />
                <TextInput 
                        placeholder="Enter your Email" 
                        style={{borderWidth:1, height:50, paddingHorizontal:20, borderRadius:10}}
                        onChangeText={(e) => {console.log(e)}}
                    />
                <TextInput 
                    placeholder="Enter your Password" 
                    style={{borderWidth:1, height:50, paddingHorizontal:20, borderRadius:10}}
                    onChangeText={(e) => {console.log(e)}}
                    />
                <TextInput 
                    placeholder="Re-enter your Password" 
                    style={{borderWidth:1, height:50, paddingHorizontal:20, borderRadius:10}}
                    onChangeText={(e) => {console.log(e)}}
                    />
                <MyButton title={"Login"} onPress={handleSignUp} />
            </View>
        </View>
    )
}

export default SignUp