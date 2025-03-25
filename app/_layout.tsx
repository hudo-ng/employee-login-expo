import { Stack } from "expo-router";
import { AuthContextProvider } from "../utils/authContext";

export default function LayOut() {
  return (
    <AuthContextProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Home" }}
        />
      </Stack>
    </AuthContextProvider>
  );
}
