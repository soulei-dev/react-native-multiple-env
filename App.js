import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Config from "react-native-config";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>{Config.ENV}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
