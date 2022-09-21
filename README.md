# Traxxxker ![Traxxxker-logos](https://user-images.githubusercontent.com/108956371/191430645-ad4df129-6cec-4623-86f4-6f64b19da0c5.jpeg)

## Have fun having fun.
### Traxxxker is your new best friend when it comes to documenting your sexual encounters and educating yourself on sexual health issues. 

#### With an easy to use interface, a user is able to log new sexual encounters and new sexual partners. This will allow you to easily look back and see who you have been with and when you were with them. In the case of an STD exposure, a user is able to more easily notify who they need to notify and track when a possible exposure could have occured. We believe in educating our users on safer sex practices and removing the stigma behind sexually transmitted diseases. This is why our application connects with health.gov to provide infomation on common STDs, as well as other helpful articles within the sexual health sphere. Lets have fun having fun....together!

#### Give it a try!
[Lets Get Traxxxking!](https://traxxxker-joshdewhurst.koyeb.app/)
___
# Installation Instruction
* Fork and clone this repository
* Run `npm install` to install dependencies
* Run `sequelize db:create` to create the development database
* Run `sequelize db:migrate` to migrate the models into the database
* Ensure nodemon is installed globally
    * If not, run `npm install -g nodemon` (or `npm install --save-dev nodemon` for local installation)
* Run `nodemon` to start the application (or `npx nodemon` for local installations)
___

 # CRUD Table
 VERB | URL | Action | Notes
 ----| --- | ------- | -----
 GET | /encounters | Read | Get a list of all current encounters
 GET | /encounters/new | Read | Showing a form that will create a new encounter
 POST | /encounters | Create | creating a new encounter
 GET | /encounters/:id | Read | Get a specific encounter
 GET | /encounters/edit/:id | Read | Get a form that allows you to edit a previously made encounter
 PUT | /encounters/:id | Update | Editing an encounter and posting the edits
 DELETE | /encounters/:id | Delete | Delete an encounter
 GET | /partners | Read | Get a list of all current partners
 Get | /partners/new | Read | Showing a form to log a new partner
 POST | /partners | Create | Creating a new partner 
 GET | /partners/:id | Read | Show a specific partner
 GET | /partners/edit/:id | Read | Show a form to edit partner information
 PUT | /partners/:id | Update | Updating a current partners information
 DELETE | /partners/:id | Delete | Deleting a specific partners data 
 GET | /sexualhealth | Read | Get a list of STDs/STIs
 GET | /sexualhealth/:id | Read | Get details for a specific STD/STI
 GET | /users | Read | Show the homepage of the app
 GET | /users/login | Read | Show the login page for an existing user
 POST | /users/login | CREATE | Accept a payload of form data and use it to log a user in 
 GET | /users/signup | Read | Show the signup page for a new user
 POST | /users | Create | Creates a new user and prompts the user to home page to sign in
 GET | /users/profile | Read | Get the logged in profile page for a user with the rest of the app features
 GET | /users/logout | Read | logs a user out and takes them back to the app home page
 
 ___
 # API 
 I used the health.gov API
 
### Defined URLs to access JSON data
![Screen Shot 2022-09-20 at 11 05 26 PM](https://user-images.githubusercontent.com/108956371/191426890-fa934165-4ab1-4112-9e0d-c9996b44fa8b.png)
___
### Getting JSON data from the health.govAPI
![JSON data](https://user-images.githubusercontent.com/108956371/191426894-07812d26-2ce0-4db0-9490-61576b7e1933.png)

 
 ___
 # User Stories
 
 1. As a user you should be able to log new encounters and edit/delete them 
 2. As a user you should be able to log new partners and edit/delete them 
 3. Anyone using the app should be able to look at the sexual health information
 
 ___
 
 # Wire Frames
 ![WireFrames Part 1](https://user-images.githubusercontent.com/108956371/191425752-3911895b-6edd-43c6-b472-6b3727a7674e.png)
 ![Wireframes Part 2](https://user-images.githubusercontent.com/108956371/191425803-59b15017-cfff-4703-8764-50aafe301429.png)

 
 ___
 
 # Entity Relation Diagram
![Entity Relation Diagram](https://user-images.githubusercontent.com/108956371/191420909-dd157aff-09cb-49aa-986b-a6b42e38e332.png)

___
# Tech Used

* Javascript
* CSS
* HTML
* Node
* Axios
* Postgresql
* Sequelize
* Express
* Bcrypt
* Cookie-Parser
* Crypto-JS
* Dotenv
* EJS
* Express-EJS-Layouts
* Method-Override
___
# MVP 
1. Create Models for encounters, partners, and find an sexual health api
2. Create all routes that run and direct the user around the app
3. Utalize the health api to get information on diseases and how they are treated, and other misc sexual health information
4. Have a working app

## Stetch 
1. Create a calendar that displays all of the health information
2. Style the pages to make them look aesthetically pleasing
3. Incorporate a seperate API for a more expansive look at sexual health topics
4. Create a more complex note sextion to add additional optional information prompts for encounters/partners
 
 
 
