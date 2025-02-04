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



