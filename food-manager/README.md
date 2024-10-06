# Gestão de Alimentos

Uma aplicação web para gestão de alimentos comprados e estocados em casa. Permite adicionar, editar e remover alimentos, além de exibir uma lista de itens armazenados.

## Tecnologias Utilizadas

- React
- CSS
- JSON Server (ou outra API) para manipulação de dados
- Hooks do React (`useState`, `useEffect`)

## Estrutura do Projeto


```
src/
│
├── components/
│   ├── Header/
│   │   ├── Header.js          // Componente para o cabeçalho da aplicação
│   │   └── Header.css         // Estilos do cabeçalho
│   │
│   ├── Footer/
│   │   ├── Footer.js          // Componente para o rodapé da aplicação
│   │   └── Footer.css         // Estilos do rodapé
│   │
│   ├── FoodForm/
│   │   ├── FoodForm.js        // Formulário para adicionar e editar alimentos
│   │   └── FoodForm.css       // Estilos do formulário
│   │
│   ├── FoodList/
│   │   ├── FoodList.js        // Lista de alimentos adquiridos
│   │   └── FoodList.css       // Estilos da lista de alimentos
│   │
│   └── FoodItem/
│       ├── FoodItem.js        // Componente para exibir cada item da lista
│       └── FoodItem.css       // Estilos do item da lista
│
├── styles/
│   ├── App.css                // Estilos gerais da aplicação
│
└── App.js                     // Componente principal da aplicação

```


## Funcionalidades

- **Adicionar Alimentos:** Permite cadastrar novos alimentos com nome, quantidade, unidade de medida e imagem.
- **Editar Alimentos:** Permite editar informações de alimentos já cadastrados.
- **Remover Alimentos:** Permite remover alimentos da lista.
- **Listar Alimentos:** Exibe uma lista de todos os alimentos cadastrados com suas respectivas informações.

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de que você tenha o Node.js instalado. Você pode baixar a última versão em [nodejs.org](https://nodejs.org/).

### Passos

#### Clone o repositório:

````bash
git clone https://github.com/seu_usuario/gestao-de-alimentos.git
````
#### Navegue até o diretório do projeto:

````bash

cd gestao-de-alimentos
````
#### Instale as dependências:

````bash

npm install
````
#### Suba o servidor JSON:

Para usar o json-server, instale-o globalmente se ainda não o fez:

````bash

npm install -g json-server
````
#### Crie um arquivo db.json na raiz do projeto e adicione um exemplo de estrutura de dados:

````json

{
  "foods": []
}
````
#### Inicie o servidor JSON:

````bash

npm run server
````
#### Execute a aplicação:

````bash

npm start
````
### Abra o navegador e acesse http://localhost:3000 para a aplicação e http://localhost:5000 para a API.

### Contribuições
Sinta-se à vontade para enviar pull requests ou abrir issues para melhorias e correções.

Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

### Contato
Se você tiver alguma dúvida ou sugestão, entre em contato:

Email: dossantosgss@gmail.com
