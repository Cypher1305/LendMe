import "react-native-gesture-handler";
import Navigation from "./navigation/Navigation";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
