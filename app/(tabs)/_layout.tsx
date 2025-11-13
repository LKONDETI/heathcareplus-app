// app/_layout.js
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import colors from "../../theme/colors";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* You don't actually have to list screens here;
            expo-router will auto-register all the files in app/.
            These are just examples if you want explicit options. */}
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="home" />
        <Stack.Screen name="appointments/index" />
        <Stack.Screen name="appointments/[id]" />
        <Stack.Screen name="appointments/book/step1" />
        <Stack.Screen name="appointments/book/step2" />
        <Stack.Screen name="appointments/book/step3" />
        <Stack.Screen name="records/index" />
        <Stack.Screen name="records/form" />
        <Stack.Screen name="profile" />
      </Stack>
    </View>
  );
}
