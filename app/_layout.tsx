import { Stack } from "expo-router";

export default function LayOut() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
    </Stack>
  );
}
