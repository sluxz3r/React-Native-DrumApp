import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, AsyncStorage, Text, Image, ScrollView, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import { connect } from 'react-redux';
import { getDrum } from '../redux/actions/drum';
import { getUserId, updateScore } from '../redux/actions/userid';
import { getPola } from '../redux/actions/pola';

class HomeScreen extends Component {
  state = {
    userId: [],
    pola:[],
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
  componentDidMount = async () => {
    await this.props.dispatch(getDrum());
    this.setState({
      drum: this.props.drum.drumList[0],
    });
    await this.props.dispatch(getPola());
    this.setState({
      pattern: this.props.pola.polaList.split(',')
    });
    AsyncStorage.getItem('userid').then((value) => {
      this.setState({ userid: value })
    }).then(async () => {
      await this.props.dispatch(getUserId(this.state.userid));
      this.setState({
        userId: this.props.userid.useridList,
      });
    })
    this.subs = [
      this.props.navigation.addListener('willFocus', async () => {
        await this.props.dispatch(getDrum());
        this.setState({
          drum: this.props.drum.drumList[0],
        })
        AsyncStorage.getItem('userid').then((value) => {
          this.setState({ userid: value })
        }).then(() => {
          this.props.dispatch(getUserId(this.state.userid));
          this.setState({
            userId: this.props.userid.useridList,
          });
        })
      }),
    ]
  };

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
    if (this.state.pattern[this.state.isNow] === "1") {
      if (this.state.pattern.length === this.state.isNow + 1) {
        await this.setState({
          combo: this.state.combo + 1,
          score: this.state.score + 10,

          isNow: 0
        })
        next.play(() => next.release())
      }
      await this.setState({
        isNow: this.state.isNow + 1
      })
    } else {
      const sekor = this.state.userId[0] && this.state.userId[0].scores
      if (this.state.score > sekor) {
        await this.props.dispatch(updateScore(this.state.score, this.state.userid));
      }
      alert(
        ` End Game Your Score ${this.state.score}`)
      await this.setState({
        score: 0,
        isNow: 0,
        combo: 0,
        play: false
      })
    }
    await this.setState({
      button: this.state.pattern[this.state.isNow]
    })
  };
  sound2 = async () => {
    const kik = require('../assets/crash.wav')
    const s = new Sound(kik, (e) => {
      if (e) {
        console.log('Error in SOUND', e);
        return;
      } s.play(() => s.release());
    });

    if (this.state.pattern[this.state.isNow] === "2") {
      if (this.state.pattern.length === this.state.isNow + 1) {
        await this.setState({
          combo: this.state.combo + 1,
          score: this.state.score + 10,
          isNow: 0
        })
        next.play(() => next.release())
      }
      await this.setState({

        isNow: this.state.isNow + 1
      })
    } else {
      const sekor = this.state.userId[0] && this.state.userId[0].scores
      if (this.state.score > sekor) {
        await this.props.dispatch(updateScore(this.state.score, this.state.userid));
      }
      alert(
        ` End Game Your Score ${this.state.score}`)
      await this.setState({
        score: 0,
        isNow: 0,
        combo: 0,
        play: false
      })
    }
    await this.setState({
      button: this.state.pattern[this.state.isNow]
    })
  }

  sound3 = async () => {
    const kik = require('../assets/perc.wav')
    const s = new Sound(kik, (e) => {
      if (e) {
        console.log('Error in SOUND', e);
        return;
      } s.play(() => s.release());
    });

    if (this.state.pattern[this.state.isNow] === "3") {
      if (this.state.pattern.length === this.state.isNow + 1) {
        await this.setState({
          combo: this.state.combo + 1,
          score: this.state.score + 10,
          isNow: 0
        })
        next.play(() => next.release())
      }
      await this.setState({

        isNow: this.state.isNow + 1
      })
    } else {
      const sekor = this.state.userId[0] && this.state.userId[0].scores
      if (this.state.score > sekor) {
        await this.props.dispatch(updateScore(this.state.score, this.state.userid));
      }
      alert(
        ` End Game Your Score ${this.state.score}`)
      await this.setState({
        score: 0,
        isNow: 0,
        combo: 0,
        play: false
      })
    }
    await this.setState({
      button: this.state.pattern[this.state.isNow]
    })
  }

