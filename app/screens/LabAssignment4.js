import React from 'react';
import { SafeAreaView } from 'react-native';
import Task from '../Assignment4Components/App';
import { Button, View } from 'react-native-web';



function LabAssignment4({navigation}) {
  return (
    <SafeAreaView>
        <Task />
        <View style={{alignItems: 'center'}}>
          <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
          />
        </View>
    </SafeAreaView>
  );
}

export default LabAssignment4;
