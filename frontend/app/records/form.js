// app/records/form.js
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import TextField from "../../components/TextField";
import PrimaryButton from "../../components/PrimaryButton";
import colors from "../../theme/colors";
import { API_BASE_URL, createCondition, updateCondition } from "../../api";

export default function ConditionFormScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // id will be string or undefined

  const isEdit = !!id;

  const [name, setName] = useState("");
  const [since, setSince] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  // Load existing condition if editing
  useEffect(() => {
    if (!isEdit) return;

    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/api/conditions/${id}`);
        if (!res.ok) throw new Error("Failed to load condition");
        const data = await res.json();
        setName(data.name || "");
        setSince(data.since || "");
        setNotes(data.notes || "");
      } catch (err) {
        console.error(err);
        Alert.alert("Error", "Failed to load condition");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id, isEdit]);

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert("Validation", "Condition name is required");
      return;
    }

    const conditionPayload = {
      name,
      since,
      notes,
      userId: "demo-user",
    };

    try {
      setLoading(true);
      if (isEdit) {
        await updateCondition(Number(id), conditionPayload);
      } else {
        await createCondition(conditionPayload);
      }
      router.back(); // go back to list
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Failed to save condition");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isEdit ? "Edit condition" : "Add condition"}</Text>
      <Text style={styles.subtitle}>
        {isEdit
          ? "Update the details of this medical condition."
          : "Record a chronic or important medical condition."}
      </Text>

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

      <PrimaryButton
        label={loading ? "Saving..." : isEdit ? "Save changes" : "Save condition"}
        onPress={handleSave}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: { fontSize: 22, fontWeight: "700", color: colors.textPrimary },
  subtitle: { fontSize: 14, color: colors.textSecondary, marginBottom: 16 },
});
