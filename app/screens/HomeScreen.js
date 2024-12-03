import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';


const HomeScreen = ({ navigation}) => {
  return (
    <MainLayout>
      
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: '20px'}}>All Lab Assignments (including Lab 5)</Text>
        <Button
          title="Go to LabAssignment1"
          onPress={() => navigation.navigate('LabAssignment1')} 
        />
        <Button
          title="Go to LabAssignment2"
          onPress={() => navigation.navigate('LabAssignment2')} 
        />
        <Button
          title="Go to LabAssignment3"
          onPress={() => navigation.navigate('LabAssignment3')} 
        />
        <Button
          title="Go to LabAssignment4"
          onPress={() => navigation.navigate('LabAssignment4')} 
        />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')} 
        />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
});

export default HomeScreen;
