import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
export function Button() {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      //onPress={handleAddNewSkill}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
