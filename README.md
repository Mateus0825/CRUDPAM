# 📱 Projeto CRUD com React Native e API REST

Este aplicativo mobile foi desenvolvido em **React Native** para demonstrar funcionalidades completas de CRUD (Create, Read, Update, Delete). O projeto utiliza uma **API REST local** simulada pelo **JSON Server**, permitindo o gerenciamento de dados de forma dinâmica.

---

## 👨‍💻 Autor

**Mateus Pinheiro Silva**

---

## 🚀 Funcionalidades

- ✅ **Listar:** Visualização de todas as pessoas cadastradas.
- ➕ **Adicionar:** Cadastro de novos registros na base de dados.
- ✏️ **Editar:** Atualização de informações de pessoas existentes.
- ❌ **Deletar:** Remoção de registros da API.
- 🔍 **Buscar:** Filtro de busca de pessoas pelo nome.

---

## 🛠️ Tecnologias Utilizadas

* **React Native (Expo)** - Framework para desenvolvimento mobile.
* **JavaScript** - Linguagem de programação principal.
* **JSON Server** - Ferramenta para criar uma API REST fake para testes.
* **Fetch API** - Consumo dos endpoints da API.
* **React Navigation** - Gerenciamento de rotas e navegação entre telas.

---

## 📁 Estrutura do Projeto

```text
src/
├── screens/       # Telas do app (Home, Cadastro/Edição)
├── servers/       # Configuração e chamadas da API (Axios/Fetch)
├── styles/        # Arquivos de estilização global ou por componente
App.js             # Ponto de entrada e configuração da Navegação
database.json      # Arquivo JSON que serve como banco de dados

