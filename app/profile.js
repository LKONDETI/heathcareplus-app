// app/profile.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import colors from "../theme/colors";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: clear auth state
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>John Doe</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>you@example.com</Text>

        <Text style={styles.label}>Date of birth</Text>
        <Text style={styles.value}>01 Jan 2000</Text>

        <Text style={styles.label}>Blood group</Text>
        <Text style={styles.value}>O+</Text>
      </View>

      <PrimaryButton label="Logout" onPress={handleLogout} style={{ marginTop: 24 }} />
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
    marginBottom: 16,
    color: colors.textPrimary,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
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
