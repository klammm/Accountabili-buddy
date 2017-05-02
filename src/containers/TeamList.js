import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAllTeams } from '../actions';
import { Button } from '../components/common';
import TeamDetail from '../components/TeamDetail';

// const mapStateToProps = (state) => {
//   return {
//     teamsList: state.teamsList
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ showAllTeams }, dispatch);
};

export class TeamList extends Component {
  renderTeams() {
    return this.props.showAllTeams.map(team => <TeamDetail key={team.id} team={team} />)
  }

  render() {
    console.log('all the props in teamslist: ', this.props);
    return (
      <ScrollView>
        {this.renderTeams()}
      </ScrollView>
    );
  }
}

export default connect(mapDispatchToProps)(TeamList);
