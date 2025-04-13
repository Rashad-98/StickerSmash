import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen  options={{ title: "Oops! Not Found..." }} />
      <View style={styles.container}>
        <Link style={styles.button} href={"/"}>Go back to home screen</Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    color: "#fff",
    textAlign: "center",
    width: 200,
    fontSize: 16,
    fontWeight: "bold",
  },
});
