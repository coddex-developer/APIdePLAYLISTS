# API de Gerenciamento de Playlists

Este projeto oferece uma API RESTful para gerenciar playlists e as músicas associadas. Você pode criar, visualizar e adicionar músicas às playlists de forma simples.

## Funcionalidades

- **Visualizar todas as tags:** Obtenha todas as tags de playlists registradas no sistema.
- **Adicionar uma nova tag de playlist:** Crie uma nova tag de playlist, caso ela ainda não exista.
- **Adicionar música a uma playlist:** Adicione músicas a uma playlist existente fornecendo os detalhes necessários.

## Endpoints

### GET `/`
Recupera todas as tags de playlists.

**Resposta**:
- Se nenhuma tag existir: `{ message: "Nenhuma tag encontrada." }`
- Se houver tags: Retorna a lista de playlists.

---

### POST `/add_tag`
Cria uma nova tag de playlist.

**Corpo da Requisição**:
```json
{
  "type": "exemploDeTag"
}


Respostas:

Sucesso: { message: "exemploDeTag foi salvo com sucesso!" }

Se a tag já existir: { message: "Tag já existe no sistema!" }

POST /:idTAG/add_music
Adiciona uma música a uma playlist específica.

Parâmetro da Requisição:

idTAG: Identificador da tag da playlist.

Corpo da Requisição:

{
  "title": "Título da Música",
  "artist": "Nome do Artista",
  "year": 2023,
  "album": "Nome do Álbum"
}


Respostas:

Sucesso: { message: "Título da Música foi salvo com sucesso!" }

Se a tag não existir: { message: "Tag não encontrada!" }

Se a música já existir na playlist: { message: "Música já existe nesta PlayList!" }

Se algum campo estiver ausente: { message: "Preencha todos os campos!" }

Instruções para Configuração
Clone o repositório.

Instale as dependências com:

npm i

Crie um arquivo .env e defina a variável PORT, se necessário.

Inicie o servidor com:

npm start

Acesse a API em http://localhost:8432 (ou na porta especificada).

Stack Tecnológico
Framework Backend: Express.js

Biblioteca UUID: Para geração de IDs únicos.

Configuração de Ambiente: dotenv

Como Funciona
O arquivo playlistModel.js gerencia as funcionalidades principais:

Armazena as playlists e suas músicas associadas.

Valida e processa os dados.

O arquivo router.js mapeia as rotas da API para funções controladoras.

O servidor responde às requisições com respostas no formato JSON.

Exemplo de Fluxo
Use /add_tag para criar uma tag de playlist, como "rock".

Adicione músicas à playlist "rock" com /:idTAG/add_music.

Visualize todas as tags usando /.

Sinta-se à vontade para personalizar este arquivo conforme necessário! 🚀