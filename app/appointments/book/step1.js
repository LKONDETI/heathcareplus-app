// app/appointments/book/step1.js
import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Card from "../../../components/Card";
import colors from "../../../theme/colors";

import doctors from "../../../data/doctors.json";

export default function BookAppointmentStep1() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    if (!selected) return;
    router.push({
      pathname: "/appointments/book/step2",
      params: { doctorId: selected.id },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose doctor</Text>
      <Text style={styles.subtitle}>Select a doctor for your appointment</Text>

      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isSelected = selected?.id === item.id;
          return (
            <TouchableOpacity onPress={() => setSelected(item)}>
              <Card
                style={[
                  styles.card,
                  isSelected && { borderWidth: 2, borderColor: colors.primary },
                ]}
              >
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.specialty}>{item.specialty}</Text>
                {isSelected && <Text style={styles.selected}>Selected</Text>}
              </Card>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{ paddingBottom: 24 }}
      />

      <TouchableOpacity
        style={[styles.nextButton, !selected && styles.disabled]}
        onPress={handleNext}
        disabled={!selected}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: { fontSize: 22, fontWeight: "700", color: colors.textPrimary },
  subtitle: { fontSize: 14, color: colors.textSecondary, marginBottom: 12 },
  card: { marginVertical: 4 },
  name: { fontSize: 16, fontWeight: "600", color: colors.textPrimary },
  specialty: { fontSize: 14, color: colors.textSecondary },
  selected: { marginTop: 6, fontSize: 12, color: colors.primary, fontWeight: "600" },
  nextButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
    marginTop: 8,
  },
  nextText: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
  disabled: { opacity: 0.5 },
});
