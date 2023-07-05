CREATE DATABASE interests_db;
DROP DATABASE IF EXISTS interests_db;
USE interests_db;

CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  user_name VARCHAR(50),
  user_interests VARCHAR(255)
);
