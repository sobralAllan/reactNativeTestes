import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.janelaUm}>
        <Text style={styles.titulo}>New Aplicativo em React Native</Text>
      </View>

      <View style={styles.janelaTres}>
        <TextInput style={styles.campoNumericoUm} 
        placeholder='Informe um número' 
        keyboardType='numeric'/>
      </View>

      <View style={styles.janelaDois}>
        <Button style={styles.botao}
          title='Confirmar'
          onPress={() => Alert.alert('Cadastro Realizado com Sucesso!')}
        />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3412aa',
    color: '#4412aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    backgroundColor: '#99ffaa',
    color: '#887766',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  botao:{
    backgroundColor: '#001aa',
    color: '#aaa',
    width: '100%',
  },
  janelaUm: {
    flex: 1,
    border: '2px solid black',
    backgroundColor: '#000999',
    width: '100%',
    borderColor: '#bbccdd',
  },
  janelaDois:{
    marginTop: '100%',
    width: '100%',
    flex: 2,
    border: '2px solid black',
    backgroundColor: '#abc',
    borderRadius: 50,
    color: '#55aaff',
  },
  janelaTres:{
    flex: 3,
    backgroundColor: '#fff',
    width: '100%',
  },
  campoNumericoUm:{
    backgroundColor: '#000',
    marginTop: '40%',
    height: '21%',
    color: '#fff',
  },

  
});
