import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'; import { useSharedValue } from "react-native-reanimated/lib/typescript/Animated";


export function StackNavigationPubli() {
    const Stack = createStackNavigator();
    return (
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="A1" component={StackA} />
                <Stack.Screen name="B2" component={StackB} />
            </Stack.Navigator>
    )
}