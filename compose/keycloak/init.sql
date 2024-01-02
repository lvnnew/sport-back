CREATE USER keycloak_user WITH PASSWORD 'keycloak_password';
CREATE SCHEMA IF NOT EXISTS keycloak_schema AUTHORIZATION keycloak_user;