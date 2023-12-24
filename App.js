import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens, tabs, screensTransparent } from "./src/navigations";
import { Purplerose2 } from "./src/constants";
import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_500Medium,
} from "@expo-google-fonts/quicksand";
import { useEffect } from "react";
import SvgUri from "react-native-svg-uri";
import useStore from "./src/store";
import { GetStorage } from "./src/hooks/api";
import { useNavigation } from '@react-navigation/native';



// setLogLevel('debug');

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabMain = () => {
  const user = useStore(state => state.user)
  const setUser = useStore(state => state.setUser)
  const navigation = useNavigation();


  useEffect(() => {
    GetStorage()
      .then(token => {
        if (!token) {
          navigation.navigate("Auth")
        }
        else {
          setUser(token)
        }
      })
  }, [setUser]);


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {tabs.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <SvgUri source={item.icon} fill={focused ? color : "gray"} />
            ),
            tabBarLabelStyle: {
              textTransform: "none",
              fontSize: 10,
              fontFamily: "Quicksand_700Bold",
            },
            tabBarActiveTintColor: Purplerose2,
            tabBarInactiveTintColor: "gray",
            headerShown: true,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({ Quicksand_700Bold, Quicksand_500Medium });
  if (!fontsLoaded) {
    return null;
  }


  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="main">
          {/* <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="main"
            component={TabMain}
            options={{ headerShown: false }}
          />
          {screens.map((sc) => (
            <Stack.Screen
              key={sc.name}
              name={sc.name}
              component={sc.component}
              options={{ headerShown: true, headerTintColor: Purplerose2 }}
            />
          ))}
          {screensTransparent.map((sc) => (
            <Stack.Screen
              key={sc.name}
              name={sc.name}
              component={sc.component}
              options={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: "",
                headerTintColor: Purplerose2,
              }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>

  );
}
