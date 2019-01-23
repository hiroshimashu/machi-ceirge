import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AuthScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }
});

function mapStateToProps({ auth }) {
  return { token: auth.token };
};


export default connect(
  mapStateToProps,
  actions
)(AuthScreen);
