import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import DuckyItem from '../components/DuckyItem';
import { View, Text, StyleSheet } from 'react-native';

class DuckyList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teamId: 1
    };

  componentWillMount() {
    fetch(`https://bilibuddy-api.herokuapp.com/teams/${this.state.teamId}`)
        .then(response => console.log(response));

    // const ds = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // });
    //
    // this.dataSource = ds.cloneWithRows(this.props.duckies);
  }

  renderDuckies(ducky) {
    return <DuckyItem />
  }

  render() {
    return (
      // <ListView
      //   dataSource={this.dataSource}
      //   renderRow={this.renderDuckies}
      // />
      <ScrollView>
        {this.renderDuckies()}
      </ScrollView>
    );
  }
};

// function mapStateToProps(state) {
//   return {
//     teamID: state.selectedTeamId
//   };
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgb(168, 8, 255)',
//   },
// });

// export default connect(mapStateToProps)(DuckyRace);
export default DuckyList;
