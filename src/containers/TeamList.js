import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAllTeams } from '../actions';
import TeamDetail from '../components/TeamDetail';

const mapStateToProps = (state) => {
  console.log(state)
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
    // this.renderTeams();
  }

  renderTeams() {
    console.log('teams list: ', this.props.teamsList);
    return this.props.teamsList.map(team => <TeamDetail key={team.id} team={team} />)
  }

  render() {
    console.log('our props brehhh:', this.props)
    return (
      <ScrollView>
        {this.renderTeams()}
      </ScrollView>
    );
  }
}

TeamList.navigationOptions = {
  title: 'Pick a team to join!'
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