  sound4 = async () => {
    const kik = require('../assets/test.wav')
    const s = new Sound(kik, (e) => {
      if (e) {
        console.log('Error in SOUND', e);
        return;
      } s.play(() => s.release());
    });

    if (this.state.pattern[this.state.isNow] === "4") {
      if (this.state.pattern.length === this.state.isNow + 1) {
        await this.setState({
          combo: this.state.combo + 1,
          score: this.state.score + 10,
          isNow: 0
        })
        next.play(() => next.release())
      }
      await this.setState({

        isNow: this.state.isNow + 1
      })
    } else {
      const sekor = this.state.userId[0] && this.state.userId[0].scores
      if (this.state.score > sekor) {
        await this.props.dispatch(updateScore(this.state.score, this.state.userid));
      }
      alert(
        ` End Game Your Score ${this.state.score}`)
      await this.setState({
        score: 0,
        isNow: 0,
        combo: 0,
        play: false
      })
    }
    await this.setState({
      button: this.state.pattern[this.state.isNow]
    })
  }
  render() {
    console.log(this.state.pola)
    return (
      <ScrollView>
        <View style={{ flex: 1, }}>
          <View style={{ flex: 1, alignItems: 'center', width: '100%', marginBottom: '7%' }}>
            <View style={styles.up}>
              <Text style={{ fontSize: 20, fontFamily: 'sans-serif-medium', color: 'white' }}>Drum Your Dream</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: '5%', marginBottom: '2%', fontSize: 20 }}>
              <Text>SCORE : {this.state.score}</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: '2%', marginBottom: '2%' }}>
              <Text>Combo Hits : {this.state.combo}</Text>
            </View>
            <View style={styles.logoSplash}>
              <Image source={require('../assets/slank.jpg')} style={{ height: '100%', width: '100%' }} />
            </View>
          </View>

          {this.state.play == false ?
            (<View style={styles.play}>
              <TouchableOpacity style={styles.playButton}
                activeOpacity={0.05}
                onPress={this.play.bind(this)}
              >
                <Image source={require('../assets/tombol.gif')} style={{ height: '80%', width: '100%', borderRadius: 10 }} />
              </TouchableOpacity>
            </View>) :
            (<View>
              <View style={styles.leader}>
                <View style={styles.drum1}>
                  <TouchableOpacity style={styles.loginButton}
                    activeOpacity={0.05}
                    onPress={this.sound2.bind(this)}>
                    <Image source={require('../assets/tengkorak.png')} style={{ height: '80%', width: '60%' }} />
                  </TouchableOpacity>
                </View>
                <View style={styles.drum2}>
                  <TouchableOpacity style={styles.loginButton1}
                    activeOpacity={0.05}
                    onPress={this.sound3.bind(this)}>
                    <Image source={require('../assets/tengkorak.png')} style={{ height: '80%', width: '60%' }} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.leader}>
                <View style={styles.drum3}>
                  <TouchableOpacity style={styles.pad3}
                    activeOpacity={0.05}
                    onPress={this.sound1.bind(this)}>
                    <Image source={require('../assets/tengkorak.png')} style={{ height: '80%', width: '60%' }} />
                  </TouchableOpacity>
                </View>
                <View style={styles.drum4}>
                  <TouchableOpacity style={styles.pad4}
                    activeOpacity={0.05}
                    onPress={this.sound4.bind(this)}>
                    <Image source={require('../assets/tengkorak.png')} style={{ height: '80%', width: '60%' }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>)}
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

export default connect(mapStateToProps)(HomeScreen);
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