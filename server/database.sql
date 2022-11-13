-- Create a new database called 'perntodo;
--this is simply used as a reference to create our db and table in PostgresSQL
--we can use this in the pgadmin dbms ui or through command prompt
CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);