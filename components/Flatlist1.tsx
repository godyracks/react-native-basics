import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Flatlist = () => {
  return (
    <View>
      <Text style={styles.headText}>Flat Cards</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  headText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#25be8a',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    height: 200,
    width: 200,
    borderRadius: 6,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#171717'
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
