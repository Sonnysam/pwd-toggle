import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginCont}>
        <Text style={tw`text-xl font-bold text-center mb-2`}>
          Password Visibility Toggle
        </Text>
        <View
          style={[styles.input, tw`flex flex-row items-center justify-between`]}
        >
          <TextInput
            placeholder="Password"
            placeholderTextColor="#000"
            value={password}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={showPassword}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={togglePassword}>
            {showPassword ? (
              <Entypo name="eye" size={24} color="black" />
            ) : (
              <Entypo name="eye-with-line" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B5D5C5",
    alignItems: "center",
    justifyContent: "center",
  },
  loginCont: {
    width: "80%",
    marginTop: 30,
  },
  input: {
    width: "100%",
    height: 55,
    borderColor: "#fff",
    borderWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    marginTop: 12,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 17,
    color: "#000",
    backgroundColor: "#fff",
  },
});
