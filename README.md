##  MVC Tech-Blog 

Table of Contents
* Installation
* Packages
* Description
* Usage
* Contributing
* Tests Questions





Installation:

To install this project:

Start by Cloning this project to your machine by using the "git clone + URL" command.
Open the project with your favorite text editor, like VS Code (in your terminal, first type "cd foldername" then "code .").
Install Node.js from their website, if you haven't done so already. Here are some additional instructions.
Install MySQL from their website. Also install Nodemon and Insomnia. This project includes a package.json file that specifies the dependencies needed for this project, so be sure to run "npm install". This will install the packages specified in the next section.

Packages

General Technologies:

* Javascript
* Node.js
* Git
* Heroku
* Insomnia
* NPM Packages
* nodemon
* express
* dotenv
* mysql2
* sequelize
* bcrypt
* connect-session-sequelize
* express-handlebars
* express-session

Description
	
Model-View-Controller (MVC) Challenge: Tech Blog
Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

The challenge for this week's assignment is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site is to be completely built from scratch and deployed to Heroku. The app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

```
User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

```
Acceptance Criteria

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
```

To view this project deployed, click here.


Usage
After following the instructions in installation:

Open the database file in your terminal.
Run command "mysql -uroot -p" and enter your password (note: keystrokes will not show).
Run command "SOURCE schema.sql" to set up the database and tables.
Optionally, run command "npm run resetdb" to replace steps 2 and 3 (enter password when prompted).
OK to 'quit' MySql.
Create a file called ".env" in the root folder of the program. In this folder include the following information:
DB_NAME=''
DB_USER=''
DB_PW=''
DB_SESSION_SECRET=''
Open the "server.js" file in your integrated terminal.
Run command "npm run seed" (or "node seeds/index.js") to seed the database if desired.
Run command "npm run start" (or "node server.js"). Alternatively, if you have Nodemon installed, run "npm run watch" (or "nodemon server.js").
Open 'localhost:3001' in your browser and see the site in action.
Enter login/logout/signup requests as you please, create a new blog post or update/delete an existing one, or add comments to blog posts.
When finished, run CONTROL-C in terminal to end stop nodemon, and trash the session.

Screenshots

Login and create a post
login/post
Update/Delete your post, or comment on someone else's
Update/delete/comment

## ![MVC-Tech-Blog](./public/images/Screenshot%202023-05-29%20at%2012.03.10%20PM.png)

## ![MVC-Tech-Blog](./public/images/Screenshot%202023-05-29%20at%2012.03.53%20PM.png)

Contributors:





