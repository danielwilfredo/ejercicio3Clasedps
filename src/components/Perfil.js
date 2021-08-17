import React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';

const Perfil = () => {
    return (  
        <>
        <View style={stylesView.container}>
            <Image 
           style={stylesImg.container}
            source={require('../../assets/pp.jpg')}
            />
            <Text style={stylesPerfil.container}>
                Daniel Granados
            </Text>
            <Text style={stylesTextoCentrado.container}>
               <strong>Hobbies: </strong> Algunos de mis actividades preferidas son, jugar Futbol, escuchar musica,
               me gusta mucho ver series y peliculas, tambien me gusta mucho aprender sobre nuevas tecnologias para
               el desarrollo de aplicaciones web y ahora que estoy aprendiendo a hacer aplicaciones moviles. 
            </Text>
            
            <Text style={stylesTextoCentrado.container}>
               <strong>Lenguajes de Programación: </strong> Uno de mis lenguajes de programación favoritos es Javascript, ya que este
               es un lenguaje que puede ser utilizado tanto para el desarrollo de aplicaciones web como moviles, y es de los lenguajes de programación
               con los que estoy un poco mas familiarizado, ya que es uno que utilizo con más frecuencia que otros como c#, Java, entre otros.
            </Text>

        </View>

        </>

    );
}

//para la imagen

const stylesImg = StyleSheet.create({
    container: {
        display:'block',
        margin:'auto',
      alignItems: 'center',
      justifyContent: 'center',
      width:250, 
      height:250,
      borderRadius:15
    },
  });

const stylesPerfil = StyleSheet.create({
    container: {
      color: '#000',
      fontSize:30,
      fontWeight:500,
      textAlign:'center'
    },
  });
  const stylesView = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      border: 'solid',
      padding:10,
      margin:10,
      borderRadius:15,
      opacity:0.8
    },
  });

  const stylesTextoCentrado = StyleSheet.create({
    container: {
      color: '#000',
      fontSize:15,
      fontWeight:400,
      textAlign:'justify',
      marginBottom:10
    },
  });
 
export default Perfil;