import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

export default function App() {
  let content = '';
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="input text"
        onChangeText={(text) => {
          content = text;
        }}
        style={styles.input}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          Alert.alert(content);
        }}
      >
        <View style={styles.box}>
          <Text style={styles.first}>Start</Text>
          <StatusBar style="auto" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flexDirection: 'row',
    backgroundColor: '#6830CF',
    padding: 16,
  },
  first: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    padding: 16,
  },
  input: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 16,
  },
});
