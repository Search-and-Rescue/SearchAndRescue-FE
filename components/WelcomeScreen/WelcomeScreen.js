import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AsyncStorage } from "react-native";
import {
  getEmergencyContacts,
  getVehicles,
  getGear,
  getTrips,
  getUser
} from "../../util/apiCalls";
import {
  setEmergencyContacts,
  setVehicles,
  setGear,
  setTrips,
  setUser
} from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from "./styles";

export class LoginScreen extends Component {
  storeToken = async () => {  
    try {
      await AsyncStorage.setItem("TASKS", "this is a task");
    } catch (error) {
      // Error saving data
    }
  };

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("TASKS");
      if (value !== null) {
        console.log('value', value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  componentDidMount = async () => {
    this.storeToken();
    this.retrieveData();
    console.log(AsyncStorage)
    const {
      setEmergencyContacts,
      setVehicles,
      setGear,
      setUser,
      setTrips
    } = this.props;
    try {
      const userInfoContacts = await getEmergencyContacts();
      const userInfoVehicles = await getVehicles();
      const userInfoGear = await getGear();
      const userInfoTrips = await getTrips();
      const userInfo = await getUser();
      await setEmergencyContacts(userInfoContacts.user.emergencyContacts);
      await setVehicles(userInfoVehicles.user.vehicles);
      await setGear(userInfoGear.user.gear);
      await setTrips(userInfoTrips.user.trips);
      await setUser(userInfo.user);
    } catch ({ message }) {
      console.log(message);
    }
  };

  render() {
    return (
      <View style={styles.loginContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          title="Login"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          title="Login"
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { setEmergencyContacts, setVehicles, setGear, setUser, setTrips },
    dispatch
  );

export default connect(null, mapDispatchToProps)(LoginScreen);
