# Backend - API de Unidades Básicas de Saúde (UBS)

## Descrição

Este repositório contém o backend da aplicação para o gerenciamento de **Unidades Básicas de Saúde (UBS)** de Juazeiro do Norte-CE. A API foi desenvolvida com **Node.js** e **Express** e permite a interação com dados relacionados às UBS, médicos, campanhas de vacinação e autenticação básica de usuários.

## Tecnologias Utilizadas

- **Node.js** (JavaScript no lado do servidor)
- **Express** (Framework para construção da API)
- **Multer** (Middleware para upload de arquivos, caso seja necessário)
- **Basic Authentication** (Autenticação simples para proteção de rotas administrativas)
- **JSON** (Dados simulados para desenvolvimento)
- **Google Maps API** (Para integrar a localização das UBS)

## Instalação

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

### Passos para Instalar e Rodar o Backend

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/jotacarvalh0/UBS-Beckend.git
   cd UBS-Beckend

2. **Instale as dependências: Dentro da pasta do projeto, execute**:
   ```bash
   npm install

3. **Inicie o servidor**:
- Em modo normal:
  ```
  npm start
  ```
- Em modo de desenvolvimento (com hot-reloading):
  ```
  npm run dev
  ```

4. **A API estará rodando em**: `http://localhost:3000`

## Estrutura do Projeto

A estrutura do backend é organizada da seguinte maneira:
/src
  /controllers      # Contém as funções de controle das rotas (UBS, Médicos, Campanhas)
  /data             # Contém dados mockados (ubsData.js, medicosData.js, campanhasData.js)
  /middlewares      # Middleware para autenticação e outras funções
  /routes           # Define as rotas da API
  server.js         # Arquivo principal do servidor, onde a aplicação é iniciada


## Dependências

Este projeto utiliza as seguintes dependências:

- **express**: Framework para criação da API.
- **multer**: Middleware para upload de arquivos (não utilizado no momento, mas pode ser expandido).
- **body-parser**: Middleware para parseamento de corpo de requisição (incluído no Express).
- **jsonwebtoken**: Caso você queira expandir a autenticação no futuro.
- **dotenv**: Para carregar variáveis de ambiente, caso necessário.

## Como Usar a API

**Endpoints Disponíveis**

Abaixo estão os principais endpoints da API:

#### Login (Autenticação)

- **POST /login**: Realiza login usando autenticação básica.
  - Exemplo:
    - **Body**:
      ```
      {
        "username": "admin",
        "password": "senha123"
      }
      ```

#### UBS

- **GET /api/ubs**: Retorna uma lista de todas as UBS.
- **GET /api/ubs/:id**: Retorna detalhes de uma UBS específica.

#### Médicos

- **GET /api/ubs/:id/medicos**: Retorna a lista de médicos de uma UBS específica.
- **POST /api/ubs/:id/medicos**: Adiciona um novo médico a uma UBS.
  - **Body**:
    ```
    {
      "nome": "Dr. João",
      "especialidade": "Pediatria",
      "horario_atendimento": "08:00 - 12:00",
      "telefone": "999999999"
    }
    ```
- **PUT /api/ubs/:id/medicos/:medicoId**: Atualiza os dados de um médico.
- **DELETE /api/ubs/:id/medicos/:medicoId**: Exclui um médico de uma UBS.

#### Campanhas

- **GET /api/ubs/:id/campanhas**: Retorna a lista de campanhas de uma UBS específica.
- **POST /api/ubs/:id/campanhas**: Adiciona uma nova campanha de vacinação a uma UBS.
  - **Body**:
    ```
    {
      "nome": "Vacinação contra a gripe",
      "descricao": "Campanha para vacinação contra a gripe",
      "data_inicio": "2024-01-01",
      "data_fim": "2024-02-01"
    }
    ```
- **PUT /api/ubs/:id/campanhas/:campanhaId**: Atualiza os dados de uma campanha.
- **DELETE /api/ubs/:id/campanhas/:campanhaId**: Exclui uma campanha de vacinação de uma UBS.

## Middleware de Autenticação

A autenticação básica é implementada para proteger as rotas de administração (médicos e campanhas). As credenciais padrão são:

- **Username**: admin
- **Password**: senha123

Caso as credenciais não correspondam, será retornado um erro 401 Unauthorized.

## Considerações Finais

- **Dados Mockados**: Neste momento, a aplicação usa dados mockados (em arquivos `.js` dentro da pasta `/data`). Futuramente, você pode conectar o sistema a um banco de dados real.
- **Autenticação**: A autenticação foi implementada de maneira simples, usando basic auth. Em uma versão futura, pode-se adicionar JWT (JSON Web Tokens) para uma autenticação mais robusta.



