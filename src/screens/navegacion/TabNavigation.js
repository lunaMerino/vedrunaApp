import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen, SettingsScreen } from "../tabs/index";

export function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    // crea la barra de navegación inferior
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#282828" },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#aaa",
      }}
    >
      <Tab.Screen
        name="Publicaciones"
        component={ HomeScreen }

        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Ajustes"
        component={ SettingsScreen }

        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
