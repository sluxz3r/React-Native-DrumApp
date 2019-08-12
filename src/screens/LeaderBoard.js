import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, TextInput, Text, Image, ScrollView, AsyncStorage, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions/data';
import Leaderboard from 'react-native-leaderboard';
import { NavigationEvents, withNavigation } from 'react-navigation';

class LeaderScreen extends Component {
  state = {
    data: [],
    index: '',
    userid: null,
    name: '',
    scores: ''
  };
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    await this.props.dispatch(getUser());
    this.setState({
      data: this.props.data,
    });
    AsyncStorage.getItem('userid').then((value) => {
      this.setState({ userid: value })
    });
    AsyncStorage.getItem('name').then((value) => {
      this.setState({ name: value })
    });
    this.subs = [
      this.props.navigation.addListener('willBlur', async () => {
        await this.props.dispatch(getUser());
        this.setState({
          data: this.props.data,
        })
      }),
      this.props.navigation.addListener('willFocus', async () => {
        await this.props.dispatch(getUser());
        this.setState({
          data: this.props.data,
        })
      }),
    ]
  };

  componentWillUnmount = () => {
    this.subs.forEach(sub => {
      sub.remove();
    });
  };

  render() {
    const data = this.props.data.dataList;
    const rank = this.state.userid == null ? 0 : data && data.indexOf(data.find((i) => this.state.name == i.fullname));
    const point = this.state.userid == null ? 0 : data && data.find((i) => this.state.name == i.fullname);
    const score = point == undefined ? 0 : point;
    const notLogin = data == undefined ? 0 : data;
    const name = notLogin[0] == undefined ? 0 : notLogin[0].fullname;
    const points = notLogin[0] == undefined ? 0 : notLogin[0].scores;
    console.log(name)
    return (
      <ScrollView>
        <StatusBar backgroundColor='#45cbf7' barStyle="light-content" />
        <NavigationEvents
          onWillFocus={() => AsyncStorage.getItem('userid').then((value) => {
            this.setState({ userid: value })
          })}
        />
        <NavigationEvents
          onWillFocus={() => AsyncStorage.getItem('name').then((value) => {
            this.setState({ name: value })
          })}
        />

        <View style={{ flex: 1, alignItems: 'center' }}>


          {this.state.userid == null ?
            (<View style={{ flex: 1, alignItems: 'center', backgroundColor: '#3bc1ed', }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 15, color: 'white' }}>Achievement &#9819;</Text>
              </View>
              <View style={styles.leader}>
                <View style={styles.top}>
                  <Text style={{ fontSize: 14, color: 'white' }}>RANK</Text>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>1</Text>
                </View>
                <View style={styles.top}>
                  <Image style={styles.avatar} source={{ uri: 'https://res.cloudinary.com/dbhwvh1mf/image/upload/v1565540139/wa/Ari_2385_xvmh7u.jpg' }} />
                  <Text style={{ fontSize: 14, color: 'white', marginTop: 5 }}>{name}</Text>
                </View>
                <View style={styles.top}>
                  <Text style={{ fontSize: 14, color: 'white' }}>POINTS</Text>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{points}</Text>
                </View>
              </View>
            </View>
            ) :
            ( <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#3bc1ed', }}>
            <View>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 15, color: 'white' }}>Achievement &#9819;</Text>
            </View>
              <View style={styles.leader}>
                <View style={styles.top}>
                  <Text style={{ fontSize: 14, color: 'white' }}>RANK</Text>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{rank + 1}</Text>
                </View>
                <View style={styles.top}>
                  <Image style={styles.avatar} source={{ uri: 'https://res.cloudinary.com/dbhwvh1mf/image/upload/v1565540139/wa/Ari_2385_xvmh7u.jpg' }} />
                  <Text style={{ fontSize: 14, color: 'white', marginTop: 5 }}>{this.state.name}</Text>
                </View>
                <View style={styles.top}>
                  <Text style={{ fontSize: 14, color: 'white' }}>POINTS</Text>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{score.scores}</Text>
                </View>
              </View>
              </View>
            )}

          <View style={{ marginTop: 20 }}>
            <Leaderboard
              data={this.state.data.dataList}
              sortBy='scores'
              labelBy='fullname'
              icon='image'
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(LeaderScreen);
const styles = StyleSheet.create({
  leader: {
    marginTop: 10,
    borderRadius: 0,
    flexDirection: 'row',
    height: 120,
    width: '100%',
    backgroundColor: '#3bc1ed'
  },
  top: {
    height: '100%',
    width: '33.3%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3bc1ed'
  },
  notlogin: {
    borderRadius: 10,
    marginTop: 20,
    height: '30%',
    width: '33.3%',
    alignItems: 'center',
    height: 40,
    width: '70%',
    justifyContent: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: 'white'
  },
})