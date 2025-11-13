// app/appointments/[id].js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Card from "../../components/Card";
import PrimaryButton from "../../components/PrimaryButton";
import colors from "../../theme/colors";

export default function AppointmentDetailsScreen() {
  const { id } = useLocalSearchParams();

  // TODO: fetch real data by id
  const appointment = {
    id,
    doctor: "Dr. Smith",
    specialty: "Cardiologist",
    date: "2025-11-20",
    time: "10:30 AM",
    location: "City Health Clinic, Room 203",
    notes: "Please arrive 10 minutes early and bring previous ECG reports.",
    status: "Upcoming",
  };

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.title}>Appointment details</Text>

        <Text style={styles.label}>Doctor</Text>
        <Text style={styles.value}>
          {appointment.doctor} · {appointment.specialty}
        </Text>

        <Text style={styles.label}>Date & time</Text>
        <Text style={styles.value}>
          {appointment.date} · {appointment.time}
        </Text>

        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>{appointment.location}</Text>

        <Text style={styles.label}>Notes</Text>
        <Text style={styles.value}>{appointment.notes}</Text>

        <Text style={styles.status}>{appointment.status}</Text>

        <PrimaryButton label="Cancel appointment" style={{ marginTop: 16 }} />
      </Card>
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
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: colors.textPrimary,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    marginTop: 8,
    color: colors.textSecondary,
  },
  value: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  status: {
    marginTop: 12,
    fontSize: 13,
    fontWeight: "600",
    color: colors.primary,
  },
});
