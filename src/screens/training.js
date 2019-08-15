import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, AsyncStorage, Text, Image, ScrollView, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import { connect } from 'react-redux';

class TrainingScreen extends Component {
  state = {
    userId: [],
    combo: 0,
    play: false,
    score: 0,
    pattern: [],
    isNow: 0,
    button: 1,
    userid: null,
  }
  constructor(props) {
    super(props);

  }

  play = () => {
    this.setState({
      play: true
    })
  }

  sound1 = async () => {
    const kik = require('../assets/kick2.wav')
    const s = new Sound(kik, (e) => {
      if (e) {
        console.log('Error in SOUND', e);
        return;
      } s.play(() => s.release());
    });
  };

  sound2 = async () => {
    const kik = require('../assets/crash.wav')
    const s = new Sound(kik, (e) => {
      if (e) {
        console.log('Error in SOUND', e);
        return;
      } s.play(() => s.release());
    });
  }

  sound3 = async () => {
    const kik = require('../assets/perc.wav')
    const s = new Sound(kik, (e) => {
      if (e) {
        console.log('Error in SOUND', e);
        return;
      } s.play(() => s.release());
    });
  }

  sound4 = async () => {
    const kik = require('../assets/test.wav')
    const s = new Sound(kik, (e) => {
      if (e) {
        console.log('Error in SOUND', e);
        return;
      } s.play(() => s.release());
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, }}>
          <View style={{ flex: 1, alignItems: 'center', width: '100%', marginBottom: '7%' }}>
            <View style={styles.up}>
              <Text style={{ fontSize: 20, fontFamily: 'sans-serif-medium', color: 'white' }}>Drum Your Dream</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: '5%', marginBottom: '2%', fontSize: 20 }}>
              <Text>Training Mode</Text>
            </View>
            <View style={styles.logoSplash}>
              <Image source={require('../assets/slank.jpg')} style={{ height: '100%', width: '100%' }} />
            </View>
          </View>
          
          <View>
              <View style={styles.leader}>
                <View style={styles.drum1}>
                  <TouchableOpacity style={styles.loginButton}
                    activeOpacity={0.05}
                    onPress={this.sound2.bind(this)}>
                    <Image source={require('../assets/tengkorak.png')} style={{ height: '80%', width: '60%' }} />
                    <Text style={{fontSize:8}}>CRASH</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.drum2}>
                  <TouchableOpacity style={styles.loginButton1}
                    activeOpacity={0.05}
                    onPress={this.sound3.bind(this)}>
                    <Image source={require('../assets/tengkorak.png')} style={{ height: '80%', width: '60%' }} />
                    <Text style={{fontSize:8}}>PERC</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.leader}>
                <View style={styles.drum3}>
                  <TouchableOpacity style={styles.pad3}
                    activeOpacity={0.05}
                    onPress={this.sound1.bind(this)}>
                    <Image source={require('../assets/tengkorak.png')} style={{ height: '80%', width: '60%' }} />
                    <Text style={{fontSize:8}}>KICK</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.drum4}>
                  <TouchableOpacity style={styles.pad4}
                    activeOpacity={0.05}
                    onPress={this.sound4.bind(this)}>
                    <Image source={require('../assets/tengkorak.png')} style={{ height: '80%', width: '60%' }} />
                    <Text style={{fontSize:8}}>SNARE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    drum: state.drum,
    userid: state.userid,
    pola: state.pola
  };
};

export default connect(mapStateToProps)(TrainingScreen);
const styles = StyleSheet.create({
  leader: {
    marginTop: 20,
    borderRadius: 0,
    flexDirection: 'row',
    height: 120,
    width: '100%',
  },
  play: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 300
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
  playButton: {
    width: 100,
    height: 100,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center"
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