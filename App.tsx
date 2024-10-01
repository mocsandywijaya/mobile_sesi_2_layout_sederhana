import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

// Data untuk produk
const products = [
  { id: '1', name: 'Cappuccino', price: '4.53', image: require('./src/images/cappuccino.jpg'), rating: 4.6 },
  { id: '2', name: 'Latte', price: '3.90', image: require('./src/images/latte.jpg'), rating: 4.5 },
  { id: '3', name: 'Macchiato', price: '4.80', image: require('./src/images/macchiato.jpg'), rating: 4.7 },
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.location}>indonesian, Sukabumicoffee</Text>
        </View>
        <Image source={require('./src/images/avatar.jpg')} style={styles.avatar} />
      </View>

      {/* Search Bar */}
      <TextInput 
        style={styles.searchInput} 
        placeholder="Search coffee" 
      />

      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image source={require('./src/images/banner.jpg')} style={styles.bannerImage} />
        <Text style={styles.bannerText}>Buy one get one FREE</Text>
      </View>

      {/* Scrollable Tab */}
      <ScrollView horizontal={true} style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Cappuccino</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Macchiato</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text style={styles.tabText}>Latte</Text></TouchableOpacity>
      </ScrollView>

      {/* Product List */}
      <FlatList 
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  bannerContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  bannerText: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    borderRadius: 5,
  },
  tabContainer: {
    marginBottom: 20,
  },
  tab: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  tabText: {
    fontSize: 16,
  },
  productCard: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default App;
