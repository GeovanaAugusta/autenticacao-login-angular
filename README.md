# Tela de Login - Autenticação

Neste projeto foi desenvolvida uma tela de Login com [Angular CLI](https://github.com/angular/angular-cli) versão 15.1.4, com o intuito de aplicar os conceitos de rotas de guardas nas rotas. Foi usado um servidor fake jwt para simular o post do login e verificar pela token (controle de acessibilidade) se será bem sucedida a entrada do usuário.

## Habilidades

- Análise para escolha da melhor rota de guarda de rotas;

- CanActivateChild para controle de acessibilidade de rotas aninhadas;

- Lazy loading de componentes;

- Controle de transição de rotas por meio da inclusão da lógica de acesso.

## Instruções Gerais

- Clone o repositório

 `git@github.com:GeovanaAugusta/tela-login-angular-auth.git`.
 
 - Entre na pasta do repositório que você acabou de clonar:
    
 `cd tela-login-angular-auth.git
`

## Rodando localmente

- Instale as dependências e inicie a aplicação que rodará na porta 4200:

``` bash
npm install
ng serve
```

- Após isso, abra uma nova aba em seu terminal, entre novamente na pasta do repositório e a partir dela entre na pasta com o servidor fake, para o funcionamento da autenticação, ambos deverão rodar juntos:

``` bash 
cd tela-login-angular-auth.git
cd src/fake-jwt
node index.js
```

- Entre no http://localhost:4200/ e faça seu login:

``` bash 
email: geovanaag@fullstack.com
senha: 123
```

- Tente outras combinações e veja a autenticação funcionando.

## Rodando pelo Vercel

- Entre no link <a href="https://autenticacao-login-angular.vercel.app" target="_blank">aqui</a> e faça seu login ou testes, normalmente.


# Documentação da API

### Login

#### Fazer login
```bash
  POST /
```

+ Formato do corpo da Requisição:
    + Body

```json
  {
    "email": "geovanaag@fullstack.com",
    "password": "123"
  }
  ```
