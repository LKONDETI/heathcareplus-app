// app/login.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import TextField from "../components/TextField";
import PrimaryButton from "../components/PrimaryButton";
import colors from "../theme/colors";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
  setLoading(true);
  // TODO: real auth – for now just fake login
  setTimeout(() => {
    setLoading(false);
    router.replace("/(tabs)"); // go to the tabs layout
  }, 800);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back 👋</Text>
      <Text style={styles.subtitle}>Login to manage your health and appointments</Text>

      <TextField
        label="Email"
        placeholder="you@example.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextField
        label="Password"
        placeholder="••••••••"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.forgotRow}>
        <Text style={styles.forgotText}>Forgot password? </Text>
      </TouchableOpacity>

      <PrimaryButton label="Login" onPress={handleLogin} loading={loading} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don’t have an account?</Text>
        <Link href="/signup" style={styles.link}>
          Sign up
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 6,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 24,
    color: colors.textSecondary,
  },
  forgotRow: {
    marginTop: 4,
    alignItems: "flex-end",
  },
  forgotText: {
    fontSize: 13,
    color: colors.primary,
  },
  footer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    color: colors.textSecondary,
  },
  link: {
    marginLeft: 4,
    color: colors.primary,
    fontWeight: "600",
  },
});
