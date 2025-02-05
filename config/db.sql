-- Active: 1737614447045@@127.0.0.1@3306@nf6
CREATE DATABASE project;

USE project;

CREATE Table oder (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INTEGER,
  total_price INTEGER,
)

CREATE TABLE orderItem (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INTEGER,
  Foreign Key (product_id) REFERENCES product(id),
  order_id INTEGER,
  Foreign Key (order_id) REFERENCES order (id),
  count INTEGER,
  total INTEGER
)


CREATE Table product (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name_uz VARCHAR(255) NOT NULL,
  name_ru VARCHAR(255) NOT NULL,
  brand_id INTEGER,
  countr_id INTEGER,
  price INTEGER,
  old_price INTEGER,
  available VARCHAR(255) NOT NULL,
  description_uz VARCHAR(255) NOT NULL,
  description_ru VARCHAR(255) NOT NULL,
  washable VARCHAR(255) NOT NULL,
  size INTEGER
)