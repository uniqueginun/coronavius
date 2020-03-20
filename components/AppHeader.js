import React from "react";
import { Header } from "react-native-elements";
import Colors from "../Colors";

const AppHeader = ({ title }) => {
  return (
    <Header
      centerComponent={{
        text: title,
        style: { color: "#fff", fontWeight: "bold" }
      }}
      containerStyle={{
        backgroundColor: Colors.primary,
        justifyContent: "center",
        height: 90,
        paddingBottom: 20,
        marginBottom: 15
      }}
    />
  );
};

export default AppHeader;
