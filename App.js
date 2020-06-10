import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Application from "./src/components/Application/Application";

export default function App() {
  return (
    <View style={styles.container}>
        <Application/>
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
  input:{height: 40, borderColor: 'gray', borderWidth: 1, width:100, marginTop:20},

});
