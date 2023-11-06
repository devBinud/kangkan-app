import 
{ StyleSheet, 
  Text, 
  SafeAreaView,
  Image, 
  KeyboardAvoidingView, 
  View, 
  TextInput, 
  TouchableOpacity  } 
from 'react-native'
import React, { useState } from 'react';
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const[email,setEmail]=useState("");
  const[password, setPassword] = useState("");
  const navigation=useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 55,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text></Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                color: "#535655",
                fontWeight: "500",
                marginRight: 4,
                letterSpacing: 1,
              }}
            >
              SKIP
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              marginTop: 12,
              color: "#222329",
            }}
          >
            Login
          </Text>
          <Text
            style={{
              fontSize: 13,
              marginTop: 6,
              color: "#535655",
            }}
          >
            Please enter your email and password
          </Text>
        </View>
        <View style={{ marginTop: 60 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#F9F9F9",
              paddingVertical: 5,
              borderWidth: 0.4,
              borderColor: "rgba(17, 17, 17, 0.35)",
              borderRadius: 7,
            }}
          >
            <SimpleLineIcons
              name="envelope"
              size={19}
              color="#535655"
              style={{ marginLeft: 10 }}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "#535655",
                marginVertical: 10,
                width: 300,
                marginLeft: 5,
                fontSize: email ? 15 : 15,
              }}
              placeholder="Email or Phone No"
            ></TextInput>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#F9F9F9",
              paddingVertical: 5,
              borderWidth: 0.4,
              borderColor: "rgba(17, 17, 17, 0.35)",
              borderRadius: 7,
              marginTop: 8,
            }}
          >
            <Ionicons
              name="key-outline"
              style={{ marginLeft: 8 }}
              size={22}
              color="#535655"
            />
            <TextInput
              value={password}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              style={{ color: "#535655", marginVertical: 10, width: 300 }}
              placeholder="Enter Your Password"
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            marginTop: 8,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text></Text>
          <Text style={{ color: "#007fff", fontWeight: "400" }}>
            Forgot Password ?
          </Text>
        </View>
        <View style={{ marginTop: 50 }} />
        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          style={{
            width: 350,
            backgroundColor: "#b94747",
            borderRadius: 4,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 14,
          }}
        >
          <Text
            style={{
              alignItems: "center",
              textAlign: "center",
              color: "#fff",
              fontSize: 16,
              letterSpacing: 1,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 20, textAlign: "center" }}>
          <Text
            style={{ fontWeight: 600, textAlign: "center", color: "#535655" }}
          >
            OR
          </Text>
        </View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#F9F9F9",
              borderWidth: 0.4,
              borderColor: "rgba(17, 17, 17, 0.35)",
              borderRadius: 6,
              padding: 14,
            }}
          >
            <View>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../assets/google.png")}
              />
            </View>
            <Text style={{ fontSize: 16, marginLeft: 2, color: "#535655" }}>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 12 }}
        >
          <Text style={{ textAlign: "center", color: "#535655", fontSize: 15 }}>
            Don't have an account ?
            <Text style={{ color: "#b94747" }}> Sign up</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({})