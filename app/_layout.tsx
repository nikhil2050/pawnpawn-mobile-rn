import React from "react"
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown:false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="login" />
      </Stack>
      <StatusBar backgroundColor="white" style="dark" />
    </>
  );
}

export default RootLayout