// @flow
import * as React from "react";
import { connect } from "react-redux";
import Sidebar from "../../stories/screens/Sidebar";
import { loading } from "../HomeContainer/actions";

export interface Props {
  navigation: any,
  loading: Function
}
export interface State {}
class SidebarContainer extends React.Component<Props, State> {
	render() {
		return <Sidebar navigation={this.props.navigation} loading={this.props.loading} />;
	}
}

function bindAction(dispatch) {
    return {
        loading: what => dispatch(loading(what)),
    };
}

export default connect(null, bindAction)(SidebarContainer);
