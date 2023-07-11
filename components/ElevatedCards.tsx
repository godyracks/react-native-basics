import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headText}>Elevated Cards</Text>
      <ScrollView horizontal contentContainerStyle={styles.container}>   
      {/* contentContainerStyle property is added to the ScrollView component to set the padding for the content within the horizontal scroll view */}
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>See</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>More...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😋</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#25be8a',
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: '#D7e6e1',
    borderRadius: 6,
    marginHorizontal: 6,
    elevation: 3, // Adjust the elevation value to change the raised effect
  },
  cardElevated: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default ElevatedCards;
