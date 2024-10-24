import { useState} from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Separator = () => <View style={styles.separator} />;

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount(count + 1);
  }

  const decreaseHandler = () => {
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>COUNTER</Text>
      <Separator />
      <Text style={styles.paragraph}>{count}</Text>

      <View style={styles.fixToText}>

      <Button
        onPress = {() => decreaseHandler()}
        title= "➕ decrease"
        color="#f194ff"
      />
          
      <Button
        onPress = {() => increaseHandler()}
        title = "➕ increase"
        color="lightpink"
      />

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        letterSpacing: 10,
        fontStyle: 'italic'
      },
    paragraph: {
      textAlign: 'center',
      marginVertical: 8,
      fontSize: 30,
      fontWeight: 'bold'
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
