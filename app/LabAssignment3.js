import { SafeAreaView } from "react-native-safe-area-context";
import ToDoForm from "./Assignment3Components/ToDoForm"
import ToDoList from "./Assignment3Components/ToDoList"

const App = () => {
    return(
        <SafeAreaView>
            <ToDoForm />
            <ToDoList />
        </SafeAreaView>
    );
}

export default App;