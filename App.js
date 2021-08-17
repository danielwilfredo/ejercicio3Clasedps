import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Perfil from "./src/components/Perfil"

export default function App() {
  return (
    <View style={styles.container}>
      <Perfil/>
      <Text>Nombre: Daniel Wilfredo Granados Hernandez</Text>
      <Text>Carnet: GH161659</Text>
      <Text>Hobies: </Text>
      <Text>Algo: </Text>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7e7e7e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
