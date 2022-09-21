# Traxxxker
## Have fun having fun
### Traxxxker is your new best friend when it comes to documenting your sexual encounters and educating yourself on sexual health issues. 

#### With an easy to use interface, a user is able to log new sexual encounters and new sexual partners. This will allow you to easily look back and see who you have been with and when you were with them. In the case of an STD exposure, a user is able to more easily notify who they need to notify and track when a possible exposure could have occured. We believe in educating our users on safer sex practices and removing the stigma behind sexually transmitted diseases. This is why our application connects with health.gov to provide infomation on common STDs, as well as other helpful articles within the sexual health sphere. Lets have fun having fun....together!

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
![Updated ERD](https://user-images.githubusercontent.com/108956371/190216046-57f770ff-8cc2-453e-aaa0-76711492ee99.png)

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
 
 
 
