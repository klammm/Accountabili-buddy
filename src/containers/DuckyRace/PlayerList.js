import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAllPlayers } from '../../actions';
import { showAllScores } from '../../actions';
import { Header } from '../../components/common';
import PlayerItem from './PlayerItem';
import axios from 'axios';

const mapStateToProps = (state) => {
  return {
    playersList: state.playersList,
    playersScores: state.playersScores
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ showAllPlayers, showAllScores }, dispatch);
};

class PlayerList extends Component {
  componentWillMount() {
    this.props.showAllPlayers();
    this.props.showAllScores();
  }

  renderPlayers() {
    return this.props.playersList.map(player =>
      <PlayerItem key={player.id} player={player} scores={this.props.playersScores[player.id]}/>
    );
  };

  render() {
    return (
      <ScrollView>
        <Header style={styles.headerTextStyle} headerText={'Ducky Race'} />
        {this.renderPlayers()}
      </ScrollView>
    );
  }
}

const styles = {
  headerTextStyle: {
    fontSize: 18,
    backgroundColor: 'rgb(177, 92, 252)',
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
