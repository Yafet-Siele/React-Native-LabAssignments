import React from 'react';
import { Text, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { View } from 'react-native-web';

const AboutScreen = ({ navigation }) => {
  const date = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={{marginBottom: '20px', alignItems: 'center'}}>
        <Text>App Name: Lab Assignments</Text>
        <Text>Developed by: Yafet Siele</Text>
        <Text>Current Date: {date}</Text>
      </View>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </MainLayout>
  );
};

export default AboutScreen;
