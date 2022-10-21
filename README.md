# Djedi's Hasura Express Starter

This is a very basic starter to set up Hasura with an Express server that can handle the jwt token auth.

It was mainly taken from the following resources:

- [Authorizing with Hasura with Express Tutorial](https://hasura.io/learn/graphql/hasura-authentication/integrations/nodejs-express/)
- [Quickstart with Docker Tutorial](https://hasura.io/docs/latest/getting-started/docker-simple/)

## Getting Started

1. Run Hasura and Postgres in Docker:

   ```shell
   docker-compose up -d
   ```

1. Start Express server

   ```shell
   npm run start
   ```

## Calling APIs

Add a User:

```shell
curl --request POST \
  --url http://localhost:3000/auth/register \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "test@example.com",
    "password": "password1"
}'
```

Login:

```shell
curl --request POST \
  --url http://localhost:3000/auth/login \
  --header 'Content-Type: application/json' \
  --data '{
    "email": "test@example.com",
    "password": "password1"
}'
```
