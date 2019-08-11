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
    AsyncStorage.getItem('scores').then((value) => {
      this.setState({ scores: value })
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
    const rank = this.props.data.dataList;
    const mantap = this.state.userid == null ? 0 : rank && rank.indexOf(rank.find((i) => this.state.name == i.fullname))
    return (
      <ScrollView>
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
        <NavigationEvents
          onWillFocus={() => AsyncStorage.getItem('scores').then((value) => {
            this.setState({ scores: value })
          })}
        />

        <View style={{ flex: 1, alignItems: 'center' }}>

          {this.state.userid == null ?
            (
              <TouchableOpacity style={styles.notlogin}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', }}>Login</Text>
              </TouchableOpacity>
            ) :
            (
              <View style={styles.leader}>
                <View style={styles.top}>
                  <Text style={{ fontSize: 14, color: 'white' }}>RANK</Text>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{mantap + 1}</Text>
                </View>
                <View style={styles.top}>
                  <Image style={styles.avatar} source={{ uri: 'https://res.cloudinary.com/dbhwvh1mf/image/upload/v1565540139/wa/Ari_2385_xvmh7u.jpg' }} />
                  <Text style={{ fontSize: 14, color: 'white', marginTop:5 }}>{this.state.name}</Text>
                </View>
                <View style={styles.top}>
                  <Text style={{ fontSize: 14, color: 'white' }}>POINTS</Text>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{this.state.scores}</Text>
                </View>
              </View>
            )}

          <View style={{ margin: 20 }}>
            <Leaderboard
              data={this.state.data.dataList}
              sortBy='scores'
              labelBy='fullname' />
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
    marginTop: 20,
    borderRadius: 10,
    flexDirection: 'row',
    height: 100,
    width: '70%',
    backgroundColor: '#edd33e'
  },
  top: {
    height: '100%',
    width: '33.3%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  notlogin: {
    borderRadius: 10,
    marginTop: 20,
    height: '30%',
    width: '33.3%',
    alignItems: 'center',
    backgroundColor: '#edd33e',
    height: 40,
    width: '70%',
    justifyContent: 'center'
  },
  avatar: {
    width: '75%',
    height: '63%',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: 'white'
  },
})