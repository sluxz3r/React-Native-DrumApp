import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, TextInput, Text, Image, ScrollView, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

class HomeScreen extends Component {
  state = {
    kick: '',
    kock: ''
  };
  kick = () => {
    this.setState({
      kick: 1
    })
  }
  kock = () => {
    this.setState({
      kock: 2
    })
  }
  render() {
    return (
      <ScrollView>
        <View style={{flex:1}}>
          <View>
          <TouchableOpacity style={styles.loginButton}
            onPress={this.kick}>
            <Text style={{ color: 'white', fontSize: 18 }}> </Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButton1}
            onPress={this.kock}>
            <Text style={{ color: 'white', fontSize: 18 }}> </Text>
          </TouchableOpacity>
          <View>
            <Text>{this.state.kick}</Text>
            <Text>{this.state.kock}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default HomeScreen;
const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: 'blue',
    borderWidth: 10,
    marginTop: 40,
    marginLeft: 40,
    width: 100,
    height: 100,
    borderRadius: 80,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton1: {
    backgroundColor: 'red',
    borderWidth: 10,
    marginTop: 40,
    marginLeft: 160,
    width: 100,
    height: 100,
    borderRadius: 80,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center"
  },
})