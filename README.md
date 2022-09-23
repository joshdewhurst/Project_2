<img src="https://i.postimg.cc/QdJ55x0X/logo.png" width="350">

## Traxxxker
### Traxxxker is your new best friend when it comes to documenting your sexual encounters and educating yourself on sexual health issues. 

#### With an easy to use interface, a user is able to log new sexual encounters and new sexual partners. This will allow you to easily look back and see who you have been with and when you were with them. In the case of an STD exposure, a user is able to more easily notify who they need to notify and track when a possible exposure could have occured. We believe in educating our users on safer sex practices and removing the stigma behind sexually transmitted diseases. This is why our application connects with health.gov to provide infomation on common STDs, as well as other helpful articles within the sexual health sphere. Lets have fun having fun....together!

#### Give it a try!
[Lets Get Traxxxking!](https://traxxxker-joshdewhurst.koyeb.app/)

Shout out to Jason and Valerie for helping me work through some elements of my code, as well as Ye and April for being patient with me. 
___
# Installation Instruction
* Fork and Clone repo to your local repository
* Run npm init -y to initialize npm
* Open the repo and navigate to package.json file and see a list of npm packages listed under dependencies
* Run npm install or npm i in the terminal to download of all required npm packages. node_modules should appear in the folder.
* Make sure node_modules and .env are in the gitignore file before committing to remote repository
* Run sequelize db:create to create the database in psql
* Run sequelize db:migrate to migrate the models
___

 # Encounter Table
 VERB | URL | Action | Notes
 ----| --- | ------- | -----
 GET | /encounters | Read | Get a list of all current encounters
 GET | /encounters/new | Read | Showing a form that will create a new encounter
 POST | /encounters | Create | creating a new encounter
 GET | /encounters/:id | Read | Get a specific encounter
 GET | /encounters/edit/:id | Read | Get a form that allows you to edit a previously made encounter
 PUT | /encounters/:id | Update | Editing an encounter and posting the edits
 DELETE | /encounters/:id | Delete | Delete an encounter
 
 # Partner Table
 VERB | URL | Action | Notes
 ----| --- | ------- | -----
 GET | /partners | Read | Get a list of all current partners
 Get | /partners/new | Read | Showing a form to log a new partner
 POST | /partners | Create | Creating a new partner 
 GET | /partners/:id | Read | Show a specific partner
 GET | /partners/edit/:id | Read | Show a form to edit partner information
 PUT | /partners/:id | Update | Updating a current partners information
 DELETE | /partners/:id | Delete | Deleting a specific partners data 
 
 # Sexual Health
 VERB | URL | Action | Notes
 ----| --- | ------- | -----
 GET | /sexualhealth | Read | Get a list of STDs/STIs
 GET | /sexualhealth/:id | Read | Get details for a specific STD/STI
 
 # Users
 VERB | URL | Action | Notes
 ----| --- | ------- | -----
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
- [x] Create Models for encounters, partners, and find an sexual health api
- [x] Create all routes that run and direct the user around the app
- [x] Utalize the health api to get information on diseases and how they are treated, and other misc sexual health information
- [x] Have a working app

## Stetch 
- [ ] Create a calendar that displays all of the health information
- [x] Style the pages to make them look aesthetically pleasing
- [ ] Incorporate a seperate API for a more expansive look at sexual health topics
- [x] Create a more complex note sextion to add additional optional information prompts for encounters/partners
___
# Approach taken

#### It was crutial that I took time to plan out what I wanted to do in depth before even starting my code. I took time to think of my app, the routes, and what would be meaningful for a user to have access to for this type of application. I spent some time thinking of possible API's that would be compatible with my idea and started to comb through health.gov to find the nested information I would eventually use in my sexual health routes. Once I decided on an API, I started building all my routes per my planning document and started with the bare bones before expanding my models with mroe attributes, trying to style more clearly, and have the app appear more user friendly. I think I spent more time in developong the idea and the meaning of my app because that was what was most important to me: an app that has a purpose and that can be utalized by users.
___
# Post-Project Reflection
#### I think I am happy with how my project turned out, but not fully satisfied with the result. I am not a styling wiz and I feel like although I did put time into styling my app, I don't think it has an interface that reflects my passion for the purpose of the app. I have some stretch goals I would like to implament soon, particularly adding a new API, I think that health.gov has good information to start, but I think for what I envisioned I should have used or searched more to find a better API that gave a more expansive response for sexual health topics. In additonal, I think I should have set better time parameters for myself and small goals. Because I was so excited about every element of my app, I felt that I jumped back and forth between tasks that led to me not being fully focused on one thing. I wish I knew CSS more to be able to give the user a better expereince, but I am nevertheless happy with the end result and proud that I completed this app all by myself!
 
