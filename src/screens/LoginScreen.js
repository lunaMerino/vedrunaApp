import { View, StyleSheet, Text, Image, TextInput, Button } from 'react-native'

export function LoginScreen({ navigation }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
       <Image style={styles.image}
        source={{ uri: 'https://s3-alpha-sig.figma.com/img/5cc2/326e/4b369d5d71efbfa1f6961ee2c182d04d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bSZH416UOGXhA4Aliq3e7Kv8LGHYJnn~q~PRmBPfS1u~nsu8DlI~ezms5OkF~alNWW7z7ODkGyg4Lp6cWEBMJZQP-drMkdkbjojQe9-5e3TNeUA9XEMHiyuk~eloimj3eqUBtxLh7jDRbe2nbW01lwTKcHWFLUXRAxUYIqD0-fy4fzEYfuC-MMUhbyf-~z0iaEe5uAupKA-2~ml8Hk8SXhslWOylshxneyocMhf0ZaLe2YaLZgXdUuDqogUjxuKzGxIICSCV6KruHySgvSwtrEC~9iZUms~LDY0yPtgYPJDrn6mz-2sDRNUE7PlWc5F7-cdk4k2GkGNR8jZzXD1thg__' }}
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
        onPress={() => navigation.navigate('Tab')}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
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