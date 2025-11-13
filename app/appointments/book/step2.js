// app/appointments/book/step2.js
import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import colors from "../../../theme/colors";

const SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "02:00 PM",
  "02:30 PM",
];

export default function BookAppointmentStep2() {
  const router = useRouter();
  const { doctorId } = useLocalSearchParams();
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    if (!selected) return;
    router.push({
      pathname: "/appointments/book/step3",
      params: { doctorId, time: selected },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select time</Text>
      <Text style={styles.subtitle}>
        Choose a time slot for doctor #{doctorId || "?"}
      </Text>

      <FlatList
        data={SLOTS}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          const isSelected = selected === item;
          return (
            <TouchableOpacity
              style={[
                styles.slot,
                isSelected && { backgroundColor: colors.primary },
              ]}
              onPress={() => setSelected(item)}
            >
              <Text
                style={[
                  styles.slotText,
                  isSelected && { color: "#FFFFFF" },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{ paddingVertical: 12 }}
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
    marginBottom: 12,
  },
  slot: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 6,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 4,
    backgroundColor: "#FFFFFF",
  },
  slotText: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  nextButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
    marginTop: 8,
  },
  nextText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  disabled: {
    opacity: 0.5,
  },
});
