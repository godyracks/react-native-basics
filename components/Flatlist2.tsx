import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Flatlist2 = () => {
  const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.card, styles.blueCard]}>
      <Text style={styles.headText}>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
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

export default Flatlist2;
