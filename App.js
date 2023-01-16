import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./assets/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Se alguém achar que a mensagem bíblica é irrelevante, e for com essa opinião para o túmulo, um dia irá descobrir que não existia nenhuma outra coisa que fosse mais relevante.',
      'Não tenho outro nome, senão o de pecador; pecador é meu nome; pecador, meu sobrenome.',
      'Da mesma forma como vamos até o berço tão-somente para encontrar um bebê, também recorremos às Escrituras apenas para encontrar Cristo.',
      'A Escritura indica em várias passagens a base para a responsabilidade: não é o livre-arbítrio… o conhecimento é a base da responsabilidade.',
      'O mundo está fora de propósito, a não ser que quando olhamos através dele, nossos olhos não se fixem nele, mas no Deus que o criou.',
      'O maior cérebro do mundo, se se trata de um homem não regenerado, é menos que um bebê, está morto espiritualmente.',
      'O Senhor Jesus Cristo não leva para o céu ninguém que Ele não tenha santificado na terra.'
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./assets/biscoitoAberto.png')
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={this.state.img}
        />
  
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
  
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;
