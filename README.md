# Profile GitSearch
Aplicação Angular para buscar perfis e repositórios do GitHub.

Resumo:
- Stack: Angular(client), imagens em `src/assets`,
- Projeto localizado em `/home/edueirdo/Desktop/Profile-gitSearch`
- `sourceRoot`: `src` (veja `angular.json`)

Requisitos:
- Node.js LTS: 18.x, 20.x ou 22.x
- NPM >= 8

Instalar o Node:
### Windows
Baixe o instalavel .msi diretamente do site >> [link](https://nodejs.org/en/download) 

### Linux
Instale o nvm se não tiver
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# Recarregar o terminal após conclusãoz

nvm install 22
# Instalar o node

nvm use 22
# Caso houver alguma outra versão do Node, esse comando fará com que ele use a versão 22

node -v
# Exibe a versão atual do Node

npm -v
# Exibe a versão atual do npm
```

Instalar dependências
```bash
cd Profile-gitSearch/

npm install -g @angular/cli
# Comando para instalar o Angular CLI

npm install
# Execute o comando e aguarde
```

Executando o projeto
- Recomendo usar o Angular CLI
```bash
ng serve --configuration development --open
# Ou
npx ng serve --configuration development --open
# Uma outra alternativa
npm start
```

Fazer build para produção
```bash
# build de desenvolvimento
npx ng build --configuration development

npx http-server ./dist/test -p 8080
# acessar: http://localhost:8080
```

Debug / Problemas comuns
- 403 da API GitHub → sem autenticação você tem rate-limit.
- Versão do Node incompatível → troque com nvm para a versão recomendada.


