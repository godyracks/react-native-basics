import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Flatlist = () => {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <View style={[styles.card, styles.blueCard]}>
          <Text style={styles.headText}>FlatList</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
          <Text style={styles.headText}>FlatList</Text>
        </View>
        <View style={[styles.card, styles.redCard]}>
          <Text style={styles.headText}>FlatList</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    height: 300,
    width: 300,
    borderRadius: 6,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueCard: {
    backgroundColor: '#2596be',
  },
  greenCard: {
    backgroundColor: '#25be8a',
  },
  redCard: {
    backgroundColor: '#Be3425',
  },
});

export default Flatlist;
