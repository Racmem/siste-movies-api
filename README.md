# Sistecrédito Node JS - Back API

## API to provide back services to recruitment process

*We recommend to check API documentation*

http://localhost:8080/api/docs/#/

---

## Setting Up

You’ll follow next steps to setup your API in local environment.

1. Clone or download this project from git repository <code>https://github.com/Racmem/siste-movies-api.git</code>
2. Place in project root folder with cmd or bash and execute <code>npm install</code>
3. In project root folder, please rename the file <code>.env_example</code> to <code>.env</code> and adjust the DB connection vars:

```
  NODE_API_DB_HOST=127.0.0.1
  NODE_API_DB_PORT=5432
  NODE_API_DB_NAME=siste_movies
  NODE_API_DB_USERNAME=*****
  NODE_API_DB_PASSWORD=*****
  NODE_API_DB_DIALECT=postgres
  NODE_API_DB_SCHEMA_NAME=''

  CRYPTO_SECRET_KEY=2GsfGvkX3+JH1aDxzLhYkxGhSDV8UZZYDL0lrK2
  JWT_TOKEN_KEY=KQmMWZDy48qMf89NPuWgqkfPkRnrujkB
  JWT_TOKEN_EXPIRATION_TIME=1h
```

4. Create a local database in PostgreSQL (DB connection params should be match with project environment file)
5. Execute the initial SQL Script in your database, the scripts are placed into the file <code>/infraestructure/driven-adapters/sequelize/up.sql</code>
6. Go to the console and execute <code>npm run start-dev</code> to run your API in dev mode.
7. You can find a Postmant Collection and Postman environment in folder <code>/docs</code> Please import this files in you postman to consume all API Endpoints.
8. Check the <code>Swagger Documentation</code> of API in http://localhost:8080/api/docs/#/

---

## Run Unit Tests

You can run unit tests executing the follow command <code>npm run test</code>. you should see a resume of code coverage in console screen.
