import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAllPlayers } from '../../actions';
import { showAllScores } from '../../actions';
import { Header } from '../../components/common';
import PlayerItem from './PlayerItem';
import axios from 'axios';
import duckyBackground from '../../../assets/images/duckyBackground.png';

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
    console.log(this.props.playersList);
  }

  renderPlayers() {
    return this.props.playersList.map(player =>
      <PlayerItem key={player.id} player={player} scores={this.props.playersScores[player.id]}/>
    );
  };

  render() {
    return (
      <Image source={duckyBackground} style={styles.imgContainer}>
        <Header
          style={styles.headerStyle}
          headerTextStyle={styles.headerTextStyle}
          headerText={'Ducky Race'}
          />
        <ScrollView>
          {this.renderPlayers()}
        </ScrollView>
    </Image>
    );
  }
}

const lightPurple = '#D961FF';
const lightPurpleOpacity = 'rgba(190, 7, 247, 0.28)';
const whiteOpacity = 'rgba(255, 255, 255, 0.24)';

const styles = {
  headerStyle: {
    backgroundColor: whiteOpacity,
    borderColor: lightPurpleOpacity,
  },
  headerTextStyle: {
    color: lightPurple
  },
  imgContainer: {
    flex: 1,
    width: null,
    height: null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
