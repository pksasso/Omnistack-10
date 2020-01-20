<h1 align="center">DevRadar</h1>
<p align="center">Aplicação feita usando NodeJS, ReactJS, MongoDB e a API do Github</p>
<p align="center">
  <a aria-label="Versão do Node" href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/Node-12.14.1-brightgreen"></img>
  </a>
  <a aria-label="Versão do React" href="https://pt-br.reactjs.org/">
    <img src="https://img.shields.io/badge/React-16.12.0-blue"></img>
  </a>
</p>

## Instalação
Configure o MongoDB e crie um arquivo .env na raiz do backend com o seguinte código
```bash
NODE_ENV_MONGO_ACCESS='<seu link de acesso aqui>'
```
## Backend
Após isso rode no seu terminal:
```bash
cd backend
yarn install
yarn dev
```
e o servidor local já estará rodando.

## Frontend
Para usar o mapa gere uma senha de acesso para a API do [Google maps](https://cloud.google.com/maps-platform/?hl=pt-br) e adicione em um arquivo .env na raiz da aplicação da seguinte forma:

```bash
REACT_APP_API_GOOGLEMAPS='<sua senha de acesso>'
```
Após isso salvo rode:
```bash
cd frontend
yarn install
yarn start
```
