#  Testika

> **Crie quizzes em tempo real, participe usando códigos e torne qualquer assunto mais divertido.**

##  Sobre o Projeto

O Testika é uma plataforma educacional desenvolvida para tornar o processo de ensino e aprendizagem mais dinâmico, interativo e envolvente.

A aplicação permite que professores criem quizzes personalizados para seus alunos, organizem salas de participação em tempo real e acompanhem o desempenho dos participantes através de estatísticas e relatórios.

Os alunos podem entrar em salas utilizando um código de acesso e responder às perguntas propostas, competindo de forma saudável enquanto aprendem.

---

##  Objetivos

* Tornar o aprendizado mais interativo.
* Incentivar a participação dos alunos.
* Facilitar a criação de avaliações rápidas.
* Permitir o acompanhamento do desempenho individual e coletivo.
* Utilizar elementos de gamificação para aumentar o engajamento.

---

##  Arquitetura do Projeto

O projeto foi dividido em duas aplicações independentes:

### Frontend

Responsável pela interface do usuário.

Tecnologias:

* React
* Vite
* CSS Modules
* React Router
* Framer Motion
* React Icons

### Backend

Responsável pelas regras de negócio e persistência dos dados.

Tecnologias:

* Java
* Spring Boot
* Spring Data JPA
* MySQL
* Maven

---

##  Estrutura do Projeto

```text
Testika
│
backend/
│
├── controller/
│   ├── QuizController
│   ├── SalaController
│   └── UsuarioController
│
├── dto/
│   ├── request/
│   └── response/
│
├── entity/
│   ├── AlternativaEntity
│   ├── JogadorEntity
│   ├── PerguntaEntity
│   ├── QuizEntity
│   ├── SalaEntity
│   └── UsuarioEntity
│
├── enums/
│
├── repository/
│
├── service/
│   ├── QuizService
│   ├── SalaService
│   └── UsuarioService
│
└── TestikaApplication

frontend/
│
├── components/
│   ├── Footer
│   ├── Layout
│   └── Navbar
│
├── context/
│   └── Auth.jsx
│
├── pages/
│   ├── About
│   ├── Home
│   ├── Pricing
│   ├── QuestionBank
│   └── Room
│
├── routes/
│   └── AppRoutes.jsx
│
├── styles/
│   ├── globals.css
│   └── variables.css
│
├── App.jsx
└── main.jsx
```

---

##  Como Funciona

### Fluxo do Professor

1. Realiza login na plataforma.
2. Cria um novo quiz.
3. Adiciona perguntas e alternativas.
4. Cria uma sala.
5. Compartilha o código da sala com os alunos.
6. Acompanha os resultados em tempo real.
7. Analisa estatísticas e desempenho após o término da atividade.

### Fluxo do Aluno

1. Acessa a plataforma.
2. Digita o código da sala.
3. Entra na sessão criada pelo professor.
4. Responde às perguntas apresentadas.
5. Visualiza sua pontuação e posição no ranking.

---

##  Páginas da Aplicação

### Home

Página inicial da plataforma.

Funcionalidades:

* Apresentação do projeto.
* Campo para entrada de código de sala.
* Informações sobre a plataforma.
* Estatísticas.
* Navegação para demais páginas.

---

### Sobre

Página institucional.

Conteúdo:

* História do projeto.
* Objetivos.
* Missão.
* Equipe de desenvolvimento.
* Perguntas frequentes.

---

### Planos

Página destinada à apresentação dos planos disponíveis.

Conteúdo:

* Comparação de recursos.
* Benefícios de cada plano.
* Informações sobre contratação.

---

### Sala de Quiz

Página utilizada durante a realização do quiz.

Funcionalidades:

* Exibição da pergunta atual.
* Temporizador.
* Alternativas de resposta.
* Ranking em tempo real.
* Lista de participantes.

---

### Dashboard do Professor

Área administrativa do professor.

Funcionalidades:

* Gerenciamento de quizzes.
* Criação de salas.
* Visualização de resultados.
* Estatísticas de desempenho.
* Histórico de atividades.

---

##  Funcionalidades Planejadas

* Cadastro e autenticação de usuários.
* Criação de quizzes personalizados.
* Salas com código de acesso.
* Participação em tempo real.
* Ranking dinâmico.
* Estatísticas de desempenho.
* Histórico de quizzes.
* Sistema de planos.
* Modo escuro e modo claro.
* Interface responsiva.
* Animações e microinterações.

---

##  Identidade Visual

### Cores Principais

| Cor               | Hex     |
| ----------------- | ------- |
| Laranja Principal | #e8590c |
| Fundo Escuro      | #1a1a1a |
| Fundo Claro       | #FFF7ED |

### Estilo

* Moderno
* Educacional
* Divertido
* Responsivo
* Focado em usabilidade

---

##  Equipe

Projeto desenvolvido para fins acadêmicos.

Integrantes:

* Natã M.
* Victor Hugo Menezes Araújo
* Fernando B.
* Emmerson G.
* Guilherme dos Santos T.
* David da Silva N.

---

##  Licença

Este projeto possui finalidade acadêmica e educacional.
