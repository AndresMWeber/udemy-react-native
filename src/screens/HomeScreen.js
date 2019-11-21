import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handlePressEvent = (e, path) => {
    navigation.navigate(path)
  }

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={e => handlePressEvent(e, 'Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={e => handlePressEvent(e, 'List')}
      />
      <Button
        title="Go to Image Demo"
        onPress={e => handlePressEvent(e, 'Images')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
