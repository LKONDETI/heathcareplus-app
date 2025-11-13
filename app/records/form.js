// app/records/form.js
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import TextField from "../../components/TextField";
import PrimaryButton from "../../components/PrimaryButton";
import colors from "../../theme/colors";

export default function ConditionFormScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [since, setSince] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    // TODO: save to backend
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add condition</Text>
      <Text style={styles.subtitle}>Record a chronic or important medical condition</Text>

      <TextField
        label="Condition name"
        placeholder="Hypertension"
        value={name}
        onChangeText={setName}
      />
      <TextField
        label="Since (year)"
        placeholder="2023"
        keyboardType="numeric"
        value={since}
        onChangeText={setSince}
      />
      <TextField
        label="Notes"
        placeholder="Medication, triggers, history..."
        multiline
        numberOfLines={4}
        value={notes}
        onChangeText={setNotes}
      />

      <PrimaryButton label="Save condition" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 16,
  },
});
