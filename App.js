import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>This is a v8 engine app</Text>
      <Text>Works with android over 11</Text>
      <Text>On android under 11</Text>
      <Text> 
        WARN  No native ExponentConstants module found, are you sure the expo-constants's module is linked properly?
        ERROR  Error: Cannot find native module 'ExpoAsset', js engine: v8
        ERROR  Invariant Violation: "main" has not been registered. This can happen if:
         * Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
         * A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called., js engine: v8</Text>
      <StatusBar style="auto" />
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
});
