import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAllTeams } from '../actions';
import TeamDetail from '../components/TeamDetail';

const mapStateToProps = (state) => {
  return {
    teamsList: state.teamsList
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ showAllTeams }, dispatch);
};

export class TeamList extends Component {
  componentWillMount() {
    this.props.showAllTeams();
  }

  renderTeams() {
    return this.props.teamsList.map(team => <TeamDetail key={team.id} team={team} />)
  }

  render() {
    return (
      <ScrollView>
        {this.renderTeams()}
      </ScrollView>
    );
  }
}

TeamList.navigatonOptions = {
  title: 'Pick a team to join!',
  headerLeft: null
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
