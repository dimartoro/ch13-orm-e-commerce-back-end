
# Object-Relational Mapping (ORM): E-commerce Back End

## Description
The Back-End E-Commerce site helps you to manage the database of your E-commerce business. The application uses express.js for routing, MySQL database, Sequelize promise-based Node.js ORM,  Javascript and environment variables to secure your database and credentials.

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Installation](#installation)
- [UserCriteria](#usercriteria)
- [Credits](#credits)
- [Tests](#tests)
- [Email](#email)
- [GitHub](#github)
- [License](#license)
- [VideoLink](#videolink)

## Installation
Clone to your local computer the ch13-orm-e-commerce-back-end application located in my remote repository at https://github.com/dimartoro/ch13-orm-e-commerce-back-end.git Open your Windows CMD in your local computer and write CD until your CMD displays the directory ch13-orm-e-commerce-back-end. In the DB folder access to MySql, source schema and database ecommerce_db. At the root level create and seed the tables by entering npm run seed, and finally, invoke the application by entering npm start. Below you'll find the URL of my walk-through video with the details of the application's functionality.

## UserCriteria
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Credits
https://github.com/coding-boot-camp/fantastic-umbrella.git    
https://courses.bootcampspot.com/courses/3100/assignments/48732?module_item_id=890796  


## Tests
Accomplishing the user criteria will successfully test the application.  
The pictures show the initial seeded data and final results of my application's functionality.  
P1. ecommerce_db product table seeded:         
![alt "ecommerce_db product table seeded"](./Develop/public/images/product_seeded_db.png)      
P2. ecommerce_db category table seeded:          
![alt "ecommerce_db category table seeded"](./Develop/public/images/category_seeded_db.png)    
P3. ecommerce_db tag table seeded:        
![alt "ecommerce_db tag table seeded"](./Develop/public/images/tag_seeded_db.png)    
P4. new created product Id-15/category/tag:        
![alt "new created product Id-15/category/tag"](./Develop/public/images/new_created_product_id15_category_id6_tag_id9.png)  
P5. new created product Id-16/category/tag:     
![alt "new created product Id-16/category/tag"](./Develop/public/images/new_product_id16_category_id6_tag_id9.png)    


## Email
Contact me with additional questions at this email address:

dimartoro@gmail.com

## GitHub
https://github.com/dimartoro

## License
This app is licensed under [MIT](https://choosealicense.com/licenses/mit/) license

## VideoLink
https://drive.google.com/file/d/1KtCrdvaUok2I2daspz5PIZ1Y49kD9MBQ/view  

https://drive.google.com/file/d/1oZitiqjrum3CK-YkMATM15159P1S_4In/view  


