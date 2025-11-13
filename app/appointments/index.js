// app/appointments/index.js
import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Card from "../../components/Card";
import PrimaryButton from "../../components/PrimaryButton";
import colors from "../../theme/colors";

const MOCK_APPOINTMENTS = [
  {
    id: "1",
    doctor: "Dr. Smith",
    specialty: "Cardiologist",
    date: "2025-11-20",
    time: "10:30 AM",
    status: "Upcoming",
  },
  {
    id: "2",
    doctor: "Dr. Johnson",
    specialty: "Dermatologist",
    date: "2025-10-01",
    time: "02:00 PM",
    status: "Completed",
  },
];

export default function AppointmentsListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Appointments</Text>
        <Link href="/appointments/book/step1" asChild>
          <PrimaryButton label="Book" style={{ paddingHorizontal: 20, paddingVertical: 10 }} />
        </Link>
      </View>

      <FlatList
        data={MOCK_APPOINTMENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/appointments/${item.id}`} asChild>
            <TouchableOpacity>
              <Card>
                <Text style={styles.doctor}>{item.doctor}</Text>
                <Text style={styles.specialty}>{item.specialty}</Text>
                <Text style={styles.meta}>
                  {item.date} · {item.time}
                </Text>
                <Text style={[styles.status, item.status !== "Upcoming" && styles.statusSecondary]}>
                  {item.status}
                </Text>
              </Card>
            </TouchableOpacity>
          </Link>
        )}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  doctor: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  specialty: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  meta: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  status: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
    color: colors.primary,
  },
  statusSecondary: {
    color: colors.textSecondary,
  },
});
