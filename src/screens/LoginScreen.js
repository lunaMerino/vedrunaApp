import { View, StyleSheet, Text, Image, TextInput, Button } from 'react-native'
import React from 'react'

export function LoginScreen({ navigation }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
       <Image style={styles.image}
        source={require('../../assets/vedrunaLogo.png')}
        />
        <Text>VEDRUNA EDUCACIÓN</Text>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Text>¿Olvidaste la contraseña?</Text>
        <Button 
        title="Log in"
        onPress={() => navigation.navigate('Login')}
        style={styles.buttonLogin}
        />
        <View style={styles.containerRegister}>
          <Text>¿No tienes una cuenta?</Text>
          <Button
          title="Crear cuenta"
          onPress={() => navigation.navigate('Register')}
          style={styles.buttonRegister}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },
  
  containerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  image: {
    justifyContent: 'center', // Centra los hijos verticalmente
    alignItems: 'center', // Centra los hijos horizontalmente
    backgroundColor: '#f0f0f0', // Color de fondo gris claro
  },

  containerInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: '80%',
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  buttonLogin: {
    width: '80%',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#9FC63B',
  },

  buttonRegister: {
    Color: '#9FC63B',
  },

  containerRegister: {

    justifyContent: 'bottom',
    alignItems: 'center',
  },
});