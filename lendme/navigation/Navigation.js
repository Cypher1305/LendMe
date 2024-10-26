import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Presentation from "../pages/authentifiation/Presentation";
import Login from "../pages/authentifiation/Login";
import Sign from "../pages/authentifiation/Sign";
import Home from "../pages/home/Home";
import T_Etape1 from "../pages/transfert/T_Etape1";
import T_Etape2 from "../pages/transfert/T_Etape2";
import T_Etape3 from "../pages/transfert/T_Etape3";
import Etape1 from "../pages/Prêt/Etape1";
import Etape2 from "../pages/Prêt/Etape2";
import Etape3 from "../pages/Prêt/Etape3";
import Details from "../pages/details/Details";
import depot from "../pages/depot/depot";
import OupsPage from "../pages/depot/OupsPage";
import logout from "../pages/authentifiation/Presentation"
import SuccessPage from "../pages/depot/SuccessPage";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const Navigation = ({ navigation }) => {
  const { navigate } = useContext(AuthContext);

  // const [fontsLoaded] = useFonts({
  //   "Inter-Black": require("../assets/fonts/Inter-Black.otf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      {navigate ? (
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: { fontFamily: "" },
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "white",
              height: 100,
            },
            headerRight: () => (
              <Image
                source={require("../assets/img_Users/user_default.png")}
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 18,
                }}
              />
            ),
          }}
        >
          <Stack.Screen name="Accueil" component={Home} options={{}} />
          <Stack.Screen name="T_Numero" component={T_Etape1} />
          <Stack.Screen name="T_Montant" component={T_Etape2} />
          <Stack.Screen name="T_Validate" component={T_Etape3} />
          <Stack.Screen name="Etape1" component={Etape1} />
          <Stack.Screen name="Etape2" component={Etape2} />
          <Stack.Screen name="Etape3" component={Etape3} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="depot" component={depot} />
          <Stack.Screen name="SuccessPage" component={SuccessPage} />
          <Stack.Screen name="OupsPage" component={OupsPage} />
          <Stack.Screen name="logout" component={logout} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Presentation"
            component={Presentation}
            options={{
              headerTitle: "",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: "",
            }}
          />
          <Stack.Screen
            name="Sign"
            component={Sign}
            options={{
              headerTitle: "",
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
