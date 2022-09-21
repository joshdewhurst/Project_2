# Traxxxker
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
 # User Stories
 
 1. As a user you should be able to log new encounters and edit/delete them 
 2. As a user you should be able to log new partners and edit/delete them 
 3. Anyone using the app should be able to look at the sexual health information
 
 ___
 
 # Wire Frame
 
 ![WireFrame](https://user-images.githubusercontent.com/108956371/189952088-fca97aa7-b94b-4c95-afeb-41ad57029347.jpg)

 
 ___
 
 # Entity Relation Diagram
![Entity Relation Diagram](https://user-images.githubusercontent.com/108956371/191420909-dd157aff-09cb-49aa-986b-a6b42e38e332.png)

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
 
 
 
