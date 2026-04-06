import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, TextInput } from "react-native";

import { styles } from "../styles/styles";
import { deletePerson, getPeople } from "../servers/peopleCrud";

export default function HomeScreen({ navigation }) {

  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");

  async function loadPeople() {
    const data = await getPeople();
    setPeople(data);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadPeople);
    return unsubscribe;
  }, [navigation]);

  // buscar
  const filteredPeople = people.filter((p) =>
    `${p.firstName} ${p.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Pessoas</Text>

      {/* 🔍 INPUT DE BUSCA */}
      <TextInput
        placeholder="Buscar pessoa..."
        value={search}
        onChangeText={setSearch}
        style={{
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
          borderRadius: 8
        }}
      />

      <Button
        title="Adicionar Pessoa"
        onPress={() => navigation.navigate("AddEdit")}
      />

      <FlatList
        data={filteredPeople}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardPersonal
            item={item}
            navigation={navigation}
            loadPeople={loadPeople}
          />
        )}
      />
    </View>
  );
}

// componente para exibir cada pessoa
function CardPersonal({ item, navigation, loadPeople }) {

  return (
    <View style={styles.card}>

      <View>
        <Text style={styles.name}>
          {item.firstName} {item.lastName}
        </Text>

        <Text style={styles.email}>
          {item.email}
        </Text>
      </View>

      <View>
        <Button
          title="Editar"
          onPress={() => navigation.navigate("AddEdit", { person: item })}
        />

        <Button
          title="Deletar"
          onPress={async () => {
            await deletePerson(item.id);
            loadPeople();
          }}
        />
      </View>

    </View>
  );
}