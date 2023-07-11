import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
    <Text style={styles.headingTitle}>Popular Destinations</Text>
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://images.unsplash.com/photo-1591081658714-f576fb7ea3ed?ixlib=rb-4.0.3',
          }}
        />
      </View>
      <Text style={styles.cardTitle}>
        The Amazon
      </Text>
      <Text style={styles.infoText}>
        Discover the most popular destinations around the world.
      </Text>
      <Text style={styles.cardFooter}>
        2 mins ago.
      </Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 0,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: 390,
    height: 250,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
    lineHeight: 24,
  },
  cardFooter: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    lineHeight: 24,
  },
});


export default FancyCard