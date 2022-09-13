# Project_2 Pitch

## Sexual Health Tracking App
### I am thinking of creating an app to track sexual health, possible exposures, and sexual partners. The app will load on a main page prompting log in authentication in order to authorize the use of the app. Once logged in, a monthly calendar will be the main display item. You will have the options to add an encounter, add a new partner, or request information on a STD/STI.
1. The goal of the app is to have your sexual health in an easy to access app that stores information on when an encounter happened and with who in the case you have been exposed to a disease and need to inform people you have been with and be responsible and practice safer sex practices.
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
 GET | partners/:id | Read | Show a specific partner
 GET | partners/edit/:id | Read | Show a form to edit partner information
 PUT | partners/:id | Update | Updating a current partners information
 DELETE | /partners/:id | Delete | Deleting a specific partners data 
 
 ___
 
 # Wire Frame
 
 ![WireFrame](https://user-images.githubusercontent.com/108956371/189952088-fca97aa7-b94b-4c95-afeb-41ad57029347.jpg)

 
 ___
 
 # ERD
 ![Screen Shot 2022-09-13 at 9 09 07 AM](https://user-images.githubusercontent.com/108956371/189952273-4bf0fa09-b72e-4368-8af6-c578ff034819.png)

___

# MVP 
1. Create Models for encounters, partners, and find an sexual health api
2. Create all routes that run and direct the user around the app
3. Utalize the health api to get information on diseases and how they are treated

## Stetch 
1. Create a calendar that displays all of the health information
2. Style the pages to make them look aesthetically pleasing
 
 
 
