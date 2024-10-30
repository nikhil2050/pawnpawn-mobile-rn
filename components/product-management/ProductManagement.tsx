import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import * as ImagePicker from 'react-native-image-picker';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fefefe;
  padding: 16px;
`;

const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Label = styled.Text`
  font-size: 18px;
  color: #555;
  margin-bottom: 8px;
`;

const Input = styled.TextInput`
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const UploadButton = styled.TouchableOpacity`
  background-color: #ff6961;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 20px;
`;

const UploadText = styled.Text`
  color: white;
  font-size: 16px;
`;

const ImagePreview = styled.Image`
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
  border-radius: 8px;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #4CAF50;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
`;

const SubmitText = styled.Text`
  color: white;
  font-size: 16px;
`;

const ProductManagement = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImagePick = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response?.assets?.[0]?.uri) {
        setImage(response.assets[0].uri);
      }
    });
  };

  const handlePostProduct = () => {
    // Handle the logic for posting the product to the server
    console.log('Posting product:', { productName, description, price, image });
  };

  return (
    <Container>
      <Header>Create Your Product Listing</Header>

      <Label>Product Name</Label>
      <Input
        placeholder="Enter product name"
        value={productName}
        onChangeText={setProductName}
      />

      <Label>Description</Label>
      <Input
        placeholder="Enter product description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Label>Price</Label>
      <Input
        placeholder="Enter product price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Label>Product Image</Label>
      {image ? (
        <ImagePreview source={{ uri: image }} />
      ) : (
        <UploadButton onPress={handleImagePick}>
          <UploadText>Upload Image</UploadText>
        </UploadButton>
      )}

      <SubmitButton onPress={handlePostProduct}>
        <SubmitText>Post Product</SubmitText>
      </SubmitButton>
    </Container>
  );
};

export default ProductManagement;
