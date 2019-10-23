import React from "react";
import { Platform, Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import CategoryList from '../../components/CategoryList/CategoryList';
import Home from "../../components/Home/Home";

import MenuDrawer from "../MenuDrawer/MenuDrawer";

const screenWidth = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: screenWidth * 0.83,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  }
};

let data = [{id: 1}, {id: 2}]

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Contacts: {
      screen: data => <CategoryList {...data} propName={data} />
    },
    Gear: {
      screen: CategoryList
    },
    Vehicles: {
      screen: CategoryList
    }
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);