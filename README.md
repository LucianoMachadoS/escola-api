# 🎓 Escola API

API REST para gerenciamento de alunos de uma escola, com autenticação JWT, CRUD completo e upload de fotos.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=flat&logo=sequelize&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=flat&logo=mariadb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)

## ✨ Funcionalidades

- Cadastro, edição e exclusão de usuários (senha criptografada com **bcrypt**)
- Login com geração de **token JWT** com tempo de expiração
- CRUD de alunos — rotas de escrita protegidas por middleware de autenticação
- Upload de fotos dos alunos com **Multer** (validação de tipo de arquivo)
- Listagem de alunos já com suas fotos (relacionamento 1:N)
- Banco versionado com **migrations** e **seeds** do Sequelize
- Variáveis sensíveis isoladas em `.env`

## 🧱 Arquitetura

```
src/
├── config/        # banco, multer e URL da aplicação
├── controllers/   # regras de cada recurso (User, Aluno, Photo, Token)
├── database/      # conexão, migrations e seeds
├── middlewares/   # loginRequired (valida o JWT)
├── models/        # models Sequelize (User, Aluno, Photo)
└── routes/        # rotas separadas por recurso
```

Padrão MVC com controllers por recurso e rotas separadas.

## 🔌 Endpoints

| Método | Rota | Auth | Descrição |
|---|---|:---:|---|
| POST | `/tokens` | — | Faz login e devolve o token |
| POST | `/users` | ✅ | Cria usuário |
| PUT | `/users` | ✅ | Atualiza o usuário logado |
| DELETE | `/users` | ✅ | Remove o usuário logado |
| GET | `/alunos` | — | Lista alunos com fotos |
| GET | `/alunos/:id` | — | Mostra um aluno |
| POST | `/alunos` | ✅ | Cria aluno |
| PUT | `/alunos/:id` | ✅ | Atualiza aluno |
| DELETE | `/alunos/:id` | ✅ | Remove aluno |
| POST | `/photos` | ✅ | Envia foto de um aluno (multipart) |

Rotas com ✅ exigem o cabeçalho `Authorization: Bearer <token>`.

## 🚀 Como rodar

Pré-requisitos: Node.js 18+ e um MariaDB/MySQL rodando.

```bash
git clone https://github.com/LucianoMachadoS/escola-api.git
cd escola-api
npm install
```

Crie um arquivo `.env` na raiz:

```env
DATABASE=escola
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=sua_senha
TOKEN_SECRET=um_segredo_bem_grande
TOKEN_EXPIRATION=7d
```

Crie as tabelas e dados iniciais, depois suba o servidor:

```bash
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```

A API fica em `http://localhost:3001`.

## 📚 O que aprendi

Estruturar uma API em camadas, proteger rotas com JWT, relacionar tabelas com Sequelize, versionar o banco com migrations e tratar upload de arquivos.

---
Projeto desenvolvido no curso [JavaScript e TypeScript do básico ao avançado](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/) (Luiz Otávio Miranda, Udemy).
Feito por [Luciano Machado](https://github.com/LucianoMachadoS)
