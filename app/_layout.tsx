import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, headerLeft: () => <></> }}
      />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
    </Stack>
  );
}
