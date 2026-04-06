import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";

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

  const filteredPeople = people.filter((p) =>
    `${p.firstName} ${p.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Pessoas</Text>

      <View style={{
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,

        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 }
      }}>

        <Text style={{
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 8,
          color: "#333"
        }}>
          Buscar Pessoa
        </Text>

        <TextInput
          placeholder="Buscar"
          value={search}
          onChangeText={setSearch}
          style={{
            borderWidth: 1,
            borderColor: "#DDD",
            padding: 12,
            borderRadius: 10,
            backgroundColor: "#F9F9F9"
          }}
        />

      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#4CAF50",
          padding: 12,
          borderRadius: 10,
          marginBottom: 10
        }}
        onPress={() => navigation.navigate("AddEdit")}
      >
        <Text style={{ color: "#FFF", textAlign: "center", fontWeight: "bold" }}>
          + Adicionar Pessoa
        </Text>
      </TouchableOpacity>

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
        <TouchableOpacity
          style={{
            backgroundColor: "#2196F3",
            padding: 8,
            borderRadius: 6,
            marginBottom: 5
          }}
          onPress={() => navigation.navigate("AddEdit", { person: item })}
        >
          <Text style={{ color: "#FFF" }}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#F44336",
            padding: 8,
            borderRadius: 6
          }}
          onPress={async () => {
            await deletePerson(item.id);
            loadPeople();
          }}
        >
          <Text style={{ color: "#FFF" }}>Deletar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}