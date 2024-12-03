import { SafeAreaView } from "react-native";
import { Button, View } from "react-native-web";

function LabAssignment1({navigation}){
    return(
        <SafeAreaView>
            
            <p>I named this React-Native-LabAssignments instead of Incredible Todo List App.</p> <p> This repo will be where All my assignments will be pushed.</p>
            <View style={{alignItems: 'center'}}>
                <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
                />
            </View>
        </SafeAreaView>
    )
}

export default LabAssignment1;