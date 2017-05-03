import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import DuckyItem from '../components/DuckyItem';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(168, 8, 255)',
  },
});

class DuckyRace extends Component {
  //
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     albums: []
  //   };
  // }

  componentWillMount() {
    // fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(response => this.setState({ albums: response.data }));

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource =
    ds.cloneWithRows(this.props.duckies)
  }


  renderDuckies(ducky) {
    return <DuckyItem ducky={ducky} />
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderDuckies}
      />
    );
  }
};

function mapStateToProps(state) {
  return {
    duckies: state.users
  };
}


export default connect(mapStateToProps)(DuckyRace);
