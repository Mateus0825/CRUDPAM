import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FA"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333"
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#FFF"
  },

  card: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 }
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222"
  },

  email: {
    color: "#666",
    marginTop: 3
  }

});