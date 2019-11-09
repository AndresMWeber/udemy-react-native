import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const handlePressEvent = () => {
    console.log('clicked!')
  }

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={handlePressEvent}
      />
      <Button
        title="Go to List Demo"
        onPress={handlePressEvent}
      />
      <TouchableOpacity onPress={handlePressEvent}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
