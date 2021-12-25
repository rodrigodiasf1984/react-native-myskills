import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setmySkills] = useState([]);

  function handleAddNewSkill() {
    setmySkills([...mySkills, newSkill]);
    setNewSkill("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Rodrigo</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button />
      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
      {mySkills.map((skill, idx) => (
        <SkillCard />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
