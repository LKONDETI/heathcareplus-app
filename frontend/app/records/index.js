// app/records/index.js
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Link } from "expo-router";
import Card from "../../components/Card";
import PrimaryButton from "../../components/PrimaryButton";
import colors from "../../theme/colors";

import conditions from "../../data/conditions.json";

export default function ConditionsListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Medical conditions</Text>
        <Link href="/records/form" asChild>
          <PrimaryButton label="Add" style={{ paddingHorizontal: 20, paddingVertical: 10 }} />
        </Link>
      </View>

      <FlatList
        data={conditions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.meta}>Since {item.since}</Text>
            <Text style={styles.notes}>{item.notes}</Text>
          </Card>
        )}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: { fontSize: 22, fontWeight: "700", color: colors.textPrimary },
  name: { fontSize: 16, fontWeight: "600", color: colors.textPrimary },
  meta: { fontSize: 13, color: colors.textSecondary },
  notes: { marginTop: 4, fontSize: 14, color: colors.textPrimary },
});
