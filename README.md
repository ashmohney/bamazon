# bamazon
CLI shopping app where MySQL and Node.JS are used to allow users to purchase items. 
#
The Bamazon customer app allows the user to choose an item from the inventory available:
<img src="images/startApp.png">

The user will choose an item and type in the Item ID. Then, the user will be asked to enter a quantity. The app will automatically calculate the cost and thank the user. 
<img src="images/placeOrder.png">

#

Since the order was successful, MySql will track the difference in quanity through the database. 

### Database Before Transaction
<img src="images/unChanged.png">

### Databse Updated After Transaction
<img src="images/changed.png">

#
Otherwise, there is a notice if there insufficient quanitity.
<img src="images/notEnough.png">


