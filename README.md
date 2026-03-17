# PonteBack - API Ponte Juridica

## Primeiro passo (obrigatorio)
Antes de qualquer coisa, rode nesta ordem:

1. `docker-compose up` (sobe o banco MySQL)
2. `npm run start:dev` **ou** `npm start` (sobe a API conectada ao banco)

## Sobre o projeto
Este projeto e uma API backend em **NestJS** para uma plataforma juridica.
Ela gerencia:

- clientes
- advogados
- planos
- vinculos entre clientes e advogados

A API usa **TypeORM** com **MySQL** e organiza o codigo por modulos.

## O que a API faz
A API disponibiliza CRUD para os principais recursos:

- `/users`: cadastro e gestao de clientes
- `/advogados`: cadastro e gestao de advogados
- `/planos`: cadastro e gestao de planos
- `/clienteadvogado`: vinculacao entre cliente e advogado

### Endpoints da API
Base URL local: `http://localhost:3000`

#### Users (clientes)
| Metodo | Rota | Descricao |
| --- | --- | --- |
| GET | `/users` | Lista todos os clientes |
| GET | `/users/:id` | Busca um cliente por ID |
| POST | `/users` | Cria um novo cliente |
| PUT | `/users/:id` | Atualiza um cliente existente |
| DELETE | `/users/:id` | Remove um cliente |

#### Advogados
| Metodo | Rota | Descricao |
| --- | --- | --- |
| GET | `/advogados` | Lista todos os advogados |
| GET | `/advogados/:id` | Busca um advogado por ID |
| POST | `/advogados` | Cria um novo advogado |
| PUT | `/advogados/:id` | Atualiza um advogado existente |
| DELETE | `/advogados/:id` | Remove um advogado |

#### Planos
| Metodo | Rota | Descricao |
| --- | --- | --- |
| GET | `/planos` | Lista todos os planos |
| GET | `/planos/:id` | Busca um plano por ID |
| POST | `/planos` | Cria um novo plano |
| PUT | `/planos/:id` | Atualiza um plano existente |
| DELETE | `/planos/:id` | Remove um plano |

#### ClienteAdvogado (vinculos)
| Metodo | Rota | Descricao |
| --- | --- | --- |
| GET | `/clienteadvogado` | Lista todos os vinculos cliente x advogado |
| GET | `/clienteadvogado/:id` | Busca um vinculo por ID |
| POST | `/clienteadvogado` | Cria um novo vinculo |
| PUT | `/clienteadvogado/:id` | Atualiza um vinculo existente |
| DELETE | `/clienteadvogado/:id` | Remove um vinculo |

## Tecnologias utilizadas
- Node.js
- NestJS
- TypeScript
- TypeORM
- MySQL 8 (Docker)
- Docker Compose
- ESLint e Prettier

## Estrutura do projeto

```text
PonteBack/
  src/
    advogados/
    users/
    planos/
    cliente_advogado/
    app.module.ts
    main.ts
  sql/
    01-tabelas.sql
    02-dados.sql
  docker-compose.yml
  package.json
  .env
```

## Como executar

### 1) Pre-requisitos
- Node.js e npm instalados
- Docker e Docker Compose instalados

### 2) Instalar dependencias
```bash
npm install
```

### 3) Subir o banco de dados (primeiro)
```bash
docker-compose up
```

O container MySQL usa as variaveis do arquivo `.env` e executa os scripts em `./sql` automaticamente na inicializacao.

### 4) Subir a aplicacao (depois)
```bash
# desenvolvimento (watch)
npm run start:dev

# ou modo padrao
npm start
```

A API sobe por padrao em `http://localhost:3000`.

## Variaveis de ambiente
Arquivo `.env` esperado:

```env
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=senha123
DB_NAME=ponte_juridica
DB_SYNC=true
```

## Scripts uteis
- `npm run build`: gera a build
- `npm start`: inicia a aplicacao
- `npm run start:dev`: inicia em modo desenvolvimento
- `npm run start:prod`: executa build de producao
- `npm run lint`: lint com correcao
- `npm run test`: testes unitarios
- `npm run test:e2e`: testes end-to-end

## Observacoes
- Com `DB_SYNC=true`, o TypeORM sincroniza entidades automaticamente com o banco.
- Os dados iniciais do projeto sao carregados pelos scripts SQL montados no container MySQL.
