import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAllPlayers } from '../../actions';
import { Header } from '../../components/common';
import PlayerItem from './PlayerItem';
import axios from 'axios';

const mapStateToProps = (state) => {
  return {
    playersList: state.playersList
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ showAllPlayers }, dispatch);
};

class PlayerList extends Component {
  componentWillMount() {
    this.props.showAllPlayers();
  }

  renderPlayers() {
    return this.props.playersList.map(player =>
      <PlayerItem key={player.id} player={player} />
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
    fontSize: 18
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
