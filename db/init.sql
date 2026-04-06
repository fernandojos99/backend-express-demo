CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT,
  content TEXT,
  user_id INTEGER REFERENCES users(id)
);

INSERT INTO users (name,email)
VALUES
('Juan','juan@test.com'),
('Ana','ana@test.com');

INSERT INTO posts (title,content,user_id)
VALUES
('Primer post','contenido de prueba',1),
('Segundo post','otro contenido',1);

