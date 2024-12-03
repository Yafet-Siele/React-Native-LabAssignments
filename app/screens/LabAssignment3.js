import { SafeAreaView } from "react-native-safe-area-context";
import ToDoForm from "../Assignment3Components/ToDoForm"
import ToDoList from "../Assignment3Components/ToDoList"
import { Button } from 'react-native-web';


function LabAssignment3({navigation}) {
    return(
        <SafeAreaView style={{alignItems: 'center'}}>
            <ToDoForm />
            <ToDoList />
            <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
            />
        </SafeAreaView>
    );
}

export default LabAssignment3;