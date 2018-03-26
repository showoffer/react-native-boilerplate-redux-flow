import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Footer as NativeBaseFooter,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";
import {
  NavigationActions
} from "react-navigation";

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Login" })]
});

export interface Props {
  navigation: any;
  data: any;
  loading: any;
}

export interface State {
}

export class Footer extends Component<Props, State> {
  render() {
    return (
      <NativeBaseFooter>
        <FooterTab>
          {this.props.data.map((item, i) => {
            return (<Button vertical
                            key={i}
                            onPress={(v) => {
                              if (item.route === "Login") {
                                this.props.navigation.dispatch(resetAction);
                                // this.props.loading(true);
                              } else {
                                this.props.navigation.navigate(item.route);
                              }
                            }}>
              <Icon name={`${Platform.OS === "ios" ? "ios" : "md"}-${item.icon}`}/>
              <Text>{item.caption}</Text>
            </Button>);
          })}
        </FooterTab>
      </NativeBaseFooter>
    );
  }

}
