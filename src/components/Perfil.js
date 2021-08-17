import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

const Perfil = () => {
    return (  
        <>
        <View>
            <Text style={stylesPerfil.container}>
                Yo soy el componente Perfil
            </Text>

        </View>

        </>

    );
}
const stylesPerfil = StyleSheet.create({
    container: {
      color: 'red',
      backgroundColor: '#ADD8E6.',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
 
export default Perfil;