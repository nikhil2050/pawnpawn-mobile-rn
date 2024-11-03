import MyButton from "@/components/MyButton";
import { Link, useRouter } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {

  const router = useRouter();

  const handleContinue = () => {
    router.navigate("/login")
  }

  return (
    <View style={{ flex:1,}} >
      <Image 
          source={require("@/assets/images/big_sale.png")} 
          style={{width:"100%", height:220}} 
          resizeMode="contain" />
      <MyButton title={"Continue"} onPress={handleContinue} />
    </View>
  );
}
