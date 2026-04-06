import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";

import { styles } from "../styles/styles";
import { createPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {

  const person = route.params?.person;

  const [firstName, setFirstName] = useState(person?.firstName || "");
  const [lastName, setLastName] = useState(person?.lastName || "");
  const [email, setEmail] = useState(person?.email || "");

  async function save() {

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Erro", "Digite um email válido!");
      return;
    }

    try {
      const data = { firstName, lastName, email };

      if (person) {
        await updatePerson(person.id, data);
      } else {
        await createPerson(data);
      }

      navigation.goBack();

    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar!");
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {person ? "Editar Pessoa" : "Nova Pessoa"}
      </Text>

      <TextInput
        placeholder="Nome"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />

      <TextInput
        placeholder="Sobrenome"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#4CAF50",
          padding: 12,
          borderRadius: 10,
          marginTop: 10
        }}
        onPress={save}
      >
        <Text style={{ color: "#FFF", textAlign: "center", fontWeight: "bold" }}>
          Salvar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#999",
          padding: 12,
          borderRadius: 10,
          marginTop: 10
        }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: "#FFF", textAlign: "center" }}>
          Cancelar
        </Text>
      </TouchableOpacity>

    </View>
  );
}