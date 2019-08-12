import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, TextInput, Text, Image, ScrollView, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
class HomeScreen extends Component {
  constructor() {
    super();
  }
  
  onButtonPress() {
    const requireAudio = require('../assets/test.wav');
    const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
  }

  onButtPress() {
    const requireAudio = require('../assets/kick2.wav');
    const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
  }
  
  render() {
    
    return (
      <ScrollView>
        <View style={{ flex: 1, }}>
          <View style={{ flex: 1, alignItems: 'center', width: '100%', marginBottom: '7%' }}>
            <View style={styles.up}>
              <Text style={{ fontSize: 20, fontFamily: 'sans-serif-medium', color: 'white' }}>Drum Your Dream</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: '10%', marginBottom: '2%' }}>
              <Text>Combo Hits : 5</Text>
            </View>
            <View style={styles.logoSplash}>
              <Image source={require('../assets/slank.jpg')} style={{ height: '100%', width: '100%' }} />
            </View>
          </View>

          <View style={styles.leader}>
            <View style={styles.drum1}>
              <TouchableOpacity style={styles.loginButton}
                activeOpacity={0.2}
                onPress={this.onButtonPress.bind(this)}>
                <Image source={require('../assets/tengkorak.png')} style={{ height: '80%', width: '60%' }} />
              </TouchableOpacity>
            </View>
            <View style={styles.drum2}>
              <TouchableOpacity style={styles.loginButton1}
                activeOpacity={0.4}
                onPress={this.onButtonPress.bind(this)}>
                <Image source={require('../assets/tengkorak.png')} style={{ height: '80%', width: '60%' }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.leader}>
            <View style={styles.drum3}>
              <TouchableOpacity style={styles.pad3}
                activeOpacity={0.4}
                onPress={this.onButtPress.bind(this)}>
                <Image source={require('../assets/tengkorak.png')} style={{ height: '80%', width: '60%' }} />
              </TouchableOpacity>
            </View>
            <View style={styles.drum4}>
              <TouchableOpacity style={styles.pad4}
                activeOpacity={0.4}
                onPress={this.onButtPress.bind(this)}>
                <Image source={require('../assets/tengkorak.png')} style={{ height: '80%', width: '60%' }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default HomeScreen;
const styles = StyleSheet.create({
  leader: {
    marginTop: 20,
    borderRadius: 0,
    flexDirection: 'row',
    height: 120,
    width: '100%',
  },
  drum1: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '50%',
    paddingRight: 10,
  },
  drum2: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '50%',
    paddingLeft: 10
  },
  drum3: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: '50%',
    paddingRight: 30
  },
  drum4: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '50%',
    paddingLeft: 30
  },
  loginButton: {
    backgroundColor: '#c7c7c7',
    borderWidth: 12,
    borderColor: '#858383',
    width: 100,
    height: 100,
    borderRadius: 80,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButton1: {
    backgroundColor: '#c7c7c7',
    borderWidth: 12,
    borderColor: '#858383',
    width: 100,
    height: 100,
    borderRadius: 80,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  pad3: {
    backgroundColor: '#c7c7c7',
    borderWidth: 15,
    borderColor: '#595757',
    width: 120,
    height: 120,
    borderRadius: 80,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  pad4: {
    backgroundColor: '#c7c7c7',
    borderWidth: 15,
    borderColor: '#595757',
    width: 120,
    height: 120,
    borderRadius: 80,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  logoSplash: {
    width: 250,
    height: 150,
    alignItems: 'center',
  },
  up: {
    backgroundColor: '#3bc1ed',
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})