// app/signup.js
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import TextField from "../components/TextField";
import PrimaryButton from "../components/PrimaryButton";
import colors from "../theme/colors";

export default function SignupScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    setLoading(true);
    // TODO: sign up logic
    setTimeout(() => {
      setLoading(false);
      router.replace("/home");
    }, 800);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create account 🩺</Text>
      <Text style={styles.subtitle}>Join and manage your health in one place</Text>

      <TextField
        label="Full name"
        placeholder="John Doe"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextField
        label="Email"
        placeholder="you@example.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextField
        label="Password"
        placeholder="Choose a strong password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <PrimaryButton label="Sign up" onPress={handleSignup} loading={loading} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <Link href="/login" style={styles.link}>
          Login
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
