const inquirer = require("inquirer");
const mysql = require("mysql");

//establishes connection with MySql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "passroot",
    database: "bamazon_DB"
  });

//   console.log("____We are connected______");

function askUserPurchase() {

// console.log("___askUserPurchase___");

// ask user to select an item
inquirer.prompt([
    {
        type: "input",
        name: "item_id",
        message: "Please enter the Item ID to purchase.",
        // validate: true,
        // filter: Number
    },
    {
        type: "input",
        name: "quantity",
        message: "How many?",
        // validate: true,
        // filter: Number
    }
]).then(function(input) {
    console.log("Customer has selected: \n    item_id = "  + input.item_id + "\n    quantity = " + input.quantity);

    var item = input.item_id;
    var quantity = input.quantity;

    // Query DB to confirm that the given item ID exists in the desired quantity
    var queryString = "SELECT * FROM products WHERE ?";

    connection.query(queryString, {item_id: item}, function(err, data) {
        if (err) throw err;
        // console.log("data = " + JSON.stringify(data));

        if (data.length === 0) {
            console.log("ERROR: Invalid Item ID. Please select a valid Item ID.");
            displayInventory();

        } else {
            var productData = data[0];
            // console.log("productData = " + JSON.stringify(productData));
            // console.log("productData.stock_quantity = " + productData.stock_quantity);

            if (quantity <= productData.stock_quantity) {
                console.log("Placing order!");

                var updateQueryStr = "UPDATE products SET stock_quantity = " + (productData.stock_quantity - quantity) + " WHERE item_id = " + item;
                // console.log("updateQueryStr = " + updateQueryStr);

                // Update the inventory
                connection.query(updateQueryStr, function(err, data) {
                    if (err) throw err;

                    console.log("Your oder has been placed! Your total is $" + productData.price * quantity);
                    console.log("Thank you!");
                    console.log("\n---------------------------------------------------------------------\n");

                    // End the database connection
                    connection.end();
                })
            } else {
                console.log("Sorry, there is not enough product in stock, your order can not be placed as is.");
                console.log("Please modify your order.");
                console.log("\n---------------------------------------------------------------------\n");

                displayInventory();
            }
        }
    })
})
}

// displayInventory will get the current inventory from bamazin_DB and output it to the console
function displayInventory() {
	// console.log("___displayInventory___");

	queryStr = "SELECT * FROM products";

	// bamazon_DB query
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log("Existing Inventory --------------------------------------------------");
		// console.log("...................\n");

		var stringOutput = "";
		for (var i = 0; i < data.length; i++) {
			stringOutput = "";
			stringOutput += "Item ID: " + data[i].item_id + "  //  ";
			stringOutput += "Product Name: " + data[i].product_name + "  //  ";
			stringOutput += "Department: " + data[i].department_name + "  //  ";
			stringOutput += "Price: $" + data[i].price + "\n";

			console.log(stringOutput);
		}
	  	console.log("---------------------------------------------------------------------\n");

	  	askUserPurchase();
	})
}

// starts app without hoisting display function
function startBamazon() {
	// console.log("___startBamazon___");

	// displays the inventory
	displayInventory();
}

startBamazon();


