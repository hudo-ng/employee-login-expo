import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthContext } from "../utils/authContext";
import { Redirect } from "expo-router";

export default function Index() {
  const { userToken, loading } = useContext(AuthContext);

  if (!userToken) {
    return <Redirect href="/login" />;
  }

  return (
    <View style={styles.container}>
      <Text> Home page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
