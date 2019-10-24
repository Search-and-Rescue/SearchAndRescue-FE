import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export default class Gear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comments: ""
    };
  }

  handleSubmit = () => {
    const { navigation } = this.props;
    navigation.navigate("GearList");
    this.setState({
      name: "",
      comments: ""
    });
  };

  render() {
    return (
      <View style={styles.gearContainer}>
        <Text>Gear Page</Text>
        <TextInput
          placeholder="name"
          style={styles.input}
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
          name="name"
        />
        <TextInput
          placeholder="comments"
          style={styles.input}
          onChangeText={text => this.setState({ comments: text })}
          value={this.state.comments}
          name="comments"
        />
        <TouchableOpacity style={styles.updateBtn} onPress={this.handleSubmit}>
          <Text style={styles.updateBtnText}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
