import { View , TextInput, Image} from "react-native"
import React, { useEffect, useState } from "react"
import MyButton from "@/components/MyButton"
import { useRouter } from "expo-router"

const Login = () => {

    const [value, setValue] = useState({
        val1: "",
        val2: ""
    });

    // Called when value.val1 is changed
    useEffect( () => {
        console.log("Calling...")
    }, [value?.val1])

    const router = useRouter();

    const handleLogin = () => {
        console.log("In handleLogin()")
        console.log(value?.val1 + value?.val2)
        router.navigate("/signup")
    }

    return (
        <View style={{ flex:1 }} >
            <Image 
                source={require("@/assets/images/big_sale.png")} 
                style={{width:"100%", height:220}} 
                resizeMode="cover" />
            
            <View style={{padding:20, gap:20}}>
                <TextInput 
                        placeholder="Enter your Email" 
                        style={{borderWidth:1, height:50, paddingHorizontal:20, borderRadius:10}}
                        onChangeText={(e) => {
                            setValue(prev => ({...prev, val1:e}))
                            console.log(e)
                        }}
                    />
                <TextInput 
                    placeholder="Enter your Password" 
                    style={{borderWidth:1, height:50, paddingHorizontal:20, borderRadius:10}}
                    onChangeText={(e) => {console.log(e)}}
                    />
                <MyButton title={"Login"} onPress={handleLogin} />
            </View>
        </View>
      )
}

export default Login