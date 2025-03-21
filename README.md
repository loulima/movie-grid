# 🎬 Cinefilia

## Sobre

Cinefilia é um projeto pessoal desenvolvido em React e Next.js que consome a API do The Movie Database (TMDb) para exibir um catálogo de filmes organizados por sessões como "Mais Bem Avaliados", "Em Exibição" e "Próximos Lançamentos".

O objetivo do projeto é criar uma plataforma onde o usuário possa visualizar filmes de forma simples, intuitiva e com um design responsivo.

## 🚀 Funcionalidades

- Exibição de filmes por categoria:
  - Mais Bem Avaliados
  - Em Exibição nos Cinemas
  - Próximos Lançamentos

- Barra de busca para encontrar filmes pelo título
- Modal com detalhes do filme ao clicar no card
- Design responsivo e adaptável a diferentes telas
- Componentização com TailwindCSS
Consumo de dados da API do TMDb

## Como rodar o projeto localmente



```bash
# Clone o repositório
git clone git@github.com:loulima/movie-grid.git

# Acesse a pasta do projeto
cd movie-grid

# Instale as dependências
yarn install

# Crie um arquivo .env.local e adicione sua chave da TMDb
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key

# Rode o projeto
yarn dev

# Acesse: http://localhost:3000
```
