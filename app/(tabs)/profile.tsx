import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import Animated from 'react-native-reanimated';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import TopBar from '@/components/pawnpawn/TopBar';

export default function HomeScreen() {
  return (
    <View>
      { /* GREETINGS */ }
      <TopBar></TopBar>

    </View>);
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
