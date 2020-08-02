import React, { useState, useEffect } from "react";
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  AsyncStorage,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../services/api";
import logo from "../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [techs, setTechs] = useState("");

  const { reset } = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem("user").then((user) => {
      if (user) {
        reset({
          index: 0,
          routes: [{ name: "List" }],
        });
      }
    });
  }, []);

  async function handleSubmit() {
    const { data } = await api.post("/sessions", {
      email,
    });

    await AsyncStorage.multiSet([
      ["user", data._id],
      ["techs", techs],
    ]);

    reset({
      index: 0,
      routes: [{ name: "List" }],
    });
  }

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === "ios"}
      behavior="padding"
      style={styles.container}
    >
      <Image source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL*</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>TECNOLOGIAS *</Text>
        <TextInput
          style={styles.input}
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Encontrar spots</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30,
  },
  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 30,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },
  button: {
    height: 42,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
