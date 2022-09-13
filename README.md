# Project_2 Pitch

## Sexual Health Tracking App
### I am thinking of creating an app to track sexual health, possible exposures, and sexual partners. The app will load on a main page prompting log in authentication in order to authorize the use of the app. Once logged in, a monthly calendar will be the main display item. You will have the options to add an encounter, add a new partner, or request information on a STD/STI.
1. The goal of the app is to have your sexual health in an easy to access app that stores information on when an encounter happened and with who in the case you have been exposed to a disease and need to inform people you have been with and be responsible and practice safer sex practices.
2. Health.gov API to pull information about symptons, treatment, and information on STDs.
3. [Health.gov API]([https://www.google.com/](https://health.gov/our-work/national-health-initiatives/health-literacy/consumer-health-content/free-web-content/apis-developers)
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
 GET | /sexualhealth/:id | READ | Get details for a specific STD/STI
 
 ___
 # User Stories
 
 1. As a user you should be able to log new encounters and edit/delete them 
 2. As a user you should be able to log new partners and edit/delete them 
 3. You don't need to be a user to access the STD FAQs
 
 ___
 
 # Wire Frame
 
 ![WireFrame](https://user-images.githubusercontent.com/108956371/189952088-fca97aa7-b94b-4c95-afeb-41ad57029347.jpg)

 
 ___
 
 # ERD
![Screen Shot 2022-09-13 at 9 27 06 AM](https://user-images.githubusercontent.com/108956371/189956027-32ad2221-39eb-4795-bd5f-8739c1d06109.png)


___

# MVP 
1. Create Models for encounters, partners, and find an sexual health api
2. Create all routes that run and direct the user around the app
3. Utalize the health api to get information on diseases and how they are treated
4. Have a working app

## Stetch 
1. Create a calendar that displays all of the health information
2. Style the pages to make them look aesthetically pleasing
3. Create a more complex note sextion to add additional optional information prompts for encounters/partners
 
 
 
