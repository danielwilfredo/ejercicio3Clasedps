import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Perfil from "./src/components/Perfil"

export default function App() {
  return (
    <View style={styles.container}>
      <Perfil/>

       <Text style={styles.texto}>Universidad Don Bosco</Text>
      <Text style={styles.texto}>Diseño y Programación de Software Multiplataforma</Text>
      <Text style={styles.texto}>Alumno: Daniel Wilfredo Granados Hernandez</Text>
      <Text style={styles.texto}>Carnet: GH161659</Text> 
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7e7e7e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    color:'#fff',
    textAlign: 'center',
    margin: 2
  }
  ,
});
