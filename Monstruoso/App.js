import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Content from './components/Content';
import Social from './components/Social';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    const name = 'Jessica';
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenid@</Text>
        <Content name={name} />
        <Social />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    width: 300,
    padding : 30,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#b0c4de',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
