// @flow
import React from "react";
import { StackNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";

// const Drawer = DrawerNavigator(
// 	{
// 	},
// 	{
// 		initialRouteName: "Home",
// 		contentComponent: props => <Sidebar {...props} />,
// 	}
// );

const App = StackNavigator(
	{
    Home: { screen: Home },
    Login: { screen: Login },
		BlankPage: { screen: BlankPage },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
