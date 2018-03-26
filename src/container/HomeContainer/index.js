// @flow
import * as React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import data from "./data";
import { fetchList } from "./actions";

export interface Props {
  navigation: any,
  fetchList: Function,
  data: Object,
}

export interface State {
}

class HomeContainer extends React.Component<Props, State> {
  componentDidMount() {
    this.props.fetchList(data.url);
  }

  render() {
    return (this.props.isLoading ?
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="blue"/>
      </View>
      : <Home navigation={this.props.navigation} list={this.props.data}/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

function bindAction(dispatch) {
  return {
    fetchList: url => dispatch(fetchList(url)),
  };
}

const mapStateToProps = state => ({
  data: state.homeReducer.list,
  isLoading: state.homeReducer.isLoading,
});

export default connect(mapStateToProps, bindAction)(HomeContainer);
