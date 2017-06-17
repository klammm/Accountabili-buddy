import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Dimensions, View, StyleSheet } from 'react-native';

const window = Dimensions.get('window');

class Menu extends Component {
  static propTypes = {
    routes: PropTypes.array,
    horizontal: PropTypes.bool,
    initialIndex: PropTypes.number,
  }

  static defaultProps = {
    routes: [],
    horizontal: true,
    initialIndex: 0,
  }

  constructor(props) {
    super(props);
    this._scrollView = null;
  }

  componentDidMount() {
    if (this.props.horizontal) {
      const offset = window.width * this.props.initialIndex;
      this._scrollView.scrollTo({ x: offset, animated: false });
    } else {
      const offset = window.height * this.props.initialIndex;
      this._scrollView.scrollTo({ y: offset, animated: false });
    }
  }

  renderScreens() {
    const { horizontal, routes } = this.props;
    const itemStyle = horizontal ? styles.item : styles.verticalItem;

    return this.props.routes.map((route, index) => {
      return (
        <View key={index} style={itemStyle}>
          <route.component navigation={this.props.navigation}/>
        </View>
      );
    });
  }

  render() {
    const { horizontal, navigation } = this.props;
    const scrollViewStyle = horizontal ? styles.scrollView : styles.scrollViewVertical;

    return (
      <View style={styles.container}>
        <ScrollView
          ref={(c) => this._scrollView = c}
          horizontal={horizontal}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={scrollViewStyle}
          scrollEventThrottle={32}
          bounces={false}
          directionalLockEnabled={true}
          navigation={navigation}
        >
          {this.renderScreens()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexDirection: 'row',
  },
  scrollViewVertical: {
    flexDirection: 'column',
  },
  item: {
    flex: 1,
    width: window.width,
  },
  verticalItem: {
    flex: 1,
    height: window.height,
    width: window.width,
  },
});

export default Menu;
