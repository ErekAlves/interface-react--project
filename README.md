# Projeto React Vite

## Sobre o Projeto

Este projeto foi desenvolvido individualmente utilizando React Vite. Ele é composto por várias funcionalidades úteis e demonstra a implementação de um sistema de autenticação, um tema claro e escuro, bem como outras funcionalidades interativas como cadastro e login de usuários, cálculo matemático e busca de imagens aleatórias de cães através de uma API.

## Funcionalidades

- **Autenticação de Usuário:** Autentica o estado de login do usuário, permitindo acesso a áreas restritas do aplicativo.
- **Tema Claro e Escuro:** Permite ao usuário alternar entre tema claro e escuro, proporcionando uma experiência de usuário personalizada.
- **Cadastro e Login de Usuários:** Interfaces para cadastro e login de usuários, incluindo validação de formulários.
- **Calculadora:** Uma calculadora simples para operações matemáticas básicas.
- **Busca de Imagens de Cães:** Busca imagens aleatórias de cães usando a API `dog.ceo`.

## Estrutura do Projeto

O projeto segue uma organização modular, com componentes React, contextos, páginas e estilos globais claramente definidos:

- **`components/`**: Contém todos os componentes reutilizáveis como `Header`, `Footer`, formulários de autenticação, calculadora e visualizador de imagens de cães.
- **`context/`**: Define os contextos usados para gerenciar o tema da aplicação.
- **`pages/`**: As páginas da aplicação como página de cadastro, login, home e sobre.
- **`styles/`**: Estilos globais aplicados através do projeto.
- **`auth/`**: Lógica para autenticação do usuário.
  
## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite:** Ferramenta de construção que visa fornecer uma experiência de desenvolvimento mais rápida e enxuta.
- **Styled-components:** Permite escrever código CSS em arquivos JavaScript.
- **React Router DOM:** Gerenciamento de rotas para aplicações React.

## Instalação e Execução

1. Clone o repositório em sua máquina local usando:
   ```bash
   git clone <url-do-repositório>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   
## Contribuições

Contribuições são sempre bem-vindas. Por favor, para contribuir, faça um fork do projeto, crie uma branch para sua funcionalidade e após os ajustes, abra um pull request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
