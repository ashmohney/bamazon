
DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;


CREATE TABLE products (
	item_id INTEGER(12) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(12) NOT NULL,
	PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ("Shampoo", "Pharmacy", 5.99, 500),
		("Conditioner", "Pharmacy", 6.25, 500),
		("Tall Kitchen Trash Bags", "Grocery", 5.99, 300),
		("Paper Towels", "Grocery", 4.25, 400),
		("Apple", "Produce", 0.35, 800),
		("Bannana", "Produce", 0.25, 10000),
		("Orange Juice With Pulp", "Grocery", 4.45, 300),
		("Organic Milk", "Grocery", 4.99, 200),
		("Paper Towels", "Grocery", 12.99, 575),
		("Yoga Mat", "Sports", 12.75, 150),
		("Tennis Racket", "Sports", 47.99, 95),
		("T-Shirt", "Clothing", 9.55, 120),
		("Gym Shorts", "Clothing", 17.88, 250),
		("Purina Dog Chow", "Pet", 7.25, 175),
		("Fancy Feast Cat Food", "Pet", 12.25, 200),
		('Aleve -24ct', "Pharmacy", 4.95, 500),
		('Band-Aids', "Pharmacy", 3.25, 550),
		('Vanilla Ice Cream', "Grocery", 3.25, 200);
