// @flow
import React, { Component } from "react";
import { Footer } from "@stories/screens/Footer";
import { FOOTER_ROUTES } from "@shared/const";

class FooterContainer extends Component {
  render() {
    return <Footer data={FOOTER_ROUTES} navigation={this.props.navigation}/>;
  }
}

export default FooterContainer;
