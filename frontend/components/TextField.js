// components/TextField.js
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function TextField({
  label,
  placeholder,
  secureTextEntry,
  keyboardType,
  multiline,
  numberOfLines,
  value,
  onChangeText,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, multiline && styles.multiline]}
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 4,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 15,
    backgroundColor: "#FFFFFF",
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: "top",
  },
});
