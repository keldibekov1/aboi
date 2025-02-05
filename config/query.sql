-- Active: 1737614480791@@127.0.0.1@3306@world
CREATE DATABASE world;

use world;

CREATE Table users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(55)
);

CREATE Table category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_uz VARCHAR(30),
    name_ru VARCHAR(30),
    image VARCHAR(100)
);

CREATE Table category_item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    Foreign Key (category_id) REFERENCES category(id)
    product_id INT,
    Foreign Key (product_id) REFERENCES product(id)
);

CREATE Table brands (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_uz VARCHAR(30),
    name_ru VARCHAR(30),
    image VARCHAR(30)
);


CREATE Table country (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name_uz VARCHAR(30),
    name_ru VARCHAR(30)
);