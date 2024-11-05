import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

// Prevent SplashScreen from Autohiding before assets loading is complete
SplashScreen.preventAutoHideAsync()

export default function Layout() {

  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
  })

  useEffect( () => {
    if(loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if(!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme==='dark'?DarkTheme:DefaultTheme}>
      <Stack screenOptions={{headerShown:false}} >
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
