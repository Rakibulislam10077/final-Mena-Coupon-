import { View, Text } from "react-native";
import React from "react";
import Divider from "react-native-paper";
const CustomDivider = () => {
  return (
    <View>
      <Divider style={{ height: 1, opacity: 0.3, backgroundColor: "red" }} />
    </View>
  );
};
export default CustomDivider;
