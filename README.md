# 🩺 Projeto Farmácia - Frontend (E-commerce)

Aplicação Web desenvolvida em **React** com **TypeScript** e **Vite**, simulando o sistema de e-commerce e gerenciamento de estoque para uma Rede Farmacêutica. O projeto consome uma API RESTful para realizar as operações de CRUD completo em Categorias e Produtos.

---

## 🚀 Funcionalidades

### 🔹 Gestão de Categorias (CRUD Completo)
- **Listagem de Categorias:** Visualização em cards dinâmicos.
- **Cadastro de Categoria:** Formulário para inserção de novas categorias no sistema.
- **Edição de Categoria:** Atualização do nome de categorias existentes.
- **Exclusão de Categoria:** Tela de confirmação e remoção no banco de dados.

### 🔹 Gestão de Produtos (Recurso Extra - `04_Extras`)
- **Vitrine e Listagem de Produtos:** Visualização dos medicamentos e cosméticos cadastrados.
- **Carrossel/Enfileiramento na Home:** Exibição rápida dos produtos diretamente na página inicial.
- **Cadastro e Edição de Produtos:** Formulário completo vinculado às categorias cadastradas, definindo nome, preço e foto do produto.
- **Exclusão de Produtos:** Confirmação e exclusão dinâmica.

### 🔹 Recursos Globais & UX
- **Notificações em Toast (`react-hot-toast`):** Feedback visual para todas as ações do usuário (sucesso e erro em cadastros, edições e exclusões).
- **Navegação Dinâmica:** Rotas gerenciadas via React Router DOM.
- **Indicadores de Carregamento:** Loaders visuais (`react-spinners`) durante o consumo dos endpoints da API.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** + **[TypeScript](https://www.typescriptlang.org/)**
- **[Vite](https://vitejs.dev/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)**
- **[React Router DOM](https://reactrouter.com/)**
- **[Axios](https://axios-http.com/)**
- **[React Hot Toast](https://react-hot-toast.com/)**
- **[React Spinners](https://www.davidhu.io/react-spinners/)**
- **[Phosphor Icons](https://phosphoricons.com/)**

---

## 📁 Estrutura de Branches do Projeto

O desenvolvimento seguiu uma metodologia organizada em etapas/branches:

1. `01_Componente_Home_navbar_footer`: Configurações iniciais, limpeza de arquivos, Tailwind CSS e componentes estruturais (`Home`, `Navbar`, `Footer`).
2. `02_Rotas`: Implementação das rotas de navegação da aplicação utilizando o `React Router DOM`.
3. `03_CRUD_Categoria`: Criação dos Models, Services com Axios e do CRUD do recurso Categoria.
4. `04_Extras`: Implementação completa do CRUD do recurso Produtos, estilização da vitrine, integração com o `react-hot-toast` e deploy.
5. `main`: Consolidação de todas as branches testadas.

---

## 📦 Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone (https://github.com/quelbarch/projeto_final_bloco_03.git)

---

## 🌐 Deploy

A aplicação está disponível no seguinte link:
👉 **link**

---

*Desenvolvido por **Raquel** durante o bootcamp / projeto final do Bloco 3.*
