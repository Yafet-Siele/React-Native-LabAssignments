import { SafeAreaView } from 'react-native';
import ToDoList from '../Assignment2Components/ToDoList';
import ToDoForm from '../Assignment2Components/ToDoForm';
import { Button, View } from 'react-native-web';



function LabAssignment2({navigation}) {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
      <View style= {{alignItems:'center', marginTop: '10px'}}>
        <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        />
      </View>
      
    </SafeAreaView>
  );
}

export default LabAssignment2;
