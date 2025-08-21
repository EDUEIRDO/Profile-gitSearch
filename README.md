# Profile GitSearch
Aplicação Angular para buscar perfis e repositórios do GitHub.

Resumo:
- Stack: Angular(client), imagens em `src/assets`,
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
# Instala o Angular CLI globalmente

npm install
# Instala todas as dependências do projeto listadas em package.json
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
npx ng build --configuration=production

npx http-server ./dist/test/browser -p 8080
# acessar: http://localhost:8080
```

Debug / Problemas comuns
- 403 da API GitHub → sem autenticação você tem rate-limit.
- Versão do Node incompatível → troque com nvm para a versão recomendada.

### Motivação

Este projeto foi desenvolvido com uma abordagem híbrida, combinando o uso de bibliotecas para simplificar tarefas (como a MatIcon) e o desenvolvimento manual para obter um maior controle sobre a aplicação. Embora bibliotecas como o Angular Material tenham sido usadas no início para acelerar o processo, a preferência foi por um desenvolvimento "na mão", acredito que isso torna a aplicação mais única e fortalece o aprendizado.

