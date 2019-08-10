import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, TextInput, Text, Image, ScrollView, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

class LeaderScreen extends Component {
  state = {
    name: 'Leader',
  };
  render() {
    return (
      <ScrollView>
        <View>
            <Text>{this.state.name}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default LeaderScreen;
const styles = StyleSheet.create({
})