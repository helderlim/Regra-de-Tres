import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import{
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
 

  
  render(){
    return(
      <View style={styles.coteudo}>
        <View style={styles.entradas}>
          <TextInput placeholder='valor1' keyboardType='numeric' style={styles.entrada} onChangeText={(valor1)=>{this.setState({valor1})}}> </TextInput>
          <TextInput placeholder='valor2' keyboardType='numeric' style={styles.entrada} onChangeText={(valor2)=>{this.setState({valor2})}}> </TextInput>
          <TextInput placeholder='valor3' keyboardType='numeric' style={styles.entrada} onChangeText={(valor3)=>{this.setState({valor3})}}> </TextInput>
          </View>

          <Text style={styles.entradares}>{this.style.resultado}</Text>
          <TouchableOpacity style={styles.botao} onPress={this.calcular}><Text style={{color:'white'}}>Efetuar regra de 3</Text></TouchableOpacity>
      </View>
    );
  }};

  const styles = StyleSheet.create({
    conteudo:
    {
      flex:1,
    },
    entradas:
    {
      flex:1,
      flexDirection:'row',
      
    },

    entrada:
    {
      height:70,
      textAlign:'center',
      width: '33%',
      fontSize: 20,
      marginTop:200,
    },

    entradares:
    {
      height: 70,
      textAlign:'center',
      width: '100%',
      fontSize: 20,

    }
  })
