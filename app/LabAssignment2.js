import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './Assignment2Components/ToDoList';
import ToDoForm from './Assignment2Components/ToDoForm';



function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
