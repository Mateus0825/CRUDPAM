import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "../styles/styles";
import { createPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {
  const person = route.params?.person;

  const [firstName, setFirstName] = useState(person?.firstName || "");
  const [lastName, setLastName] = useState(person?.lastName || "");
  const [email, setEmail] = useState(person?.email || "");

  async function save() {
    try {
      const data = { firstName, lastName, email };

      if (person) {
        await updatePerson(person.id, data);
      } else {
        await createPerson(data);
      }

      navigation.goBack();
    } catch (error) {
      console.log("ERRO AO SALVAR:", error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="Salvar" onPress={save} />

      <Button title="Cancelar" onPress={() => navigation.goBack()} />
    </View>
  );
}