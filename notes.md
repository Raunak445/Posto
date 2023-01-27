we have two folders
 one for frontend ie client and other one is for backend ie  server 

used npm init command in server folder for package.json file

npm install express for rest api in react 

<b>Note install package called cors ----- it is important for stabilishing a conection between react frontend and backend </b>

<h3>npm install express cors mysql2 </h3>

<b>mysql2 is used for easy access of mysql (it exist on npm world , allows to connect to database easily) </b>

<b> Main entry point for server is object called main in package.json which by default is index.js </b>

<b> we install nodemon and in  packages.json add index.js for nodemon , it will automatically update the changes done in code other wise we will have to manually close connection everytime we make any change in code and restart again (node index.js to start in that case )</b>
 
 note all package installation work done with npm 

 <b>after installation of nodemon u need to add "start":"nodemon index.js " in script of package.json 


Sequelize is a Node. js-based Object Relational Mapper that makes it easy to work with MySQL, MariaDB, SQLite, PostgreSQL databases, and more. An Object Relational Mapper performs functions like handling database records by representing the data as objects
npm install sequelize sequelize-cli