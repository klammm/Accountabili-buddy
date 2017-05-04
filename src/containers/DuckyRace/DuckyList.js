import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, ListView, ScrollView } from 'react-native';
import { Header } from '../../components/common';
import DuckyItem from './DuckyItem';
import axios from 'axios';

class DuckyList extends Component {

  // componentDidMount() {
  //   axios.get('https://bilibuddy-api.herokuapp.com/teams/1')
  //       .then(response => this.setState({ players: response.data.users }));
  // }
    // const ds = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // });
    //
    // this.dataSource = ds.cloneWithRows(this.props.duckies);
  // }

  renderPlayers() {
    return this.props.players.map(player =>
      <DuckyItem key={player.id} player={player} />
    );
  };

  render() {

    return (
      // <ListView
      //   dataSource={this.dataSource}
      //   renderRow={this.renderDuckies}
      // />
      <ScrollView>
        <Header headerText={'Ducky Race'} />
        {this.renderPlayers()}
      </ScrollView>

    );
  }
};

const mapStateToProps = (state) => {
  return {
    players: state.players
  };
}


export default connect(mapStateToProps)(DuckyList);
