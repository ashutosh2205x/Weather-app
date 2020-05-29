import React from "react";
import { StyleSheet, Text } from "react-native";

export const InputBox = () => {
  const [UIText, setText] = useState("");
  function setTextFunc(text) {
    return setText(text);
  }
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        placeholder="Enter location"
        style={styles.input}
        onChangeText={setTextFunc}
      />
      <Button title="Search" onPress={consoleFunc} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 20,
  },
  input: {
    backgroundColor: "white",
    width: "80%",
  },
});
