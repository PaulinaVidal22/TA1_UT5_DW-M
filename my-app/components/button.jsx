import { StyleSheet, Text, View, Button } from "react-native";

export const Button = ({onPress, text, color}) => {
    return (
        <Button
        onPress = {onPress}
        title= {text}
        color={color}
      />
    );
};
