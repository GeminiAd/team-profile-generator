<base target="_blank">

# Team Profile Generator

<a href="#description">Description</a> •
<a href="#key-features">Key Features</a> •
<a href="#installation">Installation</a> •
<a href="#usage">Usage</a> •
<a href="#tests">Tests</a> •
<a href="#technologies-used">Technologies Used</a> •
<a href="#concepts-demonstrated">Concepts Demonstrated</a> •
<a href="#author">Author</a>

-------------------------------------------------------

[Video Demo on YouTube](#TODO)

-------------------------------------------------------

## Description

<a href="#add-a-team-manager">Add a Team Manager</a> •
<a href="#add-an-engineer">Add an Engineer</a> •
<a href="#add-an-intern">Add an Intern</a> •
<a href="#finish-building-my-team">Finish Building my Team</a>

### Add a Team Manager

When you start the program, you will prompted for information about the team manager:                             
![Team Manager Prompt](./images/team-manager-prompt.png)                        

NOTE: If at any time you enter invalid information for an employee:                    
![Invalid Information Prompt](./images/prompt-invalid-answer.png)              

An error is displayed:                                
![Error Displayed in Prompt](./images/prompt-error.png)                     

And you are prompted for the same information:                 
![Display Prompt after Invalid Arguments](./images/re-prompt.png)                          

When you successfully enter information for the team manager, you have the option to add another team member:                        
![Add Another Team Member Prompt](./images/add-another-team-member-prompt.png)                     

### Add an Engineer

If you select add "Add an Engineer", you will be prompted to enter information about the engineer:                 
![Add an Engineer Prompt](./images/add-engineer-prompt.png)                                        

And then you're prompted to add another team member:               
![Add Another Team Member Prompt](./images/add-another-team-member-prompt.png)                        

### Add an Intern

If you select add "Add an Intern", you will be prompted to enter information about the intern:                 
![Add an Intern Prompt](./images/add-intern-prompt.png)             

And then you're prompted to add another team member:               
![Add Another Team Member Prompt](./images/add-another-team-member-prompt.png)                        

### Finish Building My Team

If you select "Finish building my team", the program will end and a website is generated representing the team profile of the team that you entered.         
 
NOTE: No matter the order that you add engineers and interns, the team profile will always show the manager first, then the engineers, and finally the interns, because who cares about interns? They're just going to accept the first paid position they're offered anyways.                   

The following shows the website generated for the above examples, plus an engineer named Alex, an engineer named Grace, and an intern named John:          

Desktop Demo:                          
![Team Profile Desktop](./images/team-profile-desktop.png)           

Mobile Demo:                                  
![Team Profile Mobile](./images/team-profile-mobile.png)                         


## Key Features

- Generate a team profile easily.
- The team portfolio web site is media-responsive: it looks good at any resolution!


## Installation

- Clone this repository down to your hard drive.
- Make sure [node.js](https://nodejs.org/en/) and the npm package manager are both installed.
- Navigate to the directory that you cloned the repo down to in a terminal window and type `npm install` to install all dependencies.

## Usage

- Navigate using a command line interface to the directory the repo was cloned into in the installation step.
- Type `node index.js` in the command line.
- Answer the prompts.

## Tests

There are 26 total tests spread out across 4 test suites. To run all tests type ```npm run test```. Currently all tests pass.              
Here's a comprehensive list of all the tests:

### Employee Class Tests

- Test if an Employee is created when given valid arguments.
- Test if Employee throws an error when provided with no arguments.
- Test if Employee throws an error when given a non-string name parameter.
- Test if Employee throws an error when given a non-number id parameter.
- Test if Employee throws an error when given an id that is a number but not an integer.
- Test if Employee throws an error when given an id that has already been assigned to another employee.
- Test if Employee throws an error when given a non-string email parameter.
- Test if getName() on an employee returns the name it was instantiated with.
- Test if getId() on an employee returns the id it was instantiated with.
- Test if getEmail() on an employee returns the email it was instantiated with.
- Test if getRole() on an employee returns "Employee".

### Manager Class Tests

- Test if a Manager is created when given valid arguments.
- Test if a Manager that is created is an instance of Employee.
- Test if Manager throws an error when given a non-number office number parameter.
- Test if Manager throws an error when given a number that is not an integer.
- Test if getRole() on a manager returns "Manager".

### Engineer Class Tests

- Test if an Engineer is created when given valid arguments.
- Test if an Engineer that is created is an instance of Employee.
- Test if Engineer throws an error when given a non-string github username parameter.
- Test if getGithub() on an engineer returns the github username it was instantiated with.
- Test if getRole() on an engineer returns "Engineer".

### Intern Class Tests

- Test if an Intern is created when given valid arguments.
- Test if an Intern that is created is an instance of Employee.
- Test if Intern throws an error when given a non-string school parameter.
- Test if getSchool() on an intern returns the school it was instantiated with.
- Test if getRole() on an intern returns "Intern".

## Technologies Used

- [Inquirer Package](https://www.npmjs.com/package/inquirer)
- [Jest Test Package](https://jestjs.io/)
- [node.js](https://nodejs.org/en/)
- [Bootstrap v5.2.2](https://getbootstrap.com/)
- [FontAwesome v6 Icons](https://fontawesome.com/)
- [JavaScript](https://www.javascript.com/)

## Concepts Demonstrated

- Test-Driven Design.
- Object-Oriented programming, including polymorphism.
- The use of node.js
- Installing and using node.js packages using npm.
- Mobile-Responsive design.
- Writing to a file using JavaScript.
- General JavaScript and programming knowledge.
- Understanding and using CSS Frameworks, such as Bootstrap.
- General HTML/CSS knowledge.

## Author

Adam Ferro
- [Github](https://github.com/GeminiAd)
- [Linked-In](https://www.linkedin.com/in/adam-ferro)