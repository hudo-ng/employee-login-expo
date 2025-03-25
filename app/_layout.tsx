import { createContext, useContext, useState } from "react";
import { Stack } from "expo-router";

type AuthContextType = {
  userToken: string | null;
  setUserToken: (token: string | null) => void;
};
export const AuthContext = createContext<AuthContextType>({
  userToken: null,
  setUserToken: () => {},
});

export default function LayOut() {
  const [userToken, setUserToken] = useState<string | null>(null);
  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Home" }}
        />
      </Stack>
    </AuthContext.Provider>
  );
}
