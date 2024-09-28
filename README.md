# Teste técnico Mamba Culture

# Sejam bem vindos!

---

Este desafio foi desenvolvido utilizando Programação Orientada a Objetos (POO), seguindo os princípios do SOLID, aplicando o Domain-Driven Design (DDD) e o conceito de arquitetura limpa. Além disso, foi empregado o padrão de design "Factory Method".


## 🛠 Tecnologias usadas:

* Node;
* Typescript;
* Jest;
* Supertest;
* Nodemon;
* Eslint;
* Express;
* Helmet;
* Morgan;
* Swagger;
* Dotenv;
* Prisma;
* Docker;
* Joi;
* Rimraf;

## Execute localmente:

Clone o projeto
```bash
git clone git@github.com:yuryss98/teste-tecnico-mamba-culture.git
```


Vá para o diretório do projeto:
```bash
cd teste-tecnico-mamba-culture
```


Execute o seguinte comando:
```bash
  npm install
```

```bash
docker compose up -d
```

## Declare o arquivo .env na raiz do projeto, siga o arquivo .env.example para detalhes das variaveis de ambiente que serão necessárias;

```bash
npm run prisma:migrate
```

```bash
npm run prisma:seed
```

Apartir daqui pode executar um comando para rodar os testes de comportamento do software, execute o seguinte comando:
```bash
  npm test
```

Para testes end-to-end (e2e) execute:
```bash
  npm run test:e2e
```

Se preferir, o próximo comando executará os testes e exibirá a cobertura dos mesmos:
```bash
  npm run test:coverage
```

Para iniciar a aplicação execute os comandos:

```bash
  npm start
```

Ou para executar a aplicação em modo watch

```bash
  npm run dev
```

## A documentação dos endpoints foi elaborada utilizando o Swagger, você poderá testar os endpoints através do Swagger ou utilizando a ferramenta de sua preferência!. Para acessá-la, basta visitar http://localhost:PORT/api-docs

## Não esqueca de troca o valor de PORT na url dos endpoints para o valor definido no arquivo .env;
