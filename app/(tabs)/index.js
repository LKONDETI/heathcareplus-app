// app/(tabs)/index.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import Card from "../../components/Card";
import PrimaryButton from "../../components/PrimaryButton";
import colors from "../../theme/colors";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <Text style={styles.greeting}>Hi, John 👋</Text>
      <Text style={styles.subtitle}>Here’s your health overview today</Text>

      <Card>
        <Text style={styles.cardTitle}>Next appointment</Text>
        <Text style={styles.cardText}>No upcoming appointments</Text>
        <Link href="/appointments/book/step1" asChild>
          <PrimaryButton label="Book an appointment" />
        </Link>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>Quick actions</Text>
        <View style={styles.actionsRow}>
          <Link href="/(tabs)/appointments" style={styles.chip}>
            <Text style={styles.chipText}>View appointments</Text>
          </Link>
          <Link href="/(tabs)/records" style={styles.chip}>
            <Text style={styles.chipText}>Medical records</Text>
          </Link>
          <Link href="/(tabs)/profile" style={styles.chip}>
            <Text style={styles.chipText}>Profile</Text>
          </Link>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  greeting: { fontSize: 26, fontWeight: "700", color: colors.textPrimary },
  subtitle: { fontSize: 15, color: colors.textSecondary, marginBottom: 16 },
  cardTitle: { fontSize: 16, fontWeight: "600", marginBottom: 4, color: colors.textPrimary },
  cardText: { fontSize: 14, color: colors.textSecondary, marginBottom: 12 },
  actionsRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 8,
    marginTop: 8,
  },
  chipText: { fontSize: 13, color: colors.textPrimary },
});
