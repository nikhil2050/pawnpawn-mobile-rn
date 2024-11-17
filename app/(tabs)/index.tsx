import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import TopBar from '@/components/pawnpawn/TopBar';
import HorizontalList from '@/components/pawnpawn/HorizontalScrollList';

const products = [
  {
    id: 1,
    name: 'Exclusive Sunglasses',
    price: '120.00',
    image: require('../../assets/images/sunglasses.jpg'),
  },
  {
    id: 2,
    name: 'Luxury Handbag',
    price: '850.00',
    image: require('../../assets/images/handbag.jpeg'),
  },
  {
    id: 3,
    name: 'Exclusive Sunglasses',
    price: '120.50',
    image: require('../../assets/images/sunglasses.jpg'),
  },
  {
    id: 4,
    name: 'Luxury Handbag',
    price: '850.00',
    image: require('../../assets/images/handbag.jpeg'),
  },
  {
    id: 5,
    name: 'Exclusive Sunglasses',
    price: '120.50',
    image: require('../../assets/images/sunglasses.jpg'),
  },
  {
    id: 6,
    name: 'Luxury Handbag',
    price: '850.00',
    image: require('../../assets/images/handbag.jpeg'),
  },
];

export default function ProductManagement() {
  const router = useRouter();

  return (
    <View style={{flex:1, backgroundColor:"white", }}>
      { /* GREETINGS */ }
      <TopBar/>

      <ScrollView style={styles.container}>
        { /* Categories */ }
        <HorizontalList />

        <Text style={styles.header}>Personal Collection</Text>
        <View style={styles.grid}>
          {products.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.card}
              onPress={() => router.push(`../product/${product.id}`)}
            >
              <Image source={product.image} style={styles.image} />
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.price}>${product.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    marginBottom: 16,
    padding: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    width: '48%',
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    color: '#e94560',
  },
});
