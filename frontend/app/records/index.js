// app/records/index.js
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Card from "../../components/Card";
import PrimaryButton from "../../components/PrimaryButton";
import colors from "../../theme/colors";
import { fetchConditions, deleteCondition } from '../../api';

export default function ConditionsListScreen() {
  const [conditions, setConditions] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadConditions = async () => {
    try {
      setLoading(true);
      const data = await fetchConditions();
      setConditions(data);
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Failed to load conditions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = loadConditions();
    // no cleanup needed
  }, []);

  const handleDelete = (id) => {
    Alert.alert("Delete condition", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteCondition(id);
            setConditions((prev) => prev.filter((c) => c.id !== id));
          } catch (err) {
            console.error(err);
            Alert.alert("Error", "Failed to delete condition");
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <Card>
      <TouchableOpacity
        onPress={() => {
          // navigate to form in "edit" mode with id
          // /records/form?id=123
        }}
      >
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.meta}>Since {item.since}</Text>
        <Text style={styles.notes}>{item.notes}</Text>
      </TouchableOpacity>

      <View style={styles.actionsRow}>
        <Link href={`/records/form?id=${item.id}`} style={styles.editText}>
          Edit
        </Link>
        <Text> · </Text>
        <Text style={styles.deleteText} onPress={() => handleDelete(item.id)}>
          Delete
        </Text>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Medical conditions</Text>
        <Link href="/records/form" asChild>
          <PrimaryButton
            label={loading ? "Loading..." : "Add"}
            style={{ paddingHorizontal: 20, paddingVertical: 10 }}
          />
        </Link>
      </View>

      <FlatList
        data={conditions}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 32 }}
        ListEmptyComponent={
          !loading && <Text style={styles.empty}>No conditions yet. Tap "Add" to create one.</Text>
        }
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
  empty: { marginTop: 24, fontSize: 14, color: colors.textSecondary },
  actionsRow: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  editText: { color: colors.primary, fontSize: 13 },
  deleteText: { color: colors.danger, fontSize: 13 },
});
