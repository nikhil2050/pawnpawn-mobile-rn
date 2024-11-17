import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import TopBar from '@/components/pawnpawn/TopBar';
import HorizontalList from '@/components/pawnpawn/HorizontalScrollList';
import ProductsGrid from '@/components/pawnpawn/ProductsGrid';
import { useState } from 'react';

// Category interface can be defined in a shared file or here
interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: 'business', name: 'Business', icon: 'briefcase' },
  { id: 'tech', name: 'Tech', icon: 'hardware-chip' },
  { id: 'design', name: 'Design', icon: 'build' },
  { id: 'business2', name: 'Business', icon: 'briefcase' },
  { id: 'tech2', name: 'Tech', icon: 'hardware-chip' },
  { id: 'design2', name: 'Design', icon: 'build' },
  { id: 'business3', name: 'Business', icon: 'briefcase' },
  { id: 'tech3', name: 'Tech', icon: 'hardware-chip' },
  { id: 'design3', name: 'Design', icon: 'build' },
];

export default function ProductManagement() {
  // const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState('business');

  return (
    <View style={{flex:1, backgroundColor:"white", }}>
      { /* GREETINGS */ }
      <TopBar/>

      <ScrollView style={styles.container}>
        { /* Categories */ }
        <HorizontalList 
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}/>

        <ProductsGrid />
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
});
