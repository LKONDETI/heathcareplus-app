// app/appointments/book/step3.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import PrimaryButton from "../../../components/PrimaryButton";
import colors from "../../../theme/colors";

export default function BookAppointmentStep3() {
  const router = useRouter();
  const { doctorId, time } = useLocalSearchParams();

  const handleConfirm = () => {
    // TODO: save appointment
    router.replace("/appointments");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm appointment</Text>
      <Text style={styles.subtitle}>Check the details before confirming</Text>

      <View style={styles.summaryCard}>
        <Text style={styles.label}>Doctor</Text>
        <Text style={styles.value}>Doctor ID: {doctorId || "-"}</Text>

        <Text style={styles.label}>Time</Text>
        <Text style={styles.value}>{time || "-"}</Text>

        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>City Health Clinic</Text>
      </View>

      <PrimaryButton label="Confirm appointment" onPress={handleConfirm} />
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
  summaryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSecondary,
    marginTop: 8,
  },
  value: {
    fontSize: 14,
    color: colors.textPrimary,
  },
});
